import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import { useTranslation } from 'contexts/Localization'
import { useGetBnbBalance } from 'hooks/useTokenBalance'
import useToast from 'hooks/useToast'
import { useERC20 } from 'hooks/useContract'
import { useAppDispatch } from 'state'
import { formatBigNumber, formatBigNumberToFixed, getFullDisplayBalance, getBalanceNumber } from 'utils/formatBalance'
import { getAddress } from 'utils/addressHelpers'
import { getPoolApr } from 'utils/apr'
import { useFarmFromPid, usePollFarmsWithUserData, usePriceCakeBusd } from 'state/farms/hooks'
import { fetchFarmUserDataAsync } from 'state/farms'
import { useSystemManager } from 'state/user/hooks'
import { CAKE_PER_BLOCK } from 'config'
import useApproveFarm from '../Farms/hooks/useApproveFarm'
import useStakeFarms from '../Farms/hooks/useStakeFarms'
import useUnstakeFarms from '../Farms/hooks/useUnstakeFarms'
import useUnstakeClaimFarms from '../Farms/hooks/useUnstakeClaimFarms'
import useHarvestFarm from '../Farms/hooks/useHarvestFarm'
import Tabs from './components/Tabs';
import Wizard from './components/Wizard';
import StakingCard from './components/StakingCard';
import Checkpoints from './components/Checkpoints/Checkpoints';
import Amount from './components/Amount/Amount';
import Authorization from './components/Authorization/Authorization';
import Confirm from './components/Confirm/Confirm';
import Confirmation from './components/Confirmation/Confirmation';
import UnstakeInitialize from './components/UnstakeInitialize/UnstakeInitialize';
import WithdrawInitialize from './components/WithdrawInitialize/WithdrawInitialize';
import Warning from './components/Warning';
import { stakings } from '../../assets/variables';

export default function Staking() {
  const { t } = useTranslation()
  const { toastError } = useToast()
  const { pathname } = useLocation()
  const [wizard, setWizard] = useState('stake');
  const [isConnected, setIsConnected ] = useState(false)
  const [isBNBAvailable, setIsBNBAvailable ] = useState(false)
  const [isTokenAvailable, setIsTokenAvailable ] = useState(false)
  const [isUnstakeAvailable, setIsUnstakeAvailable ] = useState(false)
  const [isCheckItems, setIsCheckItems ] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [stakeTransaction, setStakeTransaction] = useState('')
  const [unstakeTransaction, setUnstakeTransaction] = useState('')
  const [rewardTransaction, setRewardTransaction] = useState('')
  const [val, setVal] = useState('')

  const [nextAvailable, setNextAvailable] = useState(false)
  const [prevAvailable, setPrevAvailable] = useState(false)
  
  usePollFarmsWithUserData()

  const { account } = useWeb3React()
  const { balance } = useGetBnbBalance()
  const cakePrice = usePriceCakeBusd()
  const dispatch = useAppDispatch()
  const farm = useFarmFromPid(0)
  const { pid, lpAddresses } = farm
  const { allowance, tokenBalance, stakedBalance, unstakedBalance, unstakedRequestTime, earnings } = farm.userData || {}
  const isApproved = account && allowance && allowance.isGreaterThan(0)
  const lpAddress = getAddress(lpAddresses)
  const lpContract = useERC20(lpAddress)
  const { onStake } = useStakeFarms(pid)
  const { onUnstake } = useUnstakeFarms(pid)
  const { onUnstakeClaim } = useUnstakeClaimFarms(pid)
  const { onReward } = useHarvestFarm(pid)
  const { onApprove } = useApproveFarm(lpContract, account)
  const [systemEnable, toggleSystemEnable] = useSystemManager()

  useEffect(() => {
    if (account) {
      setIsConnected(true)
      setIsBNBAvailable(balance.gt(0))
      setIsTokenAvailable(tokenBalance.isGreaterThan(new BigNumber(0)))
      setIsUnstakeAvailable(stakedBalance.isGreaterThan(new BigNumber(0)))
    }
  }, [account, balance, tokenBalance, stakedBalance])

  useEffect(() => {
    if (stakedBalance.isGreaterThan(1000000000000000000000)) {
      toggleSystemEnable(true)
    } else {
      toggleSystemEnable(false)
    }
  }, [stakedBalance, toggleSystemEnable])

  useEffect(() => {
    if (wizard === 'stake') {
      if ((isConnected && isTokenAvailable && isBNBAvailable && isCheckItems && currentStep === 0) || (val && currentStep === 1) || currentStep === 2 || (currentStep === 3)) {
        setNextAvailable(true)
      } else {
        setNextAvailable(false)
      }
    } else if (wizard === 'unstake') {
      if (currentStep === 0 || (isConnected && isUnstakeAvailable && isBNBAvailable && isCheckItems && currentStep === 1) || (val && currentStep === 2) || (currentStep === 3)) {
        setNextAvailable(true)
      } else {
        setNextAvailable(false)
      }
    } else if (wizard === 'withdraw') {
      if ((isConnected && isUnstakeAvailable && isBNBAvailable && isCheckItems && currentStep === 0) || (currentStep === 1)) {
        setNextAvailable(true)
      } else {
        setNextAvailable(false)
      }
    }
    if (currentStep > 0) {
      setPrevAvailable(true)
    } else {
      setPrevAvailable(false)
    }
  }, [isConnected, isTokenAvailable, isUnstakeAvailable, isBNBAvailable, isCheckItems, currentStep, tokenBalance, val, wizard])

  const getDisplayApr = (cakeRewardsApr?: number, lpRewardsApr?: number) => {
  if (cakeRewardsApr && lpRewardsApr) {
    return (cakeRewardsApr + lpRewardsApr).toLocaleString('en-US', { maximumFractionDigits: 2 })
  }
  if (cakeRewardsApr) {
    return cakeRewardsApr.toLocaleString('en-US', { maximumFractionDigits: 2 })
  }
  return null
}

  const handleCheckItems = () => {
    setIsCheckItems(!isCheckItems)
  }

  const handleApprove = useCallback(async () => {
    try {
      await onApprove()
      dispatch(fetchFarmUserDataAsync({ account, pids: [pid] }))
      setCurrentStep(currentStep + 1)
    } catch (e) {
      toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
      console.error(e)
    }
  }, [onApprove, dispatch, account, pid, t, toastError, currentStep])

  const handleStake = useCallback(async (amount: string) => {
    try {
      const tx = await onStake(amount)
      dispatch(fetchFarmUserDataAsync({ account, pids: [pid] }))
      setCurrentStep(currentStep + 1)
      setStakeTransaction(tx.transactionHash)
    } catch (e) {
      toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
      console.error(e)
    }
  }, [onStake, account, pid, dispatch, t, toastError, currentStep])

  const handleUnstake = useCallback(async (amount: string) => {
    try {
      const tx = await onUnstake(amount)
      dispatch(fetchFarmUserDataAsync({ account, pids: [pid] }))
      setCurrentStep(currentStep + 1)
      console.log("pooh, tx = ", tx)
      setUnstakeTransaction(tx.transactionHash)
    } catch (e) {
      toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
      console.error(e)
    }
  }, [onUnstake, account, pid, dispatch, t, toastError, currentStep])

  const handleWithdraw = useCallback(async () => {
    console.log("pooh, handleReward")
    try {
      const tx = await onUnstakeClaim()
      dispatch(fetchFarmUserDataAsync({ account, pids: [pid] }))
      setCurrentStep(currentStep + 1)
      setRewardTransaction(tx.transactionHash)
    } catch (e) {
      toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
      console.error(e)
    }
  }, [onUnstakeClaim, account, pid, dispatch, t, toastError, currentStep])

  const handleNextButton = useCallback(() => {
    let step = currentStep + 1
    if (wizard === 'stake') {
      if (currentStep === 2 && !isApproved) {
        handleApprove()        
        step = currentStep
      } else if (currentStep === 3) {
        handleStake(val)
        step = currentStep
      }
    } else if (wizard === 'unstake') {
      if (currentStep === 3) {
        handleUnstake(val)
        step = currentStep
      }
    } else if (wizard === 'withdraw') {
      if (currentStep === 1) {
        handleWithdraw()
        step = currentStep
      }
    }
    setCurrentStep(step)
  }, [currentStep, setCurrentStep, handleApprove, handleStake, handleUnstake, handleWithdraw, isApproved, wizard, val])

  const handlePrevButton = useCallback(() => {
    setCurrentStep(currentStep - 1)
  }, [currentStep, setCurrentStep])

  const selectWizard = tab => {
    setWizard(tab)
    reset()
  }

  const reset = () => {
    setStakeTransaction('')
    setUnstakeTransaction('')
    setRewardTransaction('')
    setCurrentStep(0)
    setIsCheckItems(false)
    setVal('')
  }

  const setValue = (value) => {
    setVal(value)
  }

  const { poolApr, lpRewardsApr } = getPoolApr(cakePrice.toNumber(), cakePrice.toNumber(), getBalanceNumber(new BigNumber(farm.totalStakedAmount), 18), CAKE_PER_BLOCK)

  return (
    <section className="staking">
      <div className="row" style={{ width: '98%', marginLeft: '1%' }}>
        <div className="col-12 col-md-9">
          <Tabs selectTab={selectWizard} apr={poolApr} totalStake={getFullDisplayBalance(new BigNumber(farm.totalStakedAmount))} stakers={farm.stakedUsers.toNumber().toString()} />
          <Wizard wizard={wizard} step={currentStep} />
          { wizard === 'stake' && 
            ( currentStep === 0 ? 
              <Checkpoints isConnected={isConnected} tokenBalance={getFullDisplayBalance(tokenBalance)} isTokenAvailable={isTokenAvailable} bnbBalance={formatBigNumberToFixed(balance, 4, 18)} isBNBAvailable={isBNBAvailable} checkItem={handleCheckItems} isCheckItems={isCheckItems} wizard="stake" /> 
              :
              ( currentStep === 1 ? 
                <Amount max={tokenBalance} symbol="SERA" setValue={setValue} value={val} wizard="stake"/> 
                : 
                ( currentStep === 2 ? 
                  <Authorization /> 
                  : 
                  ( currentStep === 3 ? 
                    <Confirm /> 
                    : 
                    <Confirmation transaction={stakeTransaction} wizard="stake" />
                  )
                )
              )
            )
          }
          { wizard === 'unstake' && 
            ( currentStep === 0 ? 
              <Warning /> 
              : 
              ( currentStep === 1 ? 
                <Checkpoints isConnected={isConnected} stakeAmount={getFullDisplayBalance(stakedBalance)} isUnstakeAvailable={isUnstakeAvailable} bnbBalance={formatBigNumberToFixed(balance, 4, 18)} isBNBAvailable={isBNBAvailable} checkItem={handleCheckItems} isCheckItems={isCheckItems} wizard="unstake" />
                :
                ( currentStep === 2 ? 
                  <Amount max={stakedBalance} symbol="SERA" setValue={setValue} value={val} wizard="unstake"/> 
                  :
                  ( currentStep === 3 ? 
                    <UnstakeInitialize /> 
                    : 
                    <Confirmation transaction={unstakeTransaction} wizard="unstake" />
                  )
                )
              )
            )
          }
          { wizard === 'withdraw' && 
            ( currentStep === 0 ? 
              <Checkpoints isConnected={isConnected} stakeAmount={getFullDisplayBalance(stakedBalance)} isUnstakeAvailable={isUnstakeAvailable} bnbBalance={formatBigNumberToFixed(balance, 4, 18)} isBNBAvailable={isBNBAvailable} checkItem={handleCheckItems} isCheckItems={isCheckItems} wizard="withdraw" requestTime={unstakedRequestTime} />
              :
              ( currentStep === 1 ? 
                <WithdrawInitialize />
                : 
                <Confirmation transaction={rewardTransaction} wizard="unstake" />
              )
            )
          }
          <div className="d-flex justify-content-center my-3">
            <button type="button" className="btn btn-warning button-small text-white mx-3" style={{ width: '100px' }} disabled={!prevAvailable} onClick={handlePrevButton} >Previous</button>
            <button type="button" className="btn btn-warning button-small text-white mx-3" style={{ width: '100px' }} disabled={!nextAvailable} onClick={handleNextButton} >Next</button>
          </div>
        </div>
        <div className="col-12 col-md-3 tabs-card">
          <StakingCard key={3} name={stakings[3].name} value={getFullDisplayBalance(stakedBalance, 18, 4)}/>
          <StakingCard key={4} name={stakings[4].name} value={getFullDisplayBalance(unstakedBalance, 18, 4)}/>
        </div>
      </div>
    </section>
  )
}
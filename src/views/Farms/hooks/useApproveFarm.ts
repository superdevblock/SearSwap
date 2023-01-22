import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { ethers, Contract } from 'ethers'
import { useMasterchef } from 'hooks/useContract'
import { useCallWithGasPrice } from 'hooks/useCallWithGasPrice'
import { approve } from './callHelpers'

const useApproveFarm = (lpContract: Contract, account: string) => {
  const masterChefContract = useMasterchef()

  const { callWithGasPrice } = useCallWithGasPrice()
  const handleApprove = useCallback(async () => {
    const tx = await callWithGasPrice(lpContract, 'approve', [masterChefContract.address, ethers.constants.MaxUint256])
    const receipt = await tx.wait()
    return receipt.status
  }, [lpContract, masterChefContract, callWithGasPrice])

  // const handleApprove = useCallback(async () => {
  //   try {
  //     const tx = await approve(lpContract, masterChefContract, account)
  //     return tx
  //   } catch (e) {
  //     return false
  //   }
  // }, [account, lpContract, masterChefContract])

  return { onApprove: handleApprove }
}

export default useApproveFarm

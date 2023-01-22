import BigNumber from 'bignumber.js'
import masterchefABI from 'config/abi/masterchef.json'
import erc20 from 'config/abi/erc20.json'
import { getAddress, getMasterChefAddress } from 'utils/addressHelpers'
import { BIG_TEN, BIG_ZERO } from 'utils/bigNumber'
import multicall from 'utils/multicall'
import { SerializedFarm, SerializedBigNumber } from '../types'

type PublicFarmData = {
  tokenAmountTotal: SerializedBigNumber
  lpTotalInQuoteToken: SerializedBigNumber
  lpTotalSupply: SerializedBigNumber
  tokenPriceVsQuote: SerializedBigNumber
  poolWeight: SerializedBigNumber
  multiplier: string
  totalStakedAmount: SerializedBigNumber
  stakedUsers: SerializedBigNumber
}

const fetchFarm = async (farm: SerializedFarm): Promise<PublicFarmData> => {
  const { pid, lpAddresses, token, quoteToken, referLpAddresses } = farm
  const lpAddress = getAddress(lpAddresses)
  const balanceLpAddress = referLpAddresses ? getAddress(referLpAddresses) : getAddress(lpAddresses)
  const calls = [
    // Balance of token in the LP contract
    {
      address: token.address,
      name: 'balanceOf',
      params: [balanceLpAddress],
    },
    // Balance of quote token on LP contract
    {
      address: quoteToken.address,
      name: 'balanceOf',
      params: [balanceLpAddress],
    },
    // Balance of LP tokens in the master chef contract
    {
      address: lpAddress,
      name: 'balanceOf',
      params: [getMasterChefAddress()],
    },
    // Total supply of LP tokens
    {
      address: lpAddress,
      name: 'totalSupply',
    },
    // Token decimals
    {
      address: token.address,
      name: 'decimals',
    },
    // Quote token decimals
    {
      address: quoteToken.address,
      name: 'decimals',
    },
  ]

  const [tokenBalanceLP, quoteTokenBalanceLP, lpTokenBalanceMC, lpTotalSupply, tokenDecimals, quoteTokenDecimals] =
    await multicall(erc20, calls)

  // Ratio in % of LP tokens that are staked in the MC, vs the total number in circulation
  const lpTokenRatio = new BigNumber(lpTokenBalanceMC).div(new BigNumber(lpTotalSupply))

  // Raw amount of token in the LP, including those not staked
  const tokenAmountTotal = new BigNumber(tokenBalanceLP).div(BIG_TEN.pow(tokenDecimals))
  const quoteTokenAmountTotal = new BigNumber(quoteTokenBalanceLP).div(BIG_TEN.pow(quoteTokenDecimals))

  // Amount of quoteToken in the LP that are staked in the MC
  const quoteTokenAmountMc = quoteTokenAmountTotal.times(lpTokenRatio)

  // Total staked in LP, in quote token value
  const lpTotalInQuoteToken = quoteTokenAmountMc.times(new BigNumber(2))

  // Only make masterchef calls if farm has pid
  const [info, totalAllocPoint, stakedUsers] =
    pid || pid === 0
      ? await multicall(masterchefABI, [
          {
            address: getMasterChefAddress(),
            name: 'poolInfo',
            params: [pid],
          },
          {
            address: getMasterChefAddress(),
            name: 'totalAllocPoint',
          },
          {
            address: getMasterChefAddress(),
            name: 'stakedUsers',
          },
        ])
      : [null, null, null]

  const allocPoint = info ? new BigNumber(info.allocPoint?._hex) : BIG_ZERO
  const totalStakedAmount = info ? new BigNumber(info.totalAmount?._hex) : BIG_ZERO
  const poolWeight = totalAllocPoint ? allocPoint.div(new BigNumber(totalAllocPoint)) : BIG_ZERO
  const stakedUsersLength = stakedUsers ? new BigNumber(stakedUsers) : BIG_ZERO

  return {
    tokenAmountTotal: tokenAmountTotal.toJSON(),
    lpTotalSupply: new BigNumber(lpTotalSupply).toJSON(),
    lpTotalInQuoteToken: lpTotalInQuoteToken.toJSON(),
    tokenPriceVsQuote: quoteTokenAmountTotal.div(tokenAmountTotal).toJSON(),
    poolWeight: poolWeight.toJSON(),
    multiplier: `${allocPoint.div(100).toString()}X`,
    totalStakedAmount: totalStakedAmount.toString(),
    stakedUsers: stakedUsersLength.toJSON(),
  }
}

export default fetchFarm

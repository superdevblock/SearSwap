import { ethers } from 'ethers'

export const approve = async (lpContract, masterChefContract, account) => {
  return lpContract.methods
    .approve(masterChefContract.address, ethers.constants.MaxUint256)
    .send({ from: account })
}

import { useCallback } from 'react'
import { stakeFarm } from 'utils/calls'
import { useMasterchef } from 'hooks/useContract'

const useStakeFarms = (pid: number) => {
  const masterChefContract = useMasterchef()

  const handleStake = useCallback(
    async (amount: string) => {
      const tx = await stakeFarm(masterChefContract, pid, amount)
      return tx
    },
    [masterChefContract, pid],
  )

  return { onStake: handleStake }
}

export default useStakeFarms

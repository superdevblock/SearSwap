import { useCallback } from 'react'
import { unstakeFarm } from 'utils/calls'
import { useMasterchef } from 'hooks/useContract'

const useUnstakeFarms = (pid: number) => {
  const masterChefContract = useMasterchef()

  const handleUnstake = useCallback(
    async (amount: string) => {
      const tx = await unstakeFarm(masterChefContract, pid, amount)
      return tx;
    },
    [masterChefContract, pid],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstakeFarms

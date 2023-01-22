import { useCallback } from 'react'
import { unstakeClaimFarm } from 'utils/calls'
import { useMasterchef } from 'hooks/useContract'

const useUnstakeClaimFarms = (pid: number) => {
  const masterChefContract = useMasterchef()

  const handleUnstakeClaim = useCallback(
    async () => {
      const tx = await unstakeClaimFarm(masterChefContract, pid)
      return tx;
    },
    [masterChefContract, pid],
  )

  return { onUnstakeClaim: handleUnstakeClaim }
}

export default useUnstakeClaimFarms

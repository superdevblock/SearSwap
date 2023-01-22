import React from 'react'
import { Form } from 'react-bootstrap'
import BigNumber from 'bignumber.js'
import { stakings } from 'assets/variables'
import CheckpointCard from './CheckpointCard'

interface CheckpointsProps {
  isConnected: boolean
  tokenBalance?: string
  isTokenAvailable?: boolean
  stakeAmount?: string
  isUnstakeAvailable?: boolean
  bnbBalance: string
  isBNBAvailable: boolean
  checkItem: () => void
  isCheckItems: boolean
  wizard: string
  requestTime?: BigNumber
}

export default function Checkpoints({isConnected, tokenBalance, isTokenAvailable, stakeAmount, isUnstakeAvailable, bnbBalance, isBNBAvailable, checkItem, isCheckItems, wizard, requestTime}: CheckpointsProps) {
  const now = new Date()
  let time = 0
  if (requestTime) {
    time = (requestTime.toNumber() - 5) * 1000 - now.getTime()
  }

  return (
    <>
      <section className="checkpoints">
        <h2>Checkpoints</h2>
        <p>The following conditions must be met to proceed:</p>
        <div>
          <CheckpointCard key={6} name={stakings[6].name} value={stakings[6].value} selected={isConnected} />
          { wizard === 'stake' && <CheckpointCard key={7} name={stakings[7].name} value={stakings[7].value} prefix={stakings[7].prefix} balance={tokenBalance} selected={isTokenAvailable} />}
          { wizard === 'unstake' && <CheckpointCard key={10} name={stakings[10].name} value={stakings[10].value} prefix={stakings[10].prefix} balance={stakeAmount} selected={isUnstakeAvailable} />}
          { wizard === 'withdraw' && <CheckpointCard key={12} name={stakings[12].name} selected={time < 0} countdown unstakedRequestTime={time} />}
          <CheckpointCard key={8} name={stakings[8].name} value={stakings[8].value} prefix={stakings[8].prefix} balance={bnbBalance} selected={isBNBAvailable} />
          { wizard === 'stake' && <CheckpointCard key={9} name={stakings[9].name} value={stakings[9].value} selected />}
          { wizard === 'unstake' && <CheckpointCard key={11} name={stakings[11].name} value={stakings[11].value} selected />}
          { wizard === 'withdraw' && <CheckpointCard key={13} name={stakings[13].name} selected={isUnstakeAvailable} />}
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <input type="checkbox" className="mr-2" onClick={checkItem} checked={isCheckItems} />
          <span className="mr-1">I have read the</span><a href="www.google.com"> Terms and Conditions</a>
        </div>
      </section>
    </>
  );
}

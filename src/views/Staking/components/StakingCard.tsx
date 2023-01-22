import React from 'react';

export interface StakingCardContent {
  name: string
  value?: string
  prefix?: string
  balance?: number
  selected?: boolean
}

export default function StakingCard({name, value}: StakingCardContent) {
  return (
    <section className="round-card" style={{ marginBottom: `${['Staked', 'Unstaked', 'Rewards'].includes(name) ? '30px' : undefined}` }}>
      <div className="round-card-header">{name}</div>
      <hr />
      <div className="round-card-body">
        <p className="hero-description mb-1">
          {value}
          {name === 'APY' && '%'}
        </p>
        {name === 'Rewards' && <div className="d-flex justify-content-around">
          <button type="button" className="btn btn-warning button-small text-white" style={{ width: '40%' }}>Stake</button>
          <button type="button" className="btn btn-warning button-small text-white" style={{ width: '40%' }}>Withdraw</button>
        </div>}
      </div >
    </section >
  );
}

import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Form } from 'react-bootstrap'
import useCurrentBlockTimestamp from 'hooks/useCurrentBlockTimestamp'
import Countdowns from '../Countdowns'

const StyledSection = styled.section<{selected: boolean}>`
  border: ${({ selected }) => (selected ? "1.5px solid #F0B90B" : "none")};
`

export interface CheckpointCardContent {
  name: string
  value?: string
  prefix?: string
  balance?: string
  selected?: boolean
  countdown?: boolean
  unstakedRequestTime?: number
}

export default function CheckpointCard({name, value, selected = false, prefix, balance, countdown, unstakedRequestTime}: CheckpointCardContent) {
  const now = new Date()
  console.log("pooh1, current now = ", now.getTime())
  if (unstakedRequestTime) {
    console.log("pooh1, unstakedRequestTime = ", unstakedRequestTime - now.getTime())
  //   console.log("pooh1, current now = ", now)
  }
  return (
    <StyledSection className="round-card" selected={selected} >
      <div className={ selected ? "p-select-card selected" : "p-select-card" }>
        <span className="round-card-header">{name}</span>
        <br/>
        { value && 
          <>
            <span className="hero-description mt-1">{value}</span>
            <br/> 
          </>
        }
        { prefix && <span className="hero-description mt-1">{`${prefix}: ${balance}`}</span> }
      </div>
      { countdown && unstakedRequestTime > 0 && <Countdowns time={unstakedRequestTime + now.getTime()} />}
    </StyledSection >
  );
}

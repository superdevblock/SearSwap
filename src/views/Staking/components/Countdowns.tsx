import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import Countdown from './Countdown'

const StyledTwitterCard = styled.div`
  width: 100%;
  background: transparent;
`
const Page = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

interface CountdownsProps {
  time: number
}

const Countdowns = ({time} : CountdownsProps) => {
  console.log("pooh, time = ", time)
  return (
    <Page>
      <StyledTwitterCard>
        <Countdown date={time} />
      </StyledTwitterCard>
    </Page>
  )
}

export default Countdowns

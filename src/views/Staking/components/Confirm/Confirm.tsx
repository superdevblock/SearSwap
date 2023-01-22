import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Form } from 'react-bootstrap'
import BigNumber from 'bignumber.js'
import { stakings } from 'assets/variables'
import { getFullDisplayBalance, formatNumber } from 'utils/formatBalance'

const StyledBalanceText = styled.div`
  margin-top: 5px;
  text-align: left;
`

const StyledValueText = styled.span`
  color: #E9F3FC;
  font-weight: 700;
`

const StyledTitleArea = styled.div`
  display: flex !important;
  flex-direction: column;
  text-align: center;
  margin-bottom: 30px;
`

const StyledContractAddress = styled.a`
  text-decoration: underline;
  color: #000;
`

export default function Confirm() {

  return (
    <section className="checkpoints">
      <StyledTitleArea>
        <h2>Confirm</h2>
        <h6>Required transaction 2 of 2</h6>
        <p>In this step, you deposit the tokens into the staking contract. After this step, your tokens will be successfully staked.</p>
      </StyledTitleArea>
    </section>
  );
}

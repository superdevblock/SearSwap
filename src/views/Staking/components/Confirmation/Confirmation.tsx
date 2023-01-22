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
  color: #000;
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

interface ConfirmationProps {
  transaction: string
  wizard: string
}

export default function Confirmation({transaction, wizard} : ConfirmationProps) {

  return (
    <section className="checkpoints">
      <StyledTitleArea>
        <h2>Success</h2>
        { wizard === 'stake' && <h6>Congratulations! Your tokens are now staked.</h6> }
        { wizard === 'unstake' && <h6>You have initiated the unstaking process and started the 7 day timer.</h6> }
        <p>If desired, you may check Polygon network to confirm the transaction.</p>
        <StyledContractAddress href={`https://polygonscan.com/tx/${transaction}`} >{transaction}</StyledContractAddress>
      </StyledTitleArea>
    </section>
  );
}

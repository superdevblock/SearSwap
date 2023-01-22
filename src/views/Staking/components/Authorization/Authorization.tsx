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
  font-weight: 555;
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

export default function Authorization() {

  return (
    <section className="checkpoints">
      <StyledTitleArea>
        <h2>Pre-authorization</h2>
        <h6>Required transaction 1 of 2</h6>
        <p>In this step, you grant access to the staking smart contract to accept your SERA</p>
      </StyledTitleArea>

      <h2>Waiting for the transaction to complete</h2>
      <p>Please wait for the transaction to confirm before proceeding.</p>
      <StyledContractAddress href="https://polygonscan.com/address/0x0b3006F5a3B3822Fd1713D30f4f3dB5e930F00c0">0x0b3006F5a3B3822Fd1713D30f4f3dB5e930F00c0</StyledContractAddress>
    </section>
  );
}

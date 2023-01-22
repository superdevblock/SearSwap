import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Form } from 'react-bootstrap'
import BigNumber from 'bignumber.js'
import { stakings } from 'assets/variables'
import { getFullDisplayBalance, formatNumber } from 'utils/formatBalance'
import TokenInput from './TokenInput'

const StyledBalanceText = styled.div`
  margin-top: 20px;
  text-align: left;
`

const StyledValueText = styled.span`
  color: #000;
  font-size:14px;
  font-weight: 555;
`

const StyledTokenAmountArea = styled.div`
  display: flex!important;
  flex-direction: column;
  max-width: 430px;
  margin: auto;
  margin-top: 20px;
`

interface TokenInputProps {
  max: BigNumber
  symbol: string
  value: string
  onSelectMax?: () => void
  addLiquidityUrl?: string
  inputTitle?: string
  decimals?: number
  setValue?: (value: any) => void
  wizard: string
}

export default function Amount({ max, symbol, onSelectMax, addLiquidityUrl, inputTitle, decimals = 18, setValue, value, wizard} : TokenInputProps) {
  const [val, setVal] = useState(value)

  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(max)
  }, [max])

  const handleSelectMax = useCallback(() => {
    setVal(fullBalance)
    setValue(fullBalance)
  }, [ fullBalance, setValue])

  const handleChange = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      if (event.currentTarget.validity.valid) {
        setVal(event.currentTarget.value.replace(/,/g, '.'))
        setValue(event.currentTarget.value.replace(/,/g, '.'))
      }
    },
    [setValue],
  )

  return (
    <>
      <section className="checkpoints">
        <h2>Please enter the amount of SERA you want to stake </h2>
        <StyledTokenAmountArea>
          <TokenInput value={val}
            onSelectMax={handleSelectMax}
            onChange={handleChange}
            max={fullBalance}
            symbol={symbol}
            addLiquidityUrl={addLiquidityUrl}
            inputTitle="Amount"/>
          { wizard === 'stake' && <StyledBalanceText>Balance: <StyledValueText>{fullBalance}</StyledValueText></StyledBalanceText>}
          { wizard === 'unstake' && <StyledBalanceText>Staked Amount: <StyledValueText>{fullBalance}</StyledValueText></StyledBalanceText>}
        </StyledTokenAmountArea>
      </section>
    </>
  );
}

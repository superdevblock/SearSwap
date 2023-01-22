import React from 'react'
import styled from 'styled-components'
import { Box, Button, Flex, InjectedModalProps, LinkExternal, Message, Skeleton, Text } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import useTokenBalance, { FetchStatus, useGetBnbBalance } from 'hooks/useTokenBalance'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'
import { getBscScanLink } from 'utils'
import { getFullDisplayBalance, formatBigNumber } from 'utils/formatBalance'
import tokens from 'config/constants/tokens'
import CopyAddress from './CopyAddress'

const LogoutButton = styled(Button)`
  justify-content: center;
  align-self: center;
`

interface WalletInfoProps {
  hasLowBnbBalance: boolean
  onDismiss: InjectedModalProps['onDismiss']
}

const WalletInfo: React.FC<WalletInfoProps> = ({ hasLowBnbBalance, onDismiss }) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { balance, fetchStatus } = useGetBnbBalance()
  const { balance: cakeBalance, fetchStatus: cakeFetchStatus } = useTokenBalance(tokens.cake.address)
  const { logout } = useAuth()

  const handleLogout = () => {
    onDismiss()
    logout()
  }

  return (
    <>
      <CopyAddress account={account} mb="24px" />
      <Flex alignItems="center" justifyContent="center" mb="24px">
        <LinkExternal href={getBscScanLink(account, 'address')}>{t('View on Polygon')}</LinkExternal>
      </Flex>
      <LogoutButton variant="secondary" width="50%" onClick={handleLogout}>
        {t('Log out')}
      </LogoutButton>
    </>
  )
}

export default WalletInfo

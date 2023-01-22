import React, { useState } from 'react'
import styled from "styled-components"
import { useWeb3React } from '@web3-react/core'
import { Button, useModal, useWalletModal } from '@pancakeswap/uikit'
import { FaAlignJustify, ImStarEmpty, ImStarFull } from 'react-icons/all'
import { Link } from 'react-router-dom'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'
import { useSystemManager } from 'state/user/hooks'
import logo from '../assets/logo.png'
import WalletModal, { WalletView } from './Menu/UserMenu/WalletModal'

const StyledNav = styled.nav`
  background-color: #E9F3FC;
`

const Header = () => {
  const { account } = useWeb3React()
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [star, setStar] = useState(true)

  const [systemEnable, toggleSystemEnable] = useSystemManager()

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleStar = () => {
    setStar(!star)
  }

  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)
  const [ onPresentWalletModal ] = useModal(<WalletModal initialView={WalletView.WALLET_INFO} />)

  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;

  return (
    <section className="header">
      <StyledNav className="navbar">
        <Link to="/">
          <span>SERA</span>
        </Link>
        <div className="nav-center">
          <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
            <li>
              { account ? 
                <Link to="/" onClick={onPresentWalletModal} >{accountEllipsis}</Link>
                :
                <Link to="/" onClick={onPresentConnectModal} >Connect Wallet</Link>
              }
            </li>
            <li>
              <Link to="/info">More Info</Link>
            </li>
            <li className={systemEnable ? '' : 'disable'}>
              <Link to="/projects">Use App</Link>
            </li>
          </ul>
          <ul className="nav-mobile">
            <li>
              <button type="button" className="nav-btn" onClick={handleToggle}>
                <FaAlignJustify className="nav-icon" />
              </button>
            </li>
              <li>
                {star ? (
                  <button type="button" className="nav-btn" onClick={handleStar}>
                    <ImStarEmpty className="nav-icon" />
                  </button>
                ) : (
                  <button type="button" className="nav-btn" onClick={handleStar}>
                    <ImStarFull className="nav-icon" />
                  </button>
                )}
              </li>
          </ul>
        </div>
      </StyledNav>
    </section>
  )
}

export default Header

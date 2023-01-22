import React, { lazy } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { ResetCSS } from '@pancakeswap/uikit'
import BigNumber from 'bignumber.js'
import useEagerConnect from 'hooks/useEagerConnect'
import useUserAgent from 'hooks/useUserAgent'
import useScrollOnRouteChange from 'hooks/useScrollOnRouteChange'
import { usePollBlockNumber } from 'state/block/hooks'
import { usePollCoreFarmData } from 'state/farms/hooks'
import { DatePickerPortal } from 'components/DatePicker'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import { ToastListener } from './contexts/ToastsContext'
import PageLoader from './components/Loader/PageLoader'
import EasterEgg from './components/EasterEgg'
import history from './routerHistory'
import Header from './components/Header'
import Staking from "./views/Staking/Staking"
// Views included in the main bundle

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const Farms = lazy(() => import('./views/Farms'))
const Info = lazy(() => import('./views/Info'))
const NotFound = lazy(() => import('./views/NotFound'))

// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  usePollBlockNumber()
  useEagerConnect()
  usePollCoreFarmData()
  useScrollOnRouteChange()
  useUserAgent()

  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
      <Header />
      {/* <Menu> */}
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <Switch>
            <Route path="/farms">
              <Farms tokenMode />
            </Route>
            <Route exact path="/">
              <Staking />
            </Route>
            <Route exact path="/info">
              <Info />
            </Route>            

            {/* 404 */}
            <Route component={NotFound} />
          </Switch>
        </SuspenseWithChunkError>
      {/* </Menu> */}
      <EasterEgg iterations={2} />
      <ToastListener />
      <DatePickerPortal />
    </Router>
  )
}

export default React.memo(App)

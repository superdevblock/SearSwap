import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'SeraSwap',
  description:
    'The most popular AMM on BSC by user count! Earn SERA through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by SeraSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://seraswap.com/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('SeraSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('SeraSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('SeraSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('SeraSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('SeraSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('SeraSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('SeraSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('SeraSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('SeraSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('SeraSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('SeraSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('SeraSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('SeraSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('SeraSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('SeraSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('SeraSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('SeraSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('SeraSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('SeraSwap Info & Analytics')}`,
        description: 'View statistics for Seraswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('SeraSwap Info & Analytics')}`,
        description: 'View statistics for Seraswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('SeraSwap Info & Analytics')}`,
        description: 'View statistics for Seraswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('SeraSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('SeraSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('SeraSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('SeraSwap')}`,
      }
    default:
      return null
  }
}

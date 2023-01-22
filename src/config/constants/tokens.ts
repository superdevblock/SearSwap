import { ChainId, Token } from '@pancakeswap/sdk'
import { serializeToken } from 'state/user/hooks/helpers'
import { SerializedToken } from './types'

const { MAINNET, TESTNET } = ChainId

interface TokenList {
  [symbol: string]: Token
}

interface SerializedTokenList {
  [symbol: string]: SerializedToken
}

export const mainnetTokens = {
  wmatic: new Token(
    MAINNET,
    '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    18,
    'WMATIC',
    'Wrapped MATIC',
    'https://polygon.technology/',
  ),
  // bnb here points to the wmatic contract. Wherever the currency BNB is required, conditional checks for the symbol 'MATIC' can be used
  matic: new Token(MAINNET, '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', 18, 'MATIC', 'MATIC', 'https://polygon.technology/'),
  cake: new Token(
    MAINNET,
    '0x31640330cd2337e57c9591a2a183ac4e8a754e87',
    18,
    'SERA',
    'SeraSwap Token',
    'https://seraswap.com/',
  ),
  sushi: new Token(
    MAINNET,
    '0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a',
    18,
    'SUSHI',
    'SushiSwap Token',
    'https://sushi.com/',
  ),
  quick: new Token(
    MAINNET,
    '0x831753DD7087CaC61aB5644b308642cc1c33Dc13',
    18,
    'QUICK',
    'QUICK Token',
    'https://quickswap.exchange/',
  ),
  banana: new Token(
    MAINNET,
    '0x5d47bAbA0d66083C52009271faF3F50DCc01023C',
    18,
    'BANANA',
    'ApeSwapFinance Banana',
    'https://apeswap.finance/',
  ),
  wex: new Token(
    MAINNET,
    '0x4c4BF319237D98a30A929A96112EfFa8DA3510EB',
    18,
    'WEXpoly',
    'WEXpoly Token',
    'https://app.wault.finance/polygon/',
  ),
  eth: new Token(
    MAINNET,
    '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    18,
    'WETH',
    'Polygon Ethereum Token',
    'https://ethereum.org/en/',
  ),
  usdc: new Token(
    MAINNET,
    '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
    18,
    'USDC',
    'Polygon USD Coin',
    'https://www.centre.io/usdc',
  ),
  dai: new Token(
    MAINNET,
    '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    18,
    'DAI',
    'Dai Stablecoin',
    'https://www.makerdao.com/',
  ),
  link: new Token(
    MAINNET,
    '0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39',
    18,
    'LINK',
    'LINK Token',
    'https://chain.link/',
  ),
  usdt: new Token(
    MAINNET,
    '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    18,
    'USDT',
    'Tether USD',
    'https://tether.to/',
  ),
  wbtc: new Token(
    MAINNET,
    '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
    18,
    'WBTC',
    'WBTC Token',
    'https://wbtc.network/',
  ),
  polydoge: new Token(
    MAINNET,
    '0x8A953CfE442c5E8855cc6c61b1293FA648BAE472',
    18,
    'POLYDOGE',
    'PolyDoge Token',
    'https://www.polydoge.com/',
  ),
  dfyn: new Token(
    MAINNET,
    '0xc168e40227e4ebd8c1cae80f7a55a4f0e6d66c97',
    18,
    'DFYN',
    'DFYN Token',
    'https://dfyn.network/',
  ),
  fish: new Token(
    MAINNET,
    '0x3a3df212b7aa91aa0402b9035b098891d276572b',
    18,
    'FISH',
    'FISH Token',
    'https://polycat.finance/',
  ),
  aave: new Token(
    MAINNET,
    '0xd6df932a45c0f255f85145f286ea0b292b21c90b',
    18,
    'AAVE',
    'AAVE Token',
    'https://aave.com/',
  ),
  bone: new Token(
    MAINNET,
    '0x6bb45cEAC714c52342Ef73ec663479da35934bf7',
    18,
    'BONE',
    'BONE Token',
    'https://bone.polypup.finance/',
  ),
  crystl: new Token(
    MAINNET,
    '0x76bF0C28e604CC3fE9967c83b3C3F31c213cfE64',
    18,
    'CRYSTL',
    'CRYSTL Token',
    'https://polycrystal.finance/',
  ),
  give: new Token(
    MAINNET,
    '0x9Bbcda2606e616659b118399A2823E8a392f55DA',
    18,
    'GIVE',
    'GIVE Token',
    'https://bcharityecssen.netlify.app/',
  ),
  honor: new Token(
    MAINNET,
    '0xb82a20b4522680951f11c94c54b8800c1c237693',
    18,
    'HONOR',
    'HONOR Token',
    'https://polygon.farmhero.io/',
  ),
  pear: new Token(
    MAINNET,
    '0xc8bcb58caef1be972c0b638b1dd8b0748fdc8a44',
    18,
    'PEAR',
    'PEAR Token',
    'https://app.pearzap.com/',
  ),
  sandman: new Token(
    MAINNET,
    '0xf9b4dEFdDe04fe18F5ee6456607F8A2eC9fF6A75',
    18,
    'SANDMAN',
    'SANDMAN Token',
    'https://app.sandman.farm/',
  ),
  genx: new Token(
    MAINNET,
    '0x3eCdeB8fC5023839B92b0c293D049D61069e02b1',
    18,
    'GENX',
    'GENX Token',
    'https://evo-matic.com/',
  ),
  alpha: new Token(
    MAINNET,
    '0x0B048D6e01a6b9002C291060bF2179938fd8264c',
    18,
    'ALPHA',
    'ALPHA Token',
    'https://polyalpha.finance',
  ),
  sing: new Token(
    MAINNET,
    '0xCB898b0eFb084Df14dd8E018dA37B4d0f06aB26D',
    18,
    'SING',
    'SING Token',
    'https://singular.farm/',
  ),
  beta: new Token(
    MAINNET,
    '0xaC3090B7042FCA2cDBF233022e4a9823a032600c',
    18,
    'BETA',
    'BETA Token',
    'https://polybeta.finance/',
  ),
}

export const testnetTokens = {
  wmatic: new Token(
    TESTNET,
    '0x2295d66190b93e9dfc7ff99099440496514e74c1',
    18,
    'wmatic',
    'Wrapped MATIC',
    'https://polygon.technology/',
  ),
  cake: new Token(
    TESTNET,
    '0xa6807bbf6e7BD221A64148669F509cDB430DC73e',
    18,
    'SERA',
    'SeraSwap Token',
    'https://seraswap.com/',
  ),
  eth: new Token(
    TESTNET,
    '0xEdAeD19C5185623a8027421Ea1932aDa069c6C58',
    18,
    'WETH',
    'Polygon Ethereum Token',
    'https://ethereum.org/en/',
  ),
  usdc: new Token(
    TESTNET,
    '0xCE3Be04552C7Fa67F1dDAea00e9e5765804632B8',
    18,
    'USDC',
    'Polygon USD Coin',
    'https://www.centre.io/usdc',
  ),
  dai: new Token(
    TESTNET,
    '0xc05f4Aa4726a6A13aa07eA60169c28f2B4E1c3c2',
    18,
    'DAI',
    'Dai Stablecoin',
    'https://www.makerdao.com/',
  ),
  usdt: new Token(
    TESTNET,
    '0xdaBf989bFc87a5aa075648BAD1Ef5B840Ae5a80D',
    18,
    'USDT',
    'Tether USD',
    'https://tether.to/',
  ),
  wbtc: new Token(
    MAINNET,
    '0xB288d983c8101859eA5176e99302C11caFa8B9ba',
    18,
    'WBTC',
    'WBTC Token',
    'https://wbtc.network/',
  ),
}

const tokens = (): TokenList => {
  const chainId = process.env.REACT_APP_CHAIN_ID

  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (parseInt(chainId, 10) === ChainId.TESTNET) {
    return Object.keys(mainnetTokens).reduce((accum, key) => {
      return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] }
    }, {})
  }

  return mainnetTokens
}

export const serializeTokens = (): SerializedTokenList => {
  const unserializedTokens = tokens()
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: serializeToken(unserializedTokens[key]) }
  }, {})

  return serializedTokens
}

export default tokens()

import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 1, 2) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'SERA',
    lpAddresses: {
      80001: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      137: '0x0b3006F5a3B3822Fd1713D30f4f3dB5e930F00c0',
    },
    referLpAddresses: {
      80001: '',
      137: '0x87225587fc194d19D0452964B5abE6DBA6d0b2eB',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wmatic,
    isTokenOnly: true,
  },
  {
    pid: 1,
    lpSymbol: 'SERA-MATIC LP',
    lpAddresses: {
      80001: '0x92a881935D5eF4B2df7f30C8AFA093BAbf42511a',
      137: '0x87225587fc194d19D0452964B5abE6DBA6d0b2eB',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wmatic,
  },
  {
    pid: 2,
    lpSymbol: 'WMATIC-USDC LP',
    lpAddresses: {
      80001: '',
      // 137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
      137: '0xcd353F79d9FADe311fC3119B841e1f456b54e858',
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.wmatic,
  },
]

export default farms

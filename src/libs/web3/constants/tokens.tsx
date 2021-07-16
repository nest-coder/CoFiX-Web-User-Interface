import {
  TokenCOFI,
  TokenDAI,
  TokenNEST,
  TokenPETH,
  TokenPUSD,
  TokenUSDT,
  TokenWETH,
  TokenUSDC,
} from 'src/components/Icon'
import { TokenProps } from '../api/Token'

export const USDT: TokenProps = {
  symbol: 'USDT',
  Icon: TokenUSDT,
  addresses: {
    1: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    3: '0xc82C867f9e25303C766e2ba83d512419223d4574',
    4: '0x0f4014fbA3D4fcb56d2653Bf3d51664dCcCF42f6',
  },
}

export const NEST: TokenProps = {
  symbol: 'NEST',
  Icon: TokenNEST,
  addresses: {
    1: '0x04abEdA201850aC0124161F037Efd70c74ddC74C',
    3: '0x2CFa7278ecf2DB7f6f97C07EefaC4aAD19b81d80',
    4: '0x4c6DC3Fa867c3c96B1C8F51CE7Fa975b886d882f',
  },
  formatPrecision: 2,
}

export const COFI: TokenProps = {
  symbol: 'COFI',
  Icon: TokenCOFI,
  addresses: {
    1: '0x1a23a6bfbadb59fa563008c0fb7cf96dfcf34ea1',
    3: '0x7E03E60925D27D6DeF4F05E725f5fD2f03BDbfD5',
    4: '0x4c4F8Bfa7835089D176C1ec24e845f784F3045c1',
  },
}

export const PETH: TokenProps = {
  symbol: 'PETH',
  Icon: TokenPETH,
  addresses: {
    4: '0x885629c3784C4e7cEaa82b83F3aeD2F991d197C6',
  },
}

export const WETH: TokenProps = {
  symbol: 'WETH',
  Icon: TokenWETH,
  addresses: {
    4: '0x628b25c7658287c2829EE7a3E5D34b0158d2fdB5',
  },
}

export const PUSD: TokenProps = {
  symbol: 'PUSD',
  Icon: TokenPUSD,
  addresses: {
    4: '0x0f03cd5CeBe21D1E7307588b9844D10ad0F4A394',
  },
}

export const DAI: TokenProps = {
  symbol: 'DAI',
  Icon: TokenDAI,
  addresses: {
    4: '0xe86dD41fEb8594D083f9dC364e530c0B8D208feA',
  },
}

export const USDC: TokenProps = {
  symbol: 'USDC',
  Icon: TokenUSDC,
  addresses: {
    4: '0xe86dD41fEb8594D083f9dC364e530c0B8D208feA',
  },
}

export const ERC20TokenWhitelist = [USDT, NEST, COFI, PETH, WETH, PUSD, USDC]

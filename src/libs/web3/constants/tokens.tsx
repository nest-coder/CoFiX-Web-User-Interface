import { TokenCOFI, TokenHBTC, TokenNEST, TokenPETH, TokenPUSD, TokenUSDC, TokenUSDT } from 'src/components/Icon'

import { TokenProps } from '../api/Token'

export const USDT: TokenProps = {
  symbol: 'USDT',
  Icon: TokenUSDT,
  addresses: {
    1: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    3: '0xc82C867f9e25303C766e2ba83d512419223d4574',
    4: '0x2d750210c0b5343a0b79beff8F054C9add7d2411',
  },
}

export const HBTC: TokenProps = {
  symbol: 'HBTC',
  Icon: TokenHBTC,
  addresses: {
    4: '0xaE73d363Cb4aC97734E07e48B01D0a1FF5D1190B',
  },
}

export const PETH: TokenProps = {
  symbol: 'PETH',
  Icon: TokenPETH,
  addresses: {
    4: '0x4D4B378eFbeb7eE15Aa498F3383C9949391557e0',
  },
}

export const PUSD: TokenProps = {
  symbol: 'PUSD',
  Icon: TokenPUSD,
  addresses: {
    4: '0x740ed84037E5d2F650b585759623EBC4de849021',
  },
}

export const USDC: TokenProps = {
  symbol: 'USDC',
  Icon: TokenUSDC,
  addresses: {
    4: '0xB64825a6bA80d65886b5123f5170ddffc935D9DE',
  },
}

export const NEST: TokenProps = {
  symbol: 'NEST',
  Icon: TokenNEST,
  addresses: {
    1: '0x04abEdA201850aC0124161F037Efd70c74ddC74C',
    3: '0x2CFa7278ecf2DB7f6f97C07EefaC4aAD19b81d80',
    4: '0xE313F3f49B647fBEDDC5F2389Edb5c93CBf4EE25',
  },
  formatPrecision: 2,
}

export const COFI: TokenProps = {
  symbol: 'COFI',
  Icon: TokenCOFI,
  addresses: {
    1: '0x1a23a6bfbadb59fa563008c0fb7cf96dfcf34ea1',
    3: '0x7E03E60925D27D6DeF4F05E725f5fD2f03BDbfD5',
    4: '0x61EA050b28Ccca539F0faf79Fd26F6Df31b9f15B',
  },
}

export const ERC20TokenWhitelist = [USDT, HBTC, PETH, PUSD, USDC, NEST, COFI]

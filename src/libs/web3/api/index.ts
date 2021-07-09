import { Web3Provider } from '@ethersproject/providers'
import CoFiXController, { CoFiXControllerProps } from './CoFiXController'
import CoFiXDAO, { CoFiXDAOProps } from './CoFixDAO'
import CoFiXPair, { CoFiXPairProps } from './CoFiXPair'
import CoFiXRouter, { CoFiXRouterProps } from './CoFiXRouter'
import CoFiXVaultForStaking, { CoFiXVaultForStakingProps } from './CoFiXVaultForStaking'
import ERC20Token, { ERC20TokenProps } from './ERC20Token'
import NestPriceFacade, { NestPriceFacadeProps } from './NestPriceFacade'
import ETHToken from './ETHToken'
import Token from './Token'
import CoFiXAnchorPool, { CoFiXAnchorPoolProps } from './CoFiXAnchorPool'
import { toBigNumber } from '../util'

type APIProps = {
  provider?: Web3Provider
  chainId?: number
  account?: string

  ERC20Tokens: Array<ERC20TokenProps>
  CoFiXPairs: Array<CoFiXPairProps>
  CoFixAnchorPools: Array<CoFiXAnchorPoolProps>

  NestPriceFacade: NestPriceFacadeProps
  CoFiXController: CoFiXControllerProps
  CoFiXRouter: CoFiXRouterProps
  CoFiXVaultForStaking: CoFiXVaultForStakingProps
  CoFiXDAO: CoFiXDAOProps
}

class API {
  inited: boolean
  provider?: Web3Provider
  chainId?: number
  account?: string

  Tokens: {
    ETH: Token
    USDT: Token

    [symbol: string]: Token
  }

  CoFiXPairs: {
    [symbol: string]: {
      [symbol: string]: CoFiXPair
    }
  }

  CoFixAnchorPools: {
    [symbol: string]: CoFiXAnchorPool
  }

  Contracts: {
    NestPriceFacade: NestPriceFacade
    CoFiXController: CoFiXController
    CoFiXRouter: CoFiXRouter
    CoFiXVaultForStaking: CoFiXVaultForStaking
    CoFiXDAO: CoFiXDAO
  }

  constructor(props: APIProps) {
    this.provider = props.provider
    this.chainId = props.chainId
    this.account = props.account
    this.inited = false

    this.Tokens = {
      ETH: new ETHToken(this),
      ...props.ERC20Tokens.reduce((tokens, token) => {
        tokens[token.symbol] = new ERC20Token(this, token)

        return tokens
      }, Object.create(null)),
    }

    this.CoFiXPairs = {
      ...props.CoFiXPairs.reduce((pairs, props) => {
        const pair = new CoFiXPair(this, props)
        const symbol = pair.pair.map((p) => p.symbol)

        if (!pairs[symbol[0]]) {
          pairs[symbol[0]] = {}
        }
        if (!pairs[symbol[1]]) {
          pairs[symbol[1]] = {}
        }

        pairs[symbol[0]][symbol[1]] = pair
        pairs[symbol[1]][symbol[0]] = pair

        return pairs
      }, Object.create(null)),
    }

    this.CoFixAnchorPools = {
      ...props.CoFixAnchorPools.reduce((pools, props) => {
        const pool = new CoFiXAnchorPool(this, props)

        props.tokens.forEach((t) => {
          pools[t] = pool
        })

        return pools
      }, Object.create(null)),
    }

    this.Contracts = {
      NestPriceFacade: new NestPriceFacade(this, props.NestPriceFacade),
      CoFiXController: new CoFiXController(this, props.CoFiXController),
      CoFiXRouter: new CoFiXRouter(this, props.CoFiXRouter),
      CoFiXVaultForStaking: new CoFiXVaultForStaking(this, props.CoFiXVaultForStaking),
      CoFiXDAO: new CoFiXDAO(this, props.CoFiXDAO),
    }
  }

  async init() {
    await Promise.all(Object.values(this.Tokens).map((t) => t.init()))
    await Promise.all(Object.values(this.Contracts).map((t) => t.init()))
    await Promise.all(Object.values(this.CoFixAnchorPools).map((t) => t.init()))

    this.inited = true
  }

  async getGasFee() {
    let value = toBigNumber(0)
    if (this.provider) {
      const gasFee = await this.provider.getGasPrice()
      value = toBigNumber(gasFee)
    }

    return {
      value,
      amount: this.Tokens.ETH.amount(value),
      formatAmount: this.Tokens.ETH.format(this.Tokens.ETH.amount(value)),
    }
  }

  getTokenByAddress(address: string) {
    const token = Object.values(this.Tokens).find((t) => t.address === address)
    return token
  }
}

export default API

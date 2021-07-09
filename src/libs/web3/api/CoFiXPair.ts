import { CoFiXPair__factory, CoFiXPair as TypeCoFiXPair } from 'src/abis/types/cofix'
import API from '.'
import ERC20Token, { ERC20TokenProps } from './ERC20Token'
import Token from './Token'
import BigNumber from 'bignumber.js'
import { TIME_TO_NEXT_BLOCK } from 'src/constants/parameter'
import { toBigNumber } from '../util'
import { BLOCK_DAILY } from '../constants/constant'

export type PoolInfo = {
  totalFunds: BigNumber
  amounts: Array<BigNumber>
  formatAmounts: Array<string>
  nav: BigNumber
  miningSpeed: number
  apy: string

  emptyLiquidity: boolean
  myPoolRatio: string
  myPoolAmounts: Array<string>
  xtokenTotalSupply: {
    value: BigNumber
    amount: BigNumber
    formatAmount: string
  }
  xtokenBalance: {
    value: BigNumber
    amount: BigNumber
    formatAmount: string
  }
}

export type StakeInfo = {
  xTokenInPool: {
    value: BigNumber
    amount: BigNumber
    formatAmount: string
  }
  dailyMined: BigNumber
  stakedXToken: {
    value: BigNumber
    amount: BigNumber
    formatAmount: string
  }
  stakedRatio: string
}

export type CoFiXPairProps = ERC20TokenProps & {
  pair: [string, string]

  cofiAmountPerBlock: number
  cofiRewardPercentage: number
}

class CoFiXPair extends ERC20Token {
  contract?: TypeCoFiXPair

  pair: [Token, Token]
  cofiAmountPerBlock: number
  cofiRewardPercentage: number

  poolInfo?: PoolInfo
  stakeInfo?: StakeInfo

  constructor(api: API, props: CoFiXPairProps) {
    super(api, {
      isXToken: true,
      ...props,
    })

    if (this.address && this.api.provider) {
      this.contract = CoFiXPair__factory.connect(this.address, this.api.provider?.getSigner() || this.api.provider)
    }

    this.pair = [api.Tokens[props.pair[0]], api.Tokens[props.pair[1]]]
    this.cofiAmountPerBlock = props.cofiAmountPerBlock
    this.cofiRewardPercentage = props.cofiRewardPercentage
    this.api.Tokens[this.symbol] = this
  }

  async getPoolInfo(): Promise<PoolInfo | undefined> {
    if (!this.address || !this.contract) {
      return
    }

    const tokens = [this.api.Tokens[this.pair[0].symbol], this.api.Tokens[this.pair[1].symbol]]

    const [balances, ethAmounts, usdtAmounts, cofiUSDTAmount, pairBalance, pairTotalSupply] = await Promise.all([
      Promise.all([tokens[0].balanceOf(this.address), tokens[1].balanceOf(this.address)]),
      Promise.all([tokens[0].getValuePerETH(), tokens[1].getValuePerETH()]),
      Promise.all([tokens[0].getUSDTAmount(), tokens[1].getUSDTAmount()]),
      this.api.Tokens.COFI.getUSDTAmount(),
      this.balanceOf(this.api.account || ''),
      this.totalSupply(),
    ])

    const amounts = [tokens[0].amount(balances[0] || 0), tokens[1].amount(balances[1] || 0)]
    const formatAmounts = [
      tokens[0].format(tokens[0].amount(balances[0] || 0)),
      tokens[1].format(tokens[1].amount(balances[1] || 0)),
    ]

    if (!ethAmounts[0] || !ethAmounts[1] || !usdtAmounts[0] || !usdtAmounts[1] || !cofiUSDTAmount) {
      return
    }

    const totalFunds = amounts[0].multipliedBy(usdtAmounts[0]).plus(amounts[1]).multipliedBy(usdtAmounts[1])

    let nav = new BigNumber(1)
    if (!totalFunds.isZero()) {
      const navPerShare = await this.contract.calcNAVPerShare(
        balances[0].toFixed(0),
        balances[1].toFixed(0),
        ethAmounts[0].toFixed(0),
        ethAmounts[1].toFixed(0)
      )

      nav = new BigNumber(navPerShare.toString()).div(new BigNumber(10).pow(18))
    }

    let apy = '--'
    if (!totalFunds.isZero()) {
      apy =
        toBigNumber(this.cofiAmountPerBlock)
          .multipliedBy(this.cofiRewardPercentage)
          .multipliedBy(cofiUSDTAmount)
          .multipliedBy(60 * 60 * 24)
          .div(TIME_TO_NEXT_BLOCK)
          .div(totalFunds)
          .multipliedBy(365)
          .multipliedBy(100)
          .toFixed(2) + '%'
    }

    let myPoolRatio = new BigNumber(0)
    let myPoolAmounts = ['0.0', '0.0']
    if (!pairTotalSupply.isZero()) {
      myPoolRatio = pairBalance.div(pairTotalSupply)

      myPoolAmounts = [
        tokens[0].format(amounts[0].multipliedBy(myPoolRatio)),
        tokens[1].format(amounts[1].multipliedBy(myPoolRatio)),
      ]
    }

    this.poolInfo = {
      totalFunds,
      amounts,
      formatAmounts,
      nav,
      miningSpeed: this.cofiAmountPerBlock,
      apy,

      emptyLiquidity: myPoolRatio.isZero(),
      myPoolRatio: `${myPoolRatio.multipliedBy(100).toFixed(2)} %`,
      myPoolAmounts,
      xtokenBalance: {
        value: pairBalance,
        amount: pairBalance.div(new BigNumber(10).pow(18)),
        formatAmount: pairBalance.div(new BigNumber(10).pow(18)).toString(),
      },
      xtokenTotalSupply: {
        value: pairTotalSupply,
        amount: pairTotalSupply.div(new BigNumber(10).pow(18)),
        formatAmount: pairTotalSupply.div(new BigNumber(10).pow(18)).toString(),
      },
    }

    return this.poolInfo
  }

  async getPoolRatio() {
    if (!this.contract) {
      return
    }

    const value = await this.contract.getInitialAssetRatio()

    const token0 = this.api.Tokens[this.pair[0].symbol]
    const token1 = this.api.Tokens[this.pair[1].symbol]

    return token1.amount(token1.parse(value.initToken1Amount)).div(token0.amount(token1.parse(value.initToken0Amount)))
  }

  async getStakeInfo() {
    const info: Partial<StakeInfo> = {}
    if (!this.address || !this.api.account) {
      return
    }

    const [xTokenInPool, stakedXToken] = await Promise.all([
      this.balanceOf(this.api.Contracts.CoFiXVaultForStaking.address || ''),
      this.api.Contracts.CoFiXVaultForStaking.balanceOf(this.address, this.api.account),
    ])
    info.dailyMined = toBigNumber(this.cofiAmountPerBlock).multipliedBy(BLOCK_DAILY)
    info.stakedRatio = '--'
    if (!xTokenInPool.isZero()) {
      info.stakedRatio = `${stakedXToken.div(xTokenInPool).multipliedBy(100).toFixed(2)} %`
    }

    info.xTokenInPool = {
      value: xTokenInPool,
      amount: xTokenInPool.shiftedBy(-18),
      formatAmount: toBigNumber(xTokenInPool.shiftedBy(-18).toFixed(4)).toFormat(4),
    }
    info.stakedXToken = {
      value: stakedXToken,
      amount: stakedXToken.shiftedBy(-18),
      formatAmount: toBigNumber(stakedXToken.shiftedBy(-18).toFixed(4)).toFormat(4),
    }

    return info as StakeInfo
  }

  async earenedCOFI() {
    const earenedCOFI = await this.api.Contracts.CoFiXVaultForStaking.earned(this.address || '', this.api.account || '')
    return {
      value: earenedCOFI,
      amount: this.api.Tokens.COFI.amount(earenedCOFI),
      formatAmount: this.api.Tokens.COFI.format(this.api.Tokens.COFI.amount(earenedCOFI)),
    }
  }
}

export default CoFiXPair
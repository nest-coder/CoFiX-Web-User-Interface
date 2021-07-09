import { CoFiXDAO__factory, CoFiXDAO as TypeCoFiXDAO } from 'src/abis/types/cofix'
import API from '.'
import Contract, { ContractProps } from './Contract'
import { toBigNumber } from '../util'
import BigNumber from 'bignumber.js'
import { ADDRESS_ZERO } from '../constants/constant'

export type DAOInfo = {
  ethAmount: BigNumber
  usdtAmount: BigNumber
  cofiAmount: BigNumber
  cofiCirculationAmount: BigNumber
  cofiETHAmount?: BigNumber
  quota: BigNumber
}

export type CoFiXDAOProps = ContractProps

class CoFiXDAO extends Contract {
  contract?: TypeCoFiXDAO

  constructor(api: API, props: CoFiXDAOProps) {
    super(api, props)

    if (this.address && this.api.provider) {
      this.contract = CoFiXDAO__factory.connect(this.address, this.api.provider?.getSigner() || this.api.provider)
    }
  }

  async quotaOf() {
    if (!this.contract) {
      return new BigNumber(0)
    }

    const value = await this.contract.quotaOf()
    return toBigNumber(value)
  }

  async getDAOInfo() {
    if (!this.address || !this.contract) {
      return
    }

    const [ethBalance, usdtBalance, cofiBalance, cofiTotalSupply, cofiZeroBalance, cofiETHAmount, quota] =
      await Promise.all([
        this.api.Tokens.ETH.balanceOf(this.address),
        this.api.Tokens.USDT.balanceOf(this.address),
        this.api.Tokens.COFI.balanceOf(this.address),
        this.api.Tokens.COFI.totalSupply(),
        this.api.Tokens.COFI.balanceOf(ADDRESS_ZERO),
        this.api.Tokens.COFI.getETHAmount(),
        this.quotaOf(),
      ])

    const cofiCirculation = toBigNumber(cofiTotalSupply).minus(cofiBalance).minus(cofiZeroBalance)

    return {
      ethAmount: this.api.Tokens.ETH.amount(ethBalance),
      usdtAmount: this.api.Tokens.USDT.amount(usdtBalance),
      cofiAmount: this.api.Tokens.COFI.amount(cofiBalance),
      cofiCirculationAmount: this.api.Tokens.COFI.amount(cofiCirculation),
      cofiETHAmount: cofiETHAmount,
      quota: this.api.Tokens.COFI.amount(quota),
    }
  }
}

export default CoFiXDAO

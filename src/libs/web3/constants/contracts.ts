import { CoFiXControllerProps } from '../api/CoFiXController'
import { CoFiXDAOProps } from '../api/CoFixDAO'
import { CoFiXRouterProps } from '../api/CoFiXRouter'
import { CoFiXVaultForStakingProps } from '../api/CoFiXVaultForStaking'
import { NestPriceFacadeProps } from '../api/NestPriceFacade'

export const NestPriceFacade: NestPriceFacadeProps = {
  addresses: {
    1: '0xB5D2890c061c321A5B6A4a4254bb1522425BAF0A',
    3: '0x406C82f4F116F4FAD75bb47A142C9B5Fb213133C',
    4: '0x97F09D58a87B9a6f0cA1E69aCef77da3EFF8da0A',
  },
}

export const CoFiXController: CoFiXControllerProps = {
  addresses: {
    1: '0xf471bFd6c0A1Ab79cAD54B9608652B85638ceD97',
    3: '0x4C73A1f379bD5bC28DB20f4d2D3df344497000BF',
    4: '0x45456aE6aCD697F9661a962716e105393d4CF8c4',
  },
}

export const CoFiXRouter: CoFiXRouterProps = {
  addresses: {
    1: '0x72A63055b9AA997A4311D0D068170e38F5455b82',
    3: '0x59291fa0828290252d743F3A424B35B7aabf6aFF',
    4: '0x2651171EeB0Ec9357c27A8CdB8B7dF4500534F34',
  },
}

export const CoFiXVaultForStaking: CoFiXVaultForStakingProps = {
  addresses: {
    4: '0x6075560428330b0DeE19F6D5606d564E0B768cd6',
  },
}

export const CoFiXDAO: CoFiXDAOProps = {
  addresses: {
    4: '0xba7ba7e89ad593727e3eF694e5c9Db1C9f95B58d',
  },
}

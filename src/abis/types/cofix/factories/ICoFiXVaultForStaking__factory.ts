/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import { Provider } from '@ethersproject/providers'
import type { ICoFiXVaultForStaking, ICoFiXVaultForStakingInterface } from '../ICoFiXVaultForStaking'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'pair',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'xtokens',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'weights',
        type: 'uint256[]',
      },
    ],
    name: 'batchSetPoolWeight',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'pair',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
    ],
    name: 'earned',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getConfig',
    outputs: [
      {
        components: [
          {
            internalType: 'uint96',
            name: 'cofiRate',
            type: 'uint96',
          },
        ],
        internalType: 'struct ICoFiXVaultForStaking.Config',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'pair',
        type: 'address',
      },
    ],
    name: 'getReward',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'pair',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'cofiWeight',
        type: 'uint256',
      },
    ],
    name: 'initStakingChannel',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'pair',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'routerStake',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint96',
            name: 'cofiRate',
            type: 'uint96',
          },
        ],
        internalType: 'struct ICoFiXVaultForStaking.Config',
        name: 'config',
        type: 'tuple',
      },
    ],
    name: 'setConfig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'pair',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'stake',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'pair',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

export class ICoFiXVaultForStaking__factory {
  static readonly abi = _abi
  static createInterface(): ICoFiXVaultForStakingInterface {
    return new utils.Interface(_abi) as ICoFiXVaultForStakingInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ICoFiXVaultForStaking {
    return new Contract(address, _abi, signerOrProvider) as ICoFiXVaultForStaking
  }
}

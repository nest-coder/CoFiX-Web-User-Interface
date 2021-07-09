/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  CoFiXController03,
  CoFiXController03Interface,
} from "../CoFiXController03";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_oracle",
        type: "address",
      },
      {
        internalType: "address",
        name: "_nest",
        type: "address",
      },
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_kTable",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int128",
        name: "_gamma",
        type: "int128",
      },
    ],
    name: "NewGamma",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_new",
        type: "address",
      },
    ],
    name: "NewGovernance",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int128",
        name: "K",
        type: "int128",
      },
      {
        indexed: false,
        internalType: "int128",
        name: "sigma",
        type: "int128",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "T",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ethAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "erc20Amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockNum",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tIdx",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sigmaIdx",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "int128",
        name: "K0",
        type: "int128",
      },
    ],
    name: "NewK",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "k",
        type: "uint32",
      },
    ],
    name: "NewK",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int128",
        name: "maxK0",
        type: "int128",
      },
    ],
    name: "NewKLimit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_interval",
        type: "uint256",
      },
    ],
    name: "NewKRefreshInterval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_kTable",
        type: "address",
      },
    ],
    name: "NewKTable",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_priceOracle",
        type: "address",
      },
    ],
    name: "NewOracle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "theta",
        type: "uint32",
      },
    ],
    name: "NewTheta",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_timeSpan",
        type: "uint256",
      },
    ],
    name: "NewTimespan",
    type: "event",
  },
  {
    inputs: [],
    name: "AONE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DESTRUCTION_AMOUNT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GAMMA",
    outputs: [
      {
        internalType: "int128",
        name: "",
        type: "int128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "K_BASE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_K0",
    outputs: [
      {
        internalType: "int128",
        name: "",
        type: "int128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NAVPS_BASE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "callerAllowed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governance",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "kRefreshInterval",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "kTable",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nestToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oracle",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timespan",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_new",
        type: "address",
      },
    ],
    name: "setGovernance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_kTable",
        type: "address",
      },
    ],
    name: "setKTable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_timeSpan",
        type: "uint256",
      },
    ],
    name: "setTimespan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_interval",
        type: "uint256",
      },
    ],
    name: "setKRefreshInterval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "setOracleDestructionAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_T",
        type: "uint256",
      },
    ],
    name: "setTLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "k",
        type: "uint32",
      },
    ],
    name: "setK",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "theta",
        type: "uint32",
      },
    ],
    name: "setTheta",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "addCaller",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "op",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "queryOracle",
    outputs: [
      {
        internalType: "uint256",
        name: "_k",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_ethAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_erc20Amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_blockNum",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_theta",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "ethAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "erc20Amount",
        type: "uint256",
      },
    ],
    name: "calcImpactCostFor_BURN",
    outputs: [
      {
        internalType: "uint256",
        name: "impactCost",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "ethAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "erc20Amount",
        type: "uint256",
      },
    ],
    name: "calcImpactCostFor_SWAP_WITH_EXACT",
    outputs: [
      {
        internalType: "uint256",
        name: "impactCost",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "ethAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "erc20Amount",
        type: "uint256",
      },
    ],
    name: "calcImpactCostFor_SWAP_FOR_EXACT",
    outputs: [
      {
        internalType: "uint256",
        name: "impactCost",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "vol",
        type: "uint256",
      },
    ],
    name: "impactCostForBuyInETH",
    outputs: [
      {
        internalType: "uint256",
        name: "impactCost",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "vol",
        type: "uint256",
      },
    ],
    name: "impactCostForSellOutETH",
    outputs: [
      {
        internalType: "uint256",
        name: "impactCost",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getKInfo",
    outputs: [
      {
        internalType: "uint32",
        name: "k",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "updatedAt",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "theta",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int128",
        name: "vola",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "bn",
        type: "uint256",
      },
    ],
    name: "calcK",
    outputs: [
      {
        internalType: "uint32",
        name: "k",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class CoFiXController03__factory {
  static readonly abi = _abi;
  static createInterface(): CoFiXController03Interface {
    return new utils.Interface(_abi) as CoFiXController03Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CoFiXController03 {
    return new Contract(address, _abi, signerOrProvider) as CoFiXController03;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ICoFiXController,
  ICoFiXControllerInterface,
} from "../ICoFiXController";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "sigmaSQ",
        type: "uint256",
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
        internalType: "uint256",
        name: "k",
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
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "payback",
        type: "address",
      },
    ],
    name: "latestPriceInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "priceEthAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "priceTokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "avgPriceEthAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "avgPriceTokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "sigmaSQ",
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
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "payback",
        type: "address",
      },
    ],
    name: "queryOracle",
    outputs: [
      {
        internalType: "uint256",
        name: "k",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ethAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
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
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "payback",
        type: "address",
      },
    ],
    name: "queryPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "ethAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
];

export class ICoFiXController__factory {
  static readonly abi = _abi;
  static createInterface(): ICoFiXControllerInterface {
    return new utils.Interface(_abi) as ICoFiXControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICoFiXController {
    return new Contract(address, _abi, signerOrProvider) as ICoFiXController;
  }
}
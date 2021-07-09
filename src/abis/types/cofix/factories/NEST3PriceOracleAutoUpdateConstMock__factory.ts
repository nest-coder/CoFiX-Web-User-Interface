/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  NEST3PriceOracleAutoUpdateConstMock,
  NEST3PriceOracleAutoUpdateConstMockInterface,
} from "../NEST3PriceOracleAutoUpdateConstMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "priceInfoMap",
    outputs: [
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
      {
        internalType: "uint256",
        name: "lastUpdateBlock",
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
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
    ],
    name: "updateAndCheckPriceList",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
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
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
    ],
    name: "checkPriceList",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
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
    name: "feedPrice",
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
    ],
    name: "checkPriceNow",
    outputs: [
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
      {
        internalType: "uint256",
        name: "blockNum",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class NEST3PriceOracleAutoUpdateConstMock__factory {
  static readonly abi = _abi;
  static createInterface(): NEST3PriceOracleAutoUpdateConstMockInterface {
    return new utils.Interface(
      _abi
    ) as NEST3PriceOracleAutoUpdateConstMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NEST3PriceOracleAutoUpdateConstMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as NEST3PriceOracleAutoUpdateConstMock;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IVotePropose, IVoteProposeInterface } from "../IVotePropose";

const _abi = [
  {
    inputs: [],
    name: "run",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IVotePropose__factory {
  static readonly abi = _abi;
  static createInterface(): IVoteProposeInterface {
    return new utils.Interface(_abi) as IVoteProposeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IVotePropose {
    return new Contract(address, _abi, signerOrProvider) as IVotePropose;
  }
}

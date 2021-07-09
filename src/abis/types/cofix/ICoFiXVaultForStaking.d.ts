/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ICoFiXVaultForStakingInterface extends ethers.utils.Interface {
  functions: {
    "balanceOf(address,address)": FunctionFragment;
    "batchSetPoolWeight(address[],uint256[])": FunctionFragment;
    "earned(address,address)": FunctionFragment;
    "getConfig()": FunctionFragment;
    "getReward(address)": FunctionFragment;
    "initStakingChannel(address,uint256)": FunctionFragment;
    "routerStake(address,address,uint256)": FunctionFragment;
    "setConfig(tuple)": FunctionFragment;
    "stake(address,uint256)": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "batchSetPoolWeight",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "earned",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "getConfig", values?: undefined): string;
  encodeFunctionData(functionFragment: "getReward", values: [string]): string;
  encodeFunctionData(
    functionFragment: "initStakingChannel",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "routerStake",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setConfig",
    values: [{ cofiRate: BigNumberish }]
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "batchSetPoolWeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initStakingChannel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "routerStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {};
}

export class ICoFiXVaultForStaking extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ICoFiXVaultForStakingInterface;

  functions: {
    balanceOf(
      pair: string,
      addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    batchSetPoolWeight(
      xtokens: string[],
      weights: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    earned(
      pair: string,
      addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getConfig(
      overrides?: CallOverrides
    ): Promise<[[BigNumber] & { cofiRate: BigNumber }]>;

    getReward(
      pair: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initStakingChannel(
      pair: string,
      cofiWeight: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    routerStake(
      pair: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setConfig(
      config: { cofiRate: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stake(
      pair: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      pair: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  balanceOf(
    pair: string,
    addr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  batchSetPoolWeight(
    xtokens: string[],
    weights: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  earned(
    pair: string,
    addr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getConfig(
    overrides?: CallOverrides
  ): Promise<[BigNumber] & { cofiRate: BigNumber }>;

  getReward(
    pair: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initStakingChannel(
    pair: string,
    cofiWeight: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  routerStake(
    pair: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setConfig(
    config: { cofiRate: BigNumberish },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stake(
    pair: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    pair: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    balanceOf(
      pair: string,
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    batchSetPoolWeight(
      xtokens: string[],
      weights: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    earned(
      pair: string,
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getConfig(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { cofiRate: BigNumber }>;

    getReward(pair: string, overrides?: CallOverrides): Promise<void>;

    initStakingChannel(
      pair: string,
      cofiWeight: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    routerStake(
      pair: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setConfig(
      config: { cofiRate: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;

    stake(
      pair: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      pair: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    balanceOf(
      pair: string,
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    batchSetPoolWeight(
      xtokens: string[],
      weights: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    earned(
      pair: string,
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getConfig(overrides?: CallOverrides): Promise<BigNumber>;

    getReward(
      pair: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initStakingChannel(
      pair: string,
      cofiWeight: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    routerStake(
      pair: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setConfig(
      config: { cofiRate: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stake(
      pair: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      pair: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(
      pair: string,
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    batchSetPoolWeight(
      xtokens: string[],
      weights: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    earned(
      pair: string,
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getReward(
      pair: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initStakingChannel(
      pair: string,
      cofiWeight: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    routerStake(
      pair: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setConfig(
      config: { cofiRate: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stake(
      pair: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      pair: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

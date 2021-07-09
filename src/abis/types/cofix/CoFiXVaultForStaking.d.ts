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

interface CoFiXVaultForStakingInterface extends ethers.utils.Interface {
  functions: {
    "_governance()": FunctionFragment;
    "balanceOf(address,address)": FunctionFragment;
    "batchSetPoolWeight(address[],uint256[])": FunctionFragment;
    "calcReward(address)": FunctionFragment;
    "earned(address,address)": FunctionFragment;
    "getConfig()": FunctionFragment;
    "getReward(address)": FunctionFragment;
    "initStakingChannel(address,uint256)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "migrate(address,uint256)": FunctionFragment;
    "routerStake(address,address,uint256)": FunctionFragment;
    "setConfig(tuple)": FunctionFragment;
    "stake(address,uint256)": FunctionFragment;
    "update(address)": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "_governance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "batchSetPoolWeight",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "calcReward", values: [string]): string;
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
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "migrate",
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
  encodeFunctionData(functionFragment: "update", values: [string]): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "_governance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "batchSetPoolWeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "calcReward", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initStakingChannel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "migrate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "routerStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {};
}

export class CoFiXVaultForStaking extends BaseContract {
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

  interface: CoFiXVaultForStakingInterface;

  functions: {
    _governance(overrides?: CallOverrides): Promise<[string]>;

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

    calcReward(
      pair: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        newReward: BigNumber;
        rewardPerToken: BigNumber;
      }
    >;

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

    initialize(
      governance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    migrate(
      tokenAddress: string,
      value: BigNumberish,
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

    update(
      newGovernance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      pair: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  _governance(overrides?: CallOverrides): Promise<string>;

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

  calcReward(
    pair: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { newReward: BigNumber; rewardPerToken: BigNumber }
  >;

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

  initialize(
    governance: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  migrate(
    tokenAddress: string,
    value: BigNumberish,
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

  update(
    newGovernance: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    pair: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _governance(overrides?: CallOverrides): Promise<string>;

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

    calcReward(
      pair: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        newReward: BigNumber;
        rewardPerToken: BigNumber;
      }
    >;

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

    initialize(governance: string, overrides?: CallOverrides): Promise<void>;

    migrate(
      tokenAddress: string,
      value: BigNumberish,
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

    update(newGovernance: string, overrides?: CallOverrides): Promise<void>;

    withdraw(
      pair: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    _governance(overrides?: CallOverrides): Promise<BigNumber>;

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

    calcReward(pair: string, overrides?: CallOverrides): Promise<BigNumber>;

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

    initialize(
      governance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    migrate(
      tokenAddress: string,
      value: BigNumberish,
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

    update(
      newGovernance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      pair: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    calcReward(
      pair: string,
      overrides?: CallOverrides
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

    initialize(
      governance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    migrate(
      tokenAddress: string,
      value: BigNumberish,
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

    update(
      newGovernance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      pair: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface CoFiXController02Interface extends ethers.utils.Interface {
  functions: {
    "AONE()": FunctionFragment;
    "DESTRUCTION_AMOUNT()": FunctionFragment;
    "GAMMA()": FunctionFragment;
    "K_BASE()": FunctionFragment;
    "MAX_K0()": FunctionFragment;
    "NAVPS_BASE()": FunctionFragment;
    "callerAllowed(address)": FunctionFragment;
    "factory()": FunctionFragment;
    "governance()": FunctionFragment;
    "kRefreshInterval()": FunctionFragment;
    "kTable()": FunctionFragment;
    "nestToken()": FunctionFragment;
    "timespan()": FunctionFragment;
    "voteFactory()": FunctionFragment;
    "setGovernance(address)": FunctionFragment;
    "setKTable(address)": FunctionFragment;
    "setTimespan(uint256)": FunctionFragment;
    "setKRefreshInterval(uint256)": FunctionFragment;
    "setOracleDestructionAmount(uint256)": FunctionFragment;
    "setTLimit(uint256)": FunctionFragment;
    "setK(address,uint32)": FunctionFragment;
    "setTheta(address,uint32)": FunctionFragment;
    "activate()": FunctionFragment;
    "addCaller(address)": FunctionFragment;
    "queryOracle(address,uint8,bytes)": FunctionFragment;
    "calcImpactCostFor_BURN(address,bytes,uint256,uint256)": FunctionFragment;
    "calcImpactCostFor_SWAP_WITH_EXACT(address,bytes,uint256,uint256)": FunctionFragment;
    "calcImpactCostFor_SWAP_FOR_EXACT(address,bytes,uint256,uint256)": FunctionFragment;
    "impactCostForBuyInETH(uint256)": FunctionFragment;
    "impactCostForSellOutETH(uint256)": FunctionFragment;
    "getKInfo(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "AONE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "DESTRUCTION_AMOUNT",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "GAMMA", values?: undefined): string;
  encodeFunctionData(functionFragment: "K_BASE", values?: undefined): string;
  encodeFunctionData(functionFragment: "MAX_K0", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "NAVPS_BASE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "callerAllowed",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "governance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "kRefreshInterval",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "kTable", values?: undefined): string;
  encodeFunctionData(functionFragment: "nestToken", values?: undefined): string;
  encodeFunctionData(functionFragment: "timespan", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "voteFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setGovernance",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setKTable", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setTimespan",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setKRefreshInterval",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setOracleDestructionAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTLimit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setK",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTheta",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "activate", values?: undefined): string;
  encodeFunctionData(functionFragment: "addCaller", values: [string]): string;
  encodeFunctionData(
    functionFragment: "queryOracle",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "calcImpactCostFor_BURN",
    values: [string, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calcImpactCostFor_SWAP_WITH_EXACT",
    values: [string, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calcImpactCostFor_SWAP_FOR_EXACT",
    values: [string, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "impactCostForBuyInETH",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "impactCostForSellOutETH",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getKInfo", values: [string]): string;

  decodeFunctionResult(functionFragment: "AONE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "DESTRUCTION_AMOUNT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "GAMMA", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "K_BASE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "MAX_K0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "NAVPS_BASE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "callerAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "kRefreshInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "kTable", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nestToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "timespan", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "voteFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setKTable", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTimespan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setKRefreshInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOracleDestructionAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setTLimit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setK", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setTheta", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "activate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addCaller", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "queryOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calcImpactCostFor_BURN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calcImpactCostFor_SWAP_WITH_EXACT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calcImpactCostFor_SWAP_FOR_EXACT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "impactCostForBuyInETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "impactCostForSellOutETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getKInfo", data: BytesLike): Result;

  events: {
    "NewGamma(int128)": EventFragment;
    "NewGovernance(address)": EventFragment;
    "NewK(address,int128,int128,uint256,uint256,uint256,uint256,uint256,uint256,int128)": EventFragment;
    "NewKLimit(int128)": EventFragment;
    "NewKRefreshInterval(uint256)": EventFragment;
    "NewKTable(address)": EventFragment;
    "NewOracle(address)": EventFragment;
    "NewTheta(address,uint32)": EventFragment;
    "NewTimespan(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewGamma"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewGovernance"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewK"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewKLimit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewKRefreshInterval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewKTable"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewOracle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewTheta"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewTimespan"): EventFragment;
}

export class CoFiXController02 extends BaseContract {
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

  interface: CoFiXController02Interface;

  functions: {
    AONE(overrides?: CallOverrides): Promise<[BigNumber]>;

    DESTRUCTION_AMOUNT(overrides?: CallOverrides): Promise<[BigNumber]>;

    GAMMA(overrides?: CallOverrides): Promise<[BigNumber]>;

    K_BASE(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_K0(overrides?: CallOverrides): Promise<[BigNumber]>;

    NAVPS_BASE(overrides?: CallOverrides): Promise<[BigNumber]>;

    callerAllowed(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    governance(overrides?: CallOverrides): Promise<[string]>;

    kRefreshInterval(overrides?: CallOverrides): Promise<[BigNumber]>;

    kTable(overrides?: CallOverrides): Promise<[string]>;

    nestToken(overrides?: CallOverrides): Promise<[string]>;

    timespan(overrides?: CallOverrides): Promise<[BigNumber]>;

    voteFactory(overrides?: CallOverrides): Promise<[string]>;

    setGovernance(
      _new: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setKTable(
      _kTable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTimespan(
      _timeSpan: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setKRefreshInterval(
      _interval: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOracleDestructionAmount(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTLimit(
      _T: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setK(
      token: string,
      k: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTheta(
      token: string,
      theta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    activate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addCaller(
      caller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    queryOracle(
      token: string,
      op: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    calcImpactCostFor_BURN(
      token: string,
      data: BytesLike,
      ethAmount: BigNumberish,
      erc20Amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { impactCost: BigNumber }>;

    calcImpactCostFor_SWAP_WITH_EXACT(
      token: string,
      data: BytesLike,
      ethAmount: BigNumberish,
      erc20Amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { impactCost: BigNumber }>;

    calcImpactCostFor_SWAP_FOR_EXACT(
      token: string,
      data: BytesLike,
      ethAmount: BigNumberish,
      erc20Amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { impactCost: BigNumber }>;

    impactCostForBuyInETH(
      vol: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { impactCost: BigNumber }>;

    impactCostForSellOutETH(
      vol: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { impactCost: BigNumber }>;

    getKInfo(
      token: string,
      overrides?: CallOverrides
    ): Promise<
      [number, number, number] & { k: number; updatedAt: number; theta: number }
    >;
  };

  AONE(overrides?: CallOverrides): Promise<BigNumber>;

  DESTRUCTION_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

  GAMMA(overrides?: CallOverrides): Promise<BigNumber>;

  K_BASE(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_K0(overrides?: CallOverrides): Promise<BigNumber>;

  NAVPS_BASE(overrides?: CallOverrides): Promise<BigNumber>;

  callerAllowed(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  factory(overrides?: CallOverrides): Promise<string>;

  governance(overrides?: CallOverrides): Promise<string>;

  kRefreshInterval(overrides?: CallOverrides): Promise<BigNumber>;

  kTable(overrides?: CallOverrides): Promise<string>;

  nestToken(overrides?: CallOverrides): Promise<string>;

  timespan(overrides?: CallOverrides): Promise<BigNumber>;

  voteFactory(overrides?: CallOverrides): Promise<string>;

  setGovernance(
    _new: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setKTable(
    _kTable: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTimespan(
    _timeSpan: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setKRefreshInterval(
    _interval: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOracleDestructionAmount(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTLimit(
    _T: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setK(
    token: string,
    k: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTheta(
    token: string,
    theta: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  activate(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addCaller(
    caller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  queryOracle(
    token: string,
    op: BigNumberish,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  calcImpactCostFor_BURN(
    token: string,
    data: BytesLike,
    ethAmount: BigNumberish,
    erc20Amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calcImpactCostFor_SWAP_WITH_EXACT(
    token: string,
    data: BytesLike,
    ethAmount: BigNumberish,
    erc20Amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calcImpactCostFor_SWAP_FOR_EXACT(
    token: string,
    data: BytesLike,
    ethAmount: BigNumberish,
    erc20Amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  impactCostForBuyInETH(
    vol: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  impactCostForSellOutETH(
    vol: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getKInfo(
    token: string,
    overrides?: CallOverrides
  ): Promise<
    [number, number, number] & { k: number; updatedAt: number; theta: number }
  >;

  callStatic: {
    AONE(overrides?: CallOverrides): Promise<BigNumber>;

    DESTRUCTION_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    GAMMA(overrides?: CallOverrides): Promise<BigNumber>;

    K_BASE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_K0(overrides?: CallOverrides): Promise<BigNumber>;

    NAVPS_BASE(overrides?: CallOverrides): Promise<BigNumber>;

    callerAllowed(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    factory(overrides?: CallOverrides): Promise<string>;

    governance(overrides?: CallOverrides): Promise<string>;

    kRefreshInterval(overrides?: CallOverrides): Promise<BigNumber>;

    kTable(overrides?: CallOverrides): Promise<string>;

    nestToken(overrides?: CallOverrides): Promise<string>;

    timespan(overrides?: CallOverrides): Promise<BigNumber>;

    voteFactory(overrides?: CallOverrides): Promise<string>;

    setGovernance(_new: string, overrides?: CallOverrides): Promise<void>;

    setKTable(_kTable: string, overrides?: CallOverrides): Promise<void>;

    setTimespan(
      _timeSpan: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setKRefreshInterval(
      _interval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setOracleDestructionAmount(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTLimit(_T: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setK(
      token: string,
      k: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTheta(
      token: string,
      theta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    activate(overrides?: CallOverrides): Promise<void>;

    addCaller(caller: string, overrides?: CallOverrides): Promise<void>;

    queryOracle(
      token: string,
      op: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        _k: BigNumber;
        _ethAmount: BigNumber;
        _erc20Amount: BigNumber;
        _blockNum: BigNumber;
        _theta: BigNumber;
      }
    >;

    calcImpactCostFor_BURN(
      token: string,
      data: BytesLike,
      ethAmount: BigNumberish,
      erc20Amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calcImpactCostFor_SWAP_WITH_EXACT(
      token: string,
      data: BytesLike,
      ethAmount: BigNumberish,
      erc20Amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calcImpactCostFor_SWAP_FOR_EXACT(
      token: string,
      data: BytesLike,
      ethAmount: BigNumberish,
      erc20Amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    impactCostForBuyInETH(
      vol: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    impactCostForSellOutETH(
      vol: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getKInfo(
      token: string,
      overrides?: CallOverrides
    ): Promise<
      [number, number, number] & { k: number; updatedAt: number; theta: number }
    >;
  };

  filters: {
    NewGamma(
      _gamma?: null
    ): TypedEventFilter<[BigNumber], { _gamma: BigNumber }>;

    NewGovernance(_new?: null): TypedEventFilter<[string], { _new: string }>;

    NewK(
      token?: null,
      K?: null,
      sigma?: null,
      T?: null,
      ethAmount?: null,
      erc20Amount?: null,
      blockNum?: null,
      tIdx?: null,
      sigmaIdx?: null,
      K0?: null
    ): TypedEventFilter<
      [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ],
      {
        token: string;
        K: BigNumber;
        sigma: BigNumber;
        T: BigNumber;
        ethAmount: BigNumber;
        erc20Amount: BigNumber;
        blockNum: BigNumber;
        tIdx: BigNumber;
        sigmaIdx: BigNumber;
        K0: BigNumber;
      }
    >;

    NewKLimit(
      maxK0?: null
    ): TypedEventFilter<[BigNumber], { maxK0: BigNumber }>;

    NewKRefreshInterval(
      _interval?: null
    ): TypedEventFilter<[BigNumber], { _interval: BigNumber }>;

    NewKTable(_kTable?: null): TypedEventFilter<[string], { _kTable: string }>;

    NewOracle(
      _priceOracle?: null
    ): TypedEventFilter<[string], { _priceOracle: string }>;

    NewTheta(
      token?: null,
      theta?: null
    ): TypedEventFilter<[string, number], { token: string; theta: number }>;

    NewTimespan(
      _timeSpan?: null
    ): TypedEventFilter<[BigNumber], { _timeSpan: BigNumber }>;
  };

  estimateGas: {
    AONE(overrides?: CallOverrides): Promise<BigNumber>;

    DESTRUCTION_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    GAMMA(overrides?: CallOverrides): Promise<BigNumber>;

    K_BASE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_K0(overrides?: CallOverrides): Promise<BigNumber>;

    NAVPS_BASE(overrides?: CallOverrides): Promise<BigNumber>;

    callerAllowed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<BigNumber>;

    kRefreshInterval(overrides?: CallOverrides): Promise<BigNumber>;

    kTable(overrides?: CallOverrides): Promise<BigNumber>;

    nestToken(overrides?: CallOverrides): Promise<BigNumber>;

    timespan(overrides?: CallOverrides): Promise<BigNumber>;

    voteFactory(overrides?: CallOverrides): Promise<BigNumber>;

    setGovernance(
      _new: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setKTable(
      _kTable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTimespan(
      _timeSpan: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setKRefreshInterval(
      _interval: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOracleDestructionAmount(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTLimit(
      _T: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setK(
      token: string,
      k: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTheta(
      token: string,
      theta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    activate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addCaller(
      caller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    queryOracle(
      token: string,
      op: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    calcImpactCostFor_BURN(
      token: string,
      data: BytesLike,
      ethAmount: BigNumberish,
      erc20Amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calcImpactCostFor_SWAP_WITH_EXACT(
      token: string,
      data: BytesLike,
      ethAmount: BigNumberish,
      erc20Amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calcImpactCostFor_SWAP_FOR_EXACT(
      token: string,
      data: BytesLike,
      ethAmount: BigNumberish,
      erc20Amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    impactCostForBuyInETH(
      vol: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    impactCostForSellOutETH(
      vol: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getKInfo(token: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    AONE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DESTRUCTION_AMOUNT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    GAMMA(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    K_BASE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_K0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    NAVPS_BASE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    callerAllowed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    kRefreshInterval(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    kTable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nestToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    timespan(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    voteFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setGovernance(
      _new: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setKTable(
      _kTable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTimespan(
      _timeSpan: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setKRefreshInterval(
      _interval: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOracleDestructionAmount(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTLimit(
      _T: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setK(
      token: string,
      k: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTheta(
      token: string,
      theta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    activate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addCaller(
      caller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    queryOracle(
      token: string,
      op: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    calcImpactCostFor_BURN(
      token: string,
      data: BytesLike,
      ethAmount: BigNumberish,
      erc20Amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calcImpactCostFor_SWAP_WITH_EXACT(
      token: string,
      data: BytesLike,
      ethAmount: BigNumberish,
      erc20Amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calcImpactCostFor_SWAP_FOR_EXACT(
      token: string,
      data: BytesLike,
      ethAmount: BigNumberish,
      erc20Amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    impactCostForBuyInETH(
      vol: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    impactCostForSellOutETH(
      vol: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getKInfo(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

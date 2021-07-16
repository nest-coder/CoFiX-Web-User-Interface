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
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import { TypedEventFilter, TypedEvent, TypedListener } from './commons'

interface CoFiXVaultForLPInterface extends ethers.utils.Interface {
  functions: {
    'RATE_BASE()': FunctionFragment
    'WEIGHT_BASE()': FunctionFragment
    'allPools(uint256)': FunctionFragment
    'cofiToken()': FunctionFragment
    'decayPeriod()': FunctionFragment
    'decayRate()': FunctionFragment
    'enabledCnt()': FunctionFragment
    'factory()': FunctionFragment
    'genesisBlock()': FunctionFragment
    'governance()': FunctionFragment
    'initCoFiRate()': FunctionFragment
    'pairToStakingPool(address)': FunctionFragment
    'poolInfo(address)': FunctionFragment
    'setGovernance(address)': FunctionFragment
    'setInitCoFiRate(uint256)': FunctionFragment
    'setDecayPeriod(uint256)': FunctionFragment
    'setDecayRate(uint256)': FunctionFragment
    'addPool(address)': FunctionFragment
    'enablePool(address)': FunctionFragment
    'disablePool(address)': FunctionFragment
    'setPoolWeight(address,uint256)': FunctionFragment
    'batchSetPoolWeight(address[],uint256[])': FunctionFragment
    'getPendingRewardOfLP(address)': FunctionFragment
    'distributeReward(address,uint256)': FunctionFragment
    'currentPeriod()': FunctionFragment
    'currentCoFiRate()': FunctionFragment
    'currentPoolRate(address)': FunctionFragment
    'currentPoolRateByPair(address)': FunctionFragment
    'stakingPoolForPair(address)': FunctionFragment
    'getPoolInfo(address)': FunctionFragment
    'getPoolInfoByPair(address)': FunctionFragment
    'getEnabledPoolCnt()': FunctionFragment
    'getCoFiStakingPool()': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'RATE_BASE', values?: undefined): string
  encodeFunctionData(functionFragment: 'WEIGHT_BASE', values?: undefined): string
  encodeFunctionData(functionFragment: 'allPools', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'cofiToken', values?: undefined): string
  encodeFunctionData(functionFragment: 'decayPeriod', values?: undefined): string
  encodeFunctionData(functionFragment: 'decayRate', values?: undefined): string
  encodeFunctionData(functionFragment: 'enabledCnt', values?: undefined): string
  encodeFunctionData(functionFragment: 'factory', values?: undefined): string
  encodeFunctionData(functionFragment: 'genesisBlock', values?: undefined): string
  encodeFunctionData(functionFragment: 'governance', values?: undefined): string
  encodeFunctionData(functionFragment: 'initCoFiRate', values?: undefined): string
  encodeFunctionData(functionFragment: 'pairToStakingPool', values: [string]): string
  encodeFunctionData(functionFragment: 'poolInfo', values: [string]): string
  encodeFunctionData(functionFragment: 'setGovernance', values: [string]): string
  encodeFunctionData(functionFragment: 'setInitCoFiRate', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'setDecayPeriod', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'setDecayRate', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'addPool', values: [string]): string
  encodeFunctionData(functionFragment: 'enablePool', values: [string]): string
  encodeFunctionData(functionFragment: 'disablePool', values: [string]): string
  encodeFunctionData(functionFragment: 'setPoolWeight', values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: 'batchSetPoolWeight', values: [string[], BigNumberish[]]): string
  encodeFunctionData(functionFragment: 'getPendingRewardOfLP', values: [string]): string
  encodeFunctionData(functionFragment: 'distributeReward', values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: 'currentPeriod', values?: undefined): string
  encodeFunctionData(functionFragment: 'currentCoFiRate', values?: undefined): string
  encodeFunctionData(functionFragment: 'currentPoolRate', values: [string]): string
  encodeFunctionData(functionFragment: 'currentPoolRateByPair', values: [string]): string
  encodeFunctionData(functionFragment: 'stakingPoolForPair', values: [string]): string
  encodeFunctionData(functionFragment: 'getPoolInfo', values: [string]): string
  encodeFunctionData(functionFragment: 'getPoolInfoByPair', values: [string]): string
  encodeFunctionData(functionFragment: 'getEnabledPoolCnt', values?: undefined): string
  encodeFunctionData(functionFragment: 'getCoFiStakingPool', values?: undefined): string

  decodeFunctionResult(functionFragment: 'RATE_BASE', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'WEIGHT_BASE', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'allPools', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'cofiToken', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'decayPeriod', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'decayRate', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'enabledCnt', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'factory', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'genesisBlock', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'governance', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'initCoFiRate', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'pairToStakingPool', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'poolInfo', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setGovernance', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setInitCoFiRate', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setDecayPeriod', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setDecayRate', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'addPool', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'enablePool', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'disablePool', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setPoolWeight', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'batchSetPoolWeight', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getPendingRewardOfLP', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'distributeReward', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'currentPeriod', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'currentCoFiRate', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'currentPoolRate', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'currentPoolRateByPair', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'stakingPoolForPair', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getPoolInfo', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getPoolInfoByPair', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getEnabledPoolCnt', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getCoFiStakingPool', data: BytesLike): Result

  events: {
    'NewPoolAdded(address,uint256)': EventFragment
    'PoolDisabled(address)': EventFragment
    'PoolEnabled(address)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'NewPoolAdded'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'PoolDisabled'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'PoolEnabled'): EventFragment
}

export class CoFiXVaultForLP extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: CoFiXVaultForLPInterface

  functions: {
    RATE_BASE(overrides?: CallOverrides): Promise<[BigNumber]>

    WEIGHT_BASE(overrides?: CallOverrides): Promise<[BigNumber]>

    allPools(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>

    cofiToken(overrides?: CallOverrides): Promise<[string]>

    decayPeriod(overrides?: CallOverrides): Promise<[BigNumber]>

    decayRate(overrides?: CallOverrides): Promise<[BigNumber]>

    enabledCnt(overrides?: CallOverrides): Promise<[BigNumber]>

    factory(overrides?: CallOverrides): Promise<[string]>

    genesisBlock(overrides?: CallOverrides): Promise<[BigNumber]>

    governance(overrides?: CallOverrides): Promise<[string]>

    initCoFiRate(overrides?: CallOverrides): Promise<[BigNumber]>

    pairToStakingPool(arg0: string, overrides?: CallOverrides): Promise<[string]>

    poolInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[number, BigNumber] & { state: number; weight: BigNumber }>

    setGovernance(
      _new: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setInitCoFiRate(
      _new: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setDecayPeriod(
      _new: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setDecayRate(
      _new: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    addPool(pool: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    enablePool(pool: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    disablePool(pool: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    setPoolWeight(
      pool: string,
      weight: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    batchSetPoolWeight(
      pools: string[],
      weights: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    getPendingRewardOfLP(pair: string, overrides?: CallOverrides): Promise<[BigNumber]>

    distributeReward(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    currentPeriod(overrides?: CallOverrides): Promise<[BigNumber]>

    currentCoFiRate(overrides?: CallOverrides): Promise<[BigNumber]>

    currentPoolRate(pool: string, overrides?: CallOverrides): Promise<[BigNumber] & { poolRate: BigNumber }>

    currentPoolRateByPair(pair: string, overrides?: CallOverrides): Promise<[BigNumber] & { poolRate: BigNumber }>

    stakingPoolForPair(pair: string, overrides?: CallOverrides): Promise<[string] & { pool: string }>

    getPoolInfo(
      pool: string,
      overrides?: CallOverrides
    ): Promise<[number, BigNumber] & { state: number; weight: BigNumber }>

    getPoolInfoByPair(
      pair: string,
      overrides?: CallOverrides
    ): Promise<[number, BigNumber] & { state: number; weight: BigNumber }>

    getEnabledPoolCnt(overrides?: CallOverrides): Promise<[BigNumber]>

    getCoFiStakingPool(overrides?: CallOverrides): Promise<[string] & { pool: string }>
  }

  RATE_BASE(overrides?: CallOverrides): Promise<BigNumber>

  WEIGHT_BASE(overrides?: CallOverrides): Promise<BigNumber>

  allPools(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

  cofiToken(overrides?: CallOverrides): Promise<string>

  decayPeriod(overrides?: CallOverrides): Promise<BigNumber>

  decayRate(overrides?: CallOverrides): Promise<BigNumber>

  enabledCnt(overrides?: CallOverrides): Promise<BigNumber>

  factory(overrides?: CallOverrides): Promise<string>

  genesisBlock(overrides?: CallOverrides): Promise<BigNumber>

  governance(overrides?: CallOverrides): Promise<string>

  initCoFiRate(overrides?: CallOverrides): Promise<BigNumber>

  pairToStakingPool(arg0: string, overrides?: CallOverrides): Promise<string>

  poolInfo(arg0: string, overrides?: CallOverrides): Promise<[number, BigNumber] & { state: number; weight: BigNumber }>

  setGovernance(_new: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  setInitCoFiRate(
    _new: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  setDecayPeriod(
    _new: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  setDecayRate(
    _new: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  addPool(pool: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  enablePool(pool: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  disablePool(pool: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  setPoolWeight(
    pool: string,
    weight: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  batchSetPoolWeight(
    pools: string[],
    weights: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  getPendingRewardOfLP(pair: string, overrides?: CallOverrides): Promise<BigNumber>

  distributeReward(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  currentPeriod(overrides?: CallOverrides): Promise<BigNumber>

  currentCoFiRate(overrides?: CallOverrides): Promise<BigNumber>

  currentPoolRate(pool: string, overrides?: CallOverrides): Promise<BigNumber>

  currentPoolRateByPair(pair: string, overrides?: CallOverrides): Promise<BigNumber>

  stakingPoolForPair(pair: string, overrides?: CallOverrides): Promise<string>

  getPoolInfo(
    pool: string,
    overrides?: CallOverrides
  ): Promise<[number, BigNumber] & { state: number; weight: BigNumber }>

  getPoolInfoByPair(
    pair: string,
    overrides?: CallOverrides
  ): Promise<[number, BigNumber] & { state: number; weight: BigNumber }>

  getEnabledPoolCnt(overrides?: CallOverrides): Promise<BigNumber>

  getCoFiStakingPool(overrides?: CallOverrides): Promise<string>

  callStatic: {
    RATE_BASE(overrides?: CallOverrides): Promise<BigNumber>

    WEIGHT_BASE(overrides?: CallOverrides): Promise<BigNumber>

    allPools(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

    cofiToken(overrides?: CallOverrides): Promise<string>

    decayPeriod(overrides?: CallOverrides): Promise<BigNumber>

    decayRate(overrides?: CallOverrides): Promise<BigNumber>

    enabledCnt(overrides?: CallOverrides): Promise<BigNumber>

    factory(overrides?: CallOverrides): Promise<string>

    genesisBlock(overrides?: CallOverrides): Promise<BigNumber>

    governance(overrides?: CallOverrides): Promise<string>

    initCoFiRate(overrides?: CallOverrides): Promise<BigNumber>

    pairToStakingPool(arg0: string, overrides?: CallOverrides): Promise<string>

    poolInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[number, BigNumber] & { state: number; weight: BigNumber }>

    setGovernance(_new: string, overrides?: CallOverrides): Promise<void>

    setInitCoFiRate(_new: BigNumberish, overrides?: CallOverrides): Promise<void>

    setDecayPeriod(_new: BigNumberish, overrides?: CallOverrides): Promise<void>

    setDecayRate(_new: BigNumberish, overrides?: CallOverrides): Promise<void>

    addPool(pool: string, overrides?: CallOverrides): Promise<void>

    enablePool(pool: string, overrides?: CallOverrides): Promise<void>

    disablePool(pool: string, overrides?: CallOverrides): Promise<void>

    setPoolWeight(pool: string, weight: BigNumberish, overrides?: CallOverrides): Promise<void>

    batchSetPoolWeight(pools: string[], weights: BigNumberish[], overrides?: CallOverrides): Promise<void>

    getPendingRewardOfLP(pair: string, overrides?: CallOverrides): Promise<BigNumber>

    distributeReward(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>

    currentPeriod(overrides?: CallOverrides): Promise<BigNumber>

    currentCoFiRate(overrides?: CallOverrides): Promise<BigNumber>

    currentPoolRate(pool: string, overrides?: CallOverrides): Promise<BigNumber>

    currentPoolRateByPair(pair: string, overrides?: CallOverrides): Promise<BigNumber>

    stakingPoolForPair(pair: string, overrides?: CallOverrides): Promise<string>

    getPoolInfo(
      pool: string,
      overrides?: CallOverrides
    ): Promise<[number, BigNumber] & { state: number; weight: BigNumber }>

    getPoolInfoByPair(
      pair: string,
      overrides?: CallOverrides
    ): Promise<[number, BigNumber] & { state: number; weight: BigNumber }>

    getEnabledPoolCnt(overrides?: CallOverrides): Promise<BigNumber>

    getCoFiStakingPool(overrides?: CallOverrides): Promise<string>
  }

  filters: {
    NewPoolAdded(pool?: null, index?: null): TypedEventFilter<[string, BigNumber], { pool: string; index: BigNumber }>

    PoolDisabled(pool?: null): TypedEventFilter<[string], { pool: string }>

    PoolEnabled(pool?: null): TypedEventFilter<[string], { pool: string }>
  }

  estimateGas: {
    RATE_BASE(overrides?: CallOverrides): Promise<BigNumber>

    WEIGHT_BASE(overrides?: CallOverrides): Promise<BigNumber>

    allPools(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    cofiToken(overrides?: CallOverrides): Promise<BigNumber>

    decayPeriod(overrides?: CallOverrides): Promise<BigNumber>

    decayRate(overrides?: CallOverrides): Promise<BigNumber>

    enabledCnt(overrides?: CallOverrides): Promise<BigNumber>

    factory(overrides?: CallOverrides): Promise<BigNumber>

    genesisBlock(overrides?: CallOverrides): Promise<BigNumber>

    governance(overrides?: CallOverrides): Promise<BigNumber>

    initCoFiRate(overrides?: CallOverrides): Promise<BigNumber>

    pairToStakingPool(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    poolInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    setGovernance(_new: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    setInitCoFiRate(_new: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    setDecayPeriod(_new: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    setDecayRate(_new: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    addPool(pool: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    enablePool(pool: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    disablePool(pool: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    setPoolWeight(
      pool: string,
      weight: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    batchSetPoolWeight(
      pools: string[],
      weights: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    getPendingRewardOfLP(pair: string, overrides?: CallOverrides): Promise<BigNumber>

    distributeReward(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    currentPeriod(overrides?: CallOverrides): Promise<BigNumber>

    currentCoFiRate(overrides?: CallOverrides): Promise<BigNumber>

    currentPoolRate(pool: string, overrides?: CallOverrides): Promise<BigNumber>

    currentPoolRateByPair(pair: string, overrides?: CallOverrides): Promise<BigNumber>

    stakingPoolForPair(pair: string, overrides?: CallOverrides): Promise<BigNumber>

    getPoolInfo(pool: string, overrides?: CallOverrides): Promise<BigNumber>

    getPoolInfoByPair(pair: string, overrides?: CallOverrides): Promise<BigNumber>

    getEnabledPoolCnt(overrides?: CallOverrides): Promise<BigNumber>

    getCoFiStakingPool(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    RATE_BASE(overrides?: CallOverrides): Promise<PopulatedTransaction>

    WEIGHT_BASE(overrides?: CallOverrides): Promise<PopulatedTransaction>

    allPools(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>

    cofiToken(overrides?: CallOverrides): Promise<PopulatedTransaction>

    decayPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>

    decayRate(overrides?: CallOverrides): Promise<PopulatedTransaction>

    enabledCnt(overrides?: CallOverrides): Promise<PopulatedTransaction>

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>

    genesisBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>

    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>

    initCoFiRate(overrides?: CallOverrides): Promise<PopulatedTransaction>

    pairToStakingPool(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    poolInfo(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    setGovernance(
      _new: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setInitCoFiRate(
      _new: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setDecayPeriod(
      _new: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setDecayRate(
      _new: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    addPool(pool: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>

    enablePool(pool: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>

    disablePool(
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setPoolWeight(
      pool: string,
      weight: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    batchSetPoolWeight(
      pools: string[],
      weights: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    getPendingRewardOfLP(pair: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    distributeReward(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    currentPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>

    currentCoFiRate(overrides?: CallOverrides): Promise<PopulatedTransaction>

    currentPoolRate(pool: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    currentPoolRateByPair(pair: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    stakingPoolForPair(pair: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getPoolInfo(pool: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getPoolInfoByPair(pair: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getEnabledPoolCnt(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getCoFiStakingPool(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}

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

interface CoFiXFactoryInterface extends ethers.utils.Interface {
  functions: {
    'WETH()': FunctionFragment
    'allPairs(uint256)': FunctionFragment
    'controller()': FunctionFragment
    'feeReceiver()': FunctionFragment
    'getFeeVaultForLP(address)': FunctionFragment
    'getPair(address)': FunctionFragment
    'getTradeMiningStatus(address)': FunctionFragment
    'governance()': FunctionFragment
    'vaultForCNode()': FunctionFragment
    'vaultForLP()': FunctionFragment
    'vaultForTrader()': FunctionFragment
    'allPairsLength()': FunctionFragment
    'pairCodeHash()': FunctionFragment
    'createPair(address)': FunctionFragment
    'setGovernance(address)': FunctionFragment
    'setController(address)': FunctionFragment
    'setFeeReceiver(address)': FunctionFragment
    'setFeeVaultForLP(address,address)': FunctionFragment
    'setVaultForLP(address)': FunctionFragment
    'setVaultForTrader(address)': FunctionFragment
    'setVaultForCNode(address)': FunctionFragment
    'setTradeMiningStatus(address,bool)': FunctionFragment
    'getController()': FunctionFragment
    'getFeeReceiver()': FunctionFragment
    'getVaultForLP()': FunctionFragment
    'getVaultForTrader()': FunctionFragment
    'getVaultForCNode()': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'WETH', values?: undefined): string
  encodeFunctionData(functionFragment: 'allPairs', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'controller', values?: undefined): string
  encodeFunctionData(functionFragment: 'feeReceiver', values?: undefined): string
  encodeFunctionData(functionFragment: 'getFeeVaultForLP', values: [string]): string
  encodeFunctionData(functionFragment: 'getPair', values: [string]): string
  encodeFunctionData(functionFragment: 'getTradeMiningStatus', values: [string]): string
  encodeFunctionData(functionFragment: 'governance', values?: undefined): string
  encodeFunctionData(functionFragment: 'vaultForCNode', values?: undefined): string
  encodeFunctionData(functionFragment: 'vaultForLP', values?: undefined): string
  encodeFunctionData(functionFragment: 'vaultForTrader', values?: undefined): string
  encodeFunctionData(functionFragment: 'allPairsLength', values?: undefined): string
  encodeFunctionData(functionFragment: 'pairCodeHash', values?: undefined): string
  encodeFunctionData(functionFragment: 'createPair', values: [string]): string
  encodeFunctionData(functionFragment: 'setGovernance', values: [string]): string
  encodeFunctionData(functionFragment: 'setController', values: [string]): string
  encodeFunctionData(functionFragment: 'setFeeReceiver', values: [string]): string
  encodeFunctionData(functionFragment: 'setFeeVaultForLP', values: [string, string]): string
  encodeFunctionData(functionFragment: 'setVaultForLP', values: [string]): string
  encodeFunctionData(functionFragment: 'setVaultForTrader', values: [string]): string
  encodeFunctionData(functionFragment: 'setVaultForCNode', values: [string]): string
  encodeFunctionData(functionFragment: 'setTradeMiningStatus', values: [string, boolean]): string
  encodeFunctionData(functionFragment: 'getController', values?: undefined): string
  encodeFunctionData(functionFragment: 'getFeeReceiver', values?: undefined): string
  encodeFunctionData(functionFragment: 'getVaultForLP', values?: undefined): string
  encodeFunctionData(functionFragment: 'getVaultForTrader', values?: undefined): string
  encodeFunctionData(functionFragment: 'getVaultForCNode', values?: undefined): string

  decodeFunctionResult(functionFragment: 'WETH', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'allPairs', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'controller', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'feeReceiver', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getFeeVaultForLP', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getPair', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getTradeMiningStatus', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'governance', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'vaultForCNode', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'vaultForLP', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'vaultForTrader', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'allPairsLength', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'pairCodeHash', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'createPair', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setGovernance', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setController', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setFeeReceiver', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setFeeVaultForLP', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setVaultForLP', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setVaultForTrader', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setVaultForCNode', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setTradeMiningStatus', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getController', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getFeeReceiver', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getVaultForLP', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getVaultForTrader', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getVaultForCNode', data: BytesLike): Result

  events: {
    'NewController(address)': EventFragment
    'NewFeeReceiver(address)': EventFragment
    'NewFeeVaultForLP(address,address)': EventFragment
    'NewGovernance(address)': EventFragment
    'NewVaultForCNode(address)': EventFragment
    'NewVaultForLP(address)': EventFragment
    'NewVaultForTrader(address)': EventFragment
    'PairCreated(address,address,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'NewController'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'NewFeeReceiver'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'NewFeeVaultForLP'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'NewGovernance'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'NewVaultForCNode'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'NewVaultForLP'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'NewVaultForTrader'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'PairCreated'): EventFragment
}

export class CoFiXFactory extends BaseContract {
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

  interface: CoFiXFactoryInterface

  functions: {
    WETH(overrides?: CallOverrides): Promise<[string]>

    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>

    controller(overrides?: CallOverrides): Promise<[string]>

    feeReceiver(overrides?: CallOverrides): Promise<[string]>

    getFeeVaultForLP(arg0: string, overrides?: CallOverrides): Promise<[string]>

    getPair(arg0: string, overrides?: CallOverrides): Promise<[string]>

    getTradeMiningStatus(arg0: string, overrides?: CallOverrides): Promise<[boolean]>

    governance(overrides?: CallOverrides): Promise<[string]>

    vaultForCNode(overrides?: CallOverrides): Promise<[string]>

    vaultForLP(overrides?: CallOverrides): Promise<[string]>

    vaultForTrader(overrides?: CallOverrides): Promise<[string]>

    allPairsLength(overrides?: CallOverrides): Promise<[BigNumber]>

    pairCodeHash(overrides?: CallOverrides): Promise<[string]>

    createPair(token: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    setGovernance(
      _new: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setController(
      _new: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setFeeReceiver(
      _new: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setFeeVaultForLP(
      token: string,
      feeVault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setVaultForLP(
      _new: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setVaultForTrader(
      _new: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setVaultForCNode(
      _new: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setTradeMiningStatus(
      token: string,
      status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    getController(overrides?: CallOverrides): Promise<[string]>

    getFeeReceiver(overrides?: CallOverrides): Promise<[string]>

    getVaultForLP(overrides?: CallOverrides): Promise<[string]>

    getVaultForTrader(overrides?: CallOverrides): Promise<[string]>

    getVaultForCNode(overrides?: CallOverrides): Promise<[string]>
  }

  WETH(overrides?: CallOverrides): Promise<string>

  allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

  controller(overrides?: CallOverrides): Promise<string>

  feeReceiver(overrides?: CallOverrides): Promise<string>

  getFeeVaultForLP(arg0: string, overrides?: CallOverrides): Promise<string>

  getPair(arg0: string, overrides?: CallOverrides): Promise<string>

  getTradeMiningStatus(arg0: string, overrides?: CallOverrides): Promise<boolean>

  governance(overrides?: CallOverrides): Promise<string>

  vaultForCNode(overrides?: CallOverrides): Promise<string>

  vaultForLP(overrides?: CallOverrides): Promise<string>

  vaultForTrader(overrides?: CallOverrides): Promise<string>

  allPairsLength(overrides?: CallOverrides): Promise<BigNumber>

  pairCodeHash(overrides?: CallOverrides): Promise<string>

  createPair(token: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  setGovernance(_new: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  setController(_new: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  setFeeReceiver(
    _new: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  setFeeVaultForLP(
    token: string,
    feeVault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  setVaultForLP(_new: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  setVaultForTrader(
    _new: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  setVaultForCNode(
    _new: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  setTradeMiningStatus(
    token: string,
    status: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  getController(overrides?: CallOverrides): Promise<string>

  getFeeReceiver(overrides?: CallOverrides): Promise<string>

  getVaultForLP(overrides?: CallOverrides): Promise<string>

  getVaultForTrader(overrides?: CallOverrides): Promise<string>

  getVaultForCNode(overrides?: CallOverrides): Promise<string>

  callStatic: {
    WETH(overrides?: CallOverrides): Promise<string>

    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

    controller(overrides?: CallOverrides): Promise<string>

    feeReceiver(overrides?: CallOverrides): Promise<string>

    getFeeVaultForLP(arg0: string, overrides?: CallOverrides): Promise<string>

    getPair(arg0: string, overrides?: CallOverrides): Promise<string>

    getTradeMiningStatus(arg0: string, overrides?: CallOverrides): Promise<boolean>

    governance(overrides?: CallOverrides): Promise<string>

    vaultForCNode(overrides?: CallOverrides): Promise<string>

    vaultForLP(overrides?: CallOverrides): Promise<string>

    vaultForTrader(overrides?: CallOverrides): Promise<string>

    allPairsLength(overrides?: CallOverrides): Promise<BigNumber>

    pairCodeHash(overrides?: CallOverrides): Promise<string>

    createPair(token: string, overrides?: CallOverrides): Promise<string>

    setGovernance(_new: string, overrides?: CallOverrides): Promise<void>

    setController(_new: string, overrides?: CallOverrides): Promise<void>

    setFeeReceiver(_new: string, overrides?: CallOverrides): Promise<void>

    setFeeVaultForLP(token: string, feeVault: string, overrides?: CallOverrides): Promise<void>

    setVaultForLP(_new: string, overrides?: CallOverrides): Promise<void>

    setVaultForTrader(_new: string, overrides?: CallOverrides): Promise<void>

    setVaultForCNode(_new: string, overrides?: CallOverrides): Promise<void>

    setTradeMiningStatus(token: string, status: boolean, overrides?: CallOverrides): Promise<void>

    getController(overrides?: CallOverrides): Promise<string>

    getFeeReceiver(overrides?: CallOverrides): Promise<string>

    getVaultForLP(overrides?: CallOverrides): Promise<string>

    getVaultForTrader(overrides?: CallOverrides): Promise<string>

    getVaultForCNode(overrides?: CallOverrides): Promise<string>
  }

  filters: {
    NewController(_new?: null): TypedEventFilter<[string], { _new: string }>

    NewFeeReceiver(_new?: null): TypedEventFilter<[string], { _new: string }>

    NewFeeVaultForLP(
      token?: null,
      feeVault?: null
    ): TypedEventFilter<[string, string], { token: string; feeVault: string }>

    NewGovernance(_new?: null): TypedEventFilter<[string], { _new: string }>

    NewVaultForCNode(_new?: null): TypedEventFilter<[string], { _new: string }>

    NewVaultForLP(_new?: null): TypedEventFilter<[string], { _new: string }>

    NewVaultForTrader(_new?: null): TypedEventFilter<[string], { _new: string }>

    PairCreated(
      token?: string | null,
      pair?: null,
      undefined?: null
    ): TypedEventFilter<[string, string, BigNumber], { token: string; pair: string; arg2: BigNumber }>
  }

  estimateGas: {
    WETH(overrides?: CallOverrides): Promise<BigNumber>

    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    controller(overrides?: CallOverrides): Promise<BigNumber>

    feeReceiver(overrides?: CallOverrides): Promise<BigNumber>

    getFeeVaultForLP(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    getPair(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    getTradeMiningStatus(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    governance(overrides?: CallOverrides): Promise<BigNumber>

    vaultForCNode(overrides?: CallOverrides): Promise<BigNumber>

    vaultForLP(overrides?: CallOverrides): Promise<BigNumber>

    vaultForTrader(overrides?: CallOverrides): Promise<BigNumber>

    allPairsLength(overrides?: CallOverrides): Promise<BigNumber>

    pairCodeHash(overrides?: CallOverrides): Promise<BigNumber>

    createPair(token: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    setGovernance(_new: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    setController(_new: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    setFeeReceiver(_new: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    setFeeVaultForLP(
      token: string,
      feeVault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    setVaultForLP(_new: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    setVaultForTrader(_new: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    setVaultForCNode(_new: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    setTradeMiningStatus(
      token: string,
      status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    getController(overrides?: CallOverrides): Promise<BigNumber>

    getFeeReceiver(overrides?: CallOverrides): Promise<BigNumber>

    getVaultForLP(overrides?: CallOverrides): Promise<BigNumber>

    getVaultForTrader(overrides?: CallOverrides): Promise<BigNumber>

    getVaultForCNode(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>

    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>

    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>

    feeReceiver(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getFeeVaultForLP(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getPair(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getTradeMiningStatus(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>

    vaultForCNode(overrides?: CallOverrides): Promise<PopulatedTransaction>

    vaultForLP(overrides?: CallOverrides): Promise<PopulatedTransaction>

    vaultForTrader(overrides?: CallOverrides): Promise<PopulatedTransaction>

    allPairsLength(overrides?: CallOverrides): Promise<PopulatedTransaction>

    pairCodeHash(overrides?: CallOverrides): Promise<PopulatedTransaction>

    createPair(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setGovernance(
      _new: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setController(
      _new: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setFeeReceiver(
      _new: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setFeeVaultForLP(
      token: string,
      feeVault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setVaultForLP(
      _new: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setVaultForTrader(
      _new: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setVaultForCNode(
      _new: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setTradeMiningStatus(
      token: string,
      status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    getController(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getFeeReceiver(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getVaultForLP(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getVaultForTrader(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getVaultForCNode(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}

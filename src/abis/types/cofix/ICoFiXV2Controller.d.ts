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
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import { TypedEventFilter, TypedEvent, TypedListener } from './commons'

interface ICoFiXV2ControllerInterface extends ethers.utils.Interface {
  functions: {
    'addCaller(address)': FunctionFragment
    'setCGamma(address,uint32)': FunctionFragment
    'queryOracle(address,uint8,bytes)': FunctionFragment
    'getKInfo(address)': FunctionFragment
    'getLatestPriceAndAvgVola(address)': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'addCaller', values: [string]): string
  encodeFunctionData(functionFragment: 'setCGamma', values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: 'queryOracle', values: [string, BigNumberish, BytesLike]): string
  encodeFunctionData(functionFragment: 'getKInfo', values: [string]): string
  encodeFunctionData(functionFragment: 'getLatestPriceAndAvgVola', values: [string]): string

  decodeFunctionResult(functionFragment: 'addCaller', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setCGamma', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'queryOracle', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getKInfo', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getLatestPriceAndAvgVola', data: BytesLike): Result

  events: {
    'NewCGamma(address,uint32)': EventFragment
    'NewGamma(int128)': EventFragment
    'NewGovernance(address)': EventFragment
    'NewK(address,uint256,uint256,uint256,uint256,uint256,uint256)': EventFragment
    'NewKLimit(int128)': EventFragment
    'NewKRefreshInterval(uint256)': EventFragment
    'NewKTable(address)': EventFragment
    'NewOracle(address)': EventFragment
    'NewTheta(address,uint32)': EventFragment
    'NewTimespan(uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'NewCGamma'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'NewGamma'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'NewGovernance'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'NewK'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'NewKLimit'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'NewKRefreshInterval'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'NewKTable'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'NewOracle'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'NewTheta'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'NewTimespan'): EventFragment
}

export class ICoFiXV2Controller extends BaseContract {
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

  interface: ICoFiXV2ControllerInterface

  functions: {
    addCaller(caller: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    setCGamma(
      token: string,
      gamma: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    queryOracle(
      token: string,
      op: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    getKInfo(
      token: string,
      overrides?: CallOverrides
    ): Promise<[number, number, number] & { k: number; updatedAt: number; theta: number }>

    getLatestPriceAndAvgVola(
      token: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>
  }

  addCaller(caller: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  setCGamma(
    token: string,
    gamma: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  queryOracle(
    token: string,
    op: BigNumberish,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  getKInfo(
    token: string,
    overrides?: CallOverrides
  ): Promise<[number, number, number] & { k: number; updatedAt: number; theta: number }>

  getLatestPriceAndAvgVola(
    token: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    addCaller(caller: string, overrides?: CallOverrides): Promise<void>

    setCGamma(token: string, gamma: BigNumberish, overrides?: CallOverrides): Promise<void>

    queryOracle(
      token: string,
      op: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        k: BigNumber
        ethAmount: BigNumber
        erc20Amount: BigNumber
        blockNum: BigNumber
        theta: BigNumber
      }
    >

    getKInfo(
      token: string,
      overrides?: CallOverrides
    ): Promise<[number, number, number] & { k: number; updatedAt: number; theta: number }>

    getLatestPriceAndAvgVola(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>
  }

  filters: {
    NewCGamma(token?: null, gamma?: null): TypedEventFilter<[string, number], { token: string; gamma: number }>

    NewGamma(_gamma?: null): TypedEventFilter<[BigNumber], { _gamma: BigNumber }>

    NewGovernance(_new?: null): TypedEventFilter<[string], { _new: string }>

    NewK(
      token?: null,
      K?: null,
      sigma?: null,
      T?: null,
      ethAmount?: null,
      erc20Amount?: null,
      blockNum?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        token: string
        K: BigNumber
        sigma: BigNumber
        T: BigNumber
        ethAmount: BigNumber
        erc20Amount: BigNumber
        blockNum: BigNumber
      }
    >

    NewKLimit(maxK0?: null): TypedEventFilter<[BigNumber], { maxK0: BigNumber }>

    NewKRefreshInterval(_interval?: null): TypedEventFilter<[BigNumber], { _interval: BigNumber }>

    NewKTable(_kTable?: null): TypedEventFilter<[string], { _kTable: string }>

    NewOracle(_priceOracle?: null): TypedEventFilter<[string], { _priceOracle: string }>

    NewTheta(token?: null, theta?: null): TypedEventFilter<[string, number], { token: string; theta: number }>

    NewTimespan(_timeSpan?: null): TypedEventFilter<[BigNumber], { _timeSpan: BigNumber }>
  }

  estimateGas: {
    addCaller(caller: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    setCGamma(
      token: string,
      gamma: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    queryOracle(
      token: string,
      op: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    getKInfo(token: string, overrides?: CallOverrides): Promise<BigNumber>

    getLatestPriceAndAvgVola(
      token: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    addCaller(
      caller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setCGamma(
      token: string,
      gamma: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    queryOracle(
      token: string,
      op: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    getKInfo(token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getLatestPriceAndAvgVola(
      token: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>
  }
}

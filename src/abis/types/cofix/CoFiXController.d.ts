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
  PayableOverrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import { TypedEventFilter, TypedEvent, TypedListener } from './commons'

interface CoFiXControllerInterface extends ethers.utils.Interface {
  functions: {
    'calcK(uint256,uint256)': FunctionFragment
    'latestPriceInfo(address,address)': FunctionFragment
    'queryOracle(address,address)': FunctionFragment
    'queryPrice(address,address)': FunctionFragment
    'sqrt(uint256)': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'calcK', values: [BigNumberish, BigNumberish]): string
  encodeFunctionData(functionFragment: 'latestPriceInfo', values: [string, string]): string
  encodeFunctionData(functionFragment: 'queryOracle', values: [string, string]): string
  encodeFunctionData(functionFragment: 'queryPrice', values: [string, string]): string
  encodeFunctionData(functionFragment: 'sqrt', values: [BigNumberish]): string

  decodeFunctionResult(functionFragment: 'calcK', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'latestPriceInfo', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'queryOracle', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'queryPrice', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'sqrt', data: BytesLike): Result

  events: {}
}

export class CoFiXController extends BaseContract {
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

  interface: CoFiXControllerInterface

  functions: {
    calcK(sigmaSQ: BigNumberish, bn: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & { k: BigNumber }>

    latestPriceInfo(
      tokenAddress: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    queryOracle(
      tokenAddress: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    queryPrice(
      tokenAddress: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    sqrt(y: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & { z: BigNumber }>
  }

  calcK(sigmaSQ: BigNumberish, bn: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

  latestPriceInfo(
    tokenAddress: string,
    payback: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  queryOracle(
    tokenAddress: string,
    payback: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  queryPrice(
    tokenAddress: string,
    payback: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  sqrt(y: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

  callStatic: {
    calcK(sigmaSQ: BigNumberish, bn: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    latestPriceInfo(
      tokenAddress: string,
      payback: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        blockNumber: BigNumber
        priceEthAmount: BigNumber
        priceTokenAmount: BigNumber
        avgPriceEthAmount: BigNumber
        avgPriceTokenAmount: BigNumber
        sigmaSQ: BigNumber
      }
    >

    queryOracle(
      tokenAddress: string,
      payback: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        k: BigNumber
        ethAmount: BigNumber
        tokenAmount: BigNumber
        blockNumber: BigNumber
      }
    >

    queryPrice(
      tokenAddress: string,
      payback: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        ethAmount: BigNumber
        tokenAmount: BigNumber
        blockNumber: BigNumber
      }
    >

    sqrt(y: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>
  }

  filters: {}

  estimateGas: {
    calcK(sigmaSQ: BigNumberish, bn: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    latestPriceInfo(
      tokenAddress: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    queryOracle(
      tokenAddress: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    queryPrice(
      tokenAddress: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    sqrt(y: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    calcK(sigmaSQ: BigNumberish, bn: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>

    latestPriceInfo(
      tokenAddress: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    queryOracle(
      tokenAddress: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    queryPrice(
      tokenAddress: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    sqrt(y: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}

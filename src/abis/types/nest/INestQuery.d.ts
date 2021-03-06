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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface INestQueryInterface extends ethers.utils.Interface {
  functions: {
    "triggeredPrice(address)": FunctionFragment;
    "triggeredPriceInfo(address)": FunctionFragment;
    "findPrice(address,uint256)": FunctionFragment;
    "latestPrice(address)": FunctionFragment;
    "lastPriceList(address,uint256)": FunctionFragment;
    "latestPriceAndTriggeredPriceInfo(address)": FunctionFragment;
    "triggeredPrice2(address)": FunctionFragment;
    "triggeredPriceInfo2(address)": FunctionFragment;
    "latestPrice2(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "triggeredPrice",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "triggeredPriceInfo",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "findPrice",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "latestPrice", values: [string]): string;
  encodeFunctionData(
    functionFragment: "lastPriceList",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "latestPriceAndTriggeredPriceInfo",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "triggeredPrice2",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "triggeredPriceInfo2",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "latestPrice2",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "triggeredPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "triggeredPriceInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "findPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "latestPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastPriceList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestPriceAndTriggeredPriceInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "triggeredPrice2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "triggeredPriceInfo2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestPrice2",
    data: BytesLike
  ): Result;

  events: {};
}

export class INestQuery extends BaseContract {
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

  interface: INestQueryInterface;

  functions: {
    triggeredPrice(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { blockNumber: BigNumber; price: BigNumber }
    >;

    triggeredPriceInfo(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        blockNumber: BigNumber;
        price: BigNumber;
        avgPrice: BigNumber;
        sigmaSQ: BigNumber;
      }
    >;

    findPrice(
      tokenAddress: string,
      height: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { blockNumber: BigNumber; price: BigNumber }
    >;

    latestPrice(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { blockNumber: BigNumber; price: BigNumber }
    >;

    lastPriceList(
      tokenAddress: string,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    latestPriceAndTriggeredPriceInfo(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        latestPriceBlockNumber: BigNumber;
        latestPriceValue: BigNumber;
        triggeredPriceBlockNumber: BigNumber;
        triggeredPriceValue: BigNumber;
        triggeredAvgPrice: BigNumber;
        triggeredSigmaSQ: BigNumber;
      }
    >;

    triggeredPrice2(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        blockNumber: BigNumber;
        price: BigNumber;
        ntokenBlockNumber: BigNumber;
        ntokenPrice: BigNumber;
      }
    >;

    triggeredPriceInfo2(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        blockNumber: BigNumber;
        price: BigNumber;
        avgPrice: BigNumber;
        sigmaSQ: BigNumber;
        ntokenBlockNumber: BigNumber;
        ntokenPrice: BigNumber;
        ntokenAvgPrice: BigNumber;
        ntokenSigmaSQ: BigNumber;
      }
    >;

    latestPrice2(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        blockNumber: BigNumber;
        price: BigNumber;
        ntokenBlockNumber: BigNumber;
        ntokenPrice: BigNumber;
      }
    >;
  };

  triggeredPrice(
    tokenAddress: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { blockNumber: BigNumber; price: BigNumber }
  >;

  triggeredPriceInfo(
    tokenAddress: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      blockNumber: BigNumber;
      price: BigNumber;
      avgPrice: BigNumber;
      sigmaSQ: BigNumber;
    }
  >;

  findPrice(
    tokenAddress: string,
    height: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { blockNumber: BigNumber; price: BigNumber }
  >;

  latestPrice(
    tokenAddress: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { blockNumber: BigNumber; price: BigNumber }
  >;

  lastPriceList(
    tokenAddress: string,
    count: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  latestPriceAndTriggeredPriceInfo(
    tokenAddress: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      latestPriceBlockNumber: BigNumber;
      latestPriceValue: BigNumber;
      triggeredPriceBlockNumber: BigNumber;
      triggeredPriceValue: BigNumber;
      triggeredAvgPrice: BigNumber;
      triggeredSigmaSQ: BigNumber;
    }
  >;

  triggeredPrice2(
    tokenAddress: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      blockNumber: BigNumber;
      price: BigNumber;
      ntokenBlockNumber: BigNumber;
      ntokenPrice: BigNumber;
    }
  >;

  triggeredPriceInfo2(
    tokenAddress: string,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      blockNumber: BigNumber;
      price: BigNumber;
      avgPrice: BigNumber;
      sigmaSQ: BigNumber;
      ntokenBlockNumber: BigNumber;
      ntokenPrice: BigNumber;
      ntokenAvgPrice: BigNumber;
      ntokenSigmaSQ: BigNumber;
    }
  >;

  latestPrice2(
    tokenAddress: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      blockNumber: BigNumber;
      price: BigNumber;
      ntokenBlockNumber: BigNumber;
      ntokenPrice: BigNumber;
    }
  >;

  callStatic: {
    triggeredPrice(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { blockNumber: BigNumber; price: BigNumber }
    >;

    triggeredPriceInfo(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        blockNumber: BigNumber;
        price: BigNumber;
        avgPrice: BigNumber;
        sigmaSQ: BigNumber;
      }
    >;

    findPrice(
      tokenAddress: string,
      height: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { blockNumber: BigNumber; price: BigNumber }
    >;

    latestPrice(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { blockNumber: BigNumber; price: BigNumber }
    >;

    lastPriceList(
      tokenAddress: string,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    latestPriceAndTriggeredPriceInfo(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        latestPriceBlockNumber: BigNumber;
        latestPriceValue: BigNumber;
        triggeredPriceBlockNumber: BigNumber;
        triggeredPriceValue: BigNumber;
        triggeredAvgPrice: BigNumber;
        triggeredSigmaSQ: BigNumber;
      }
    >;

    triggeredPrice2(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        blockNumber: BigNumber;
        price: BigNumber;
        ntokenBlockNumber: BigNumber;
        ntokenPrice: BigNumber;
      }
    >;

    triggeredPriceInfo2(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        blockNumber: BigNumber;
        price: BigNumber;
        avgPrice: BigNumber;
        sigmaSQ: BigNumber;
        ntokenBlockNumber: BigNumber;
        ntokenPrice: BigNumber;
        ntokenAvgPrice: BigNumber;
        ntokenSigmaSQ: BigNumber;
      }
    >;

    latestPrice2(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        blockNumber: BigNumber;
        price: BigNumber;
        ntokenBlockNumber: BigNumber;
        ntokenPrice: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    triggeredPrice(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    triggeredPriceInfo(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    findPrice(
      tokenAddress: string,
      height: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestPrice(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastPriceList(
      tokenAddress: string,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestPriceAndTriggeredPriceInfo(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    triggeredPrice2(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    triggeredPriceInfo2(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestPrice2(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    triggeredPrice(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    triggeredPriceInfo(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    findPrice(
      tokenAddress: string,
      height: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestPrice(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastPriceList(
      tokenAddress: string,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestPriceAndTriggeredPriceInfo(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    triggeredPrice2(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    triggeredPriceInfo2(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestPrice2(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

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

interface INestPriceFacadeInterface extends ethers.utils.Interface {
  functions: {
    "triggeredPrice(address)": FunctionFragment;
    "triggeredPriceInfo(address)": FunctionFragment;
    "findPrice(address,uint256)": FunctionFragment;
    "latestPrice(address)": FunctionFragment;
    "lastPriceList(address,uint256)": FunctionFragment;
    "latestPriceAndTriggeredPriceInfo(address)": FunctionFragment;
    "lastPriceListAndTriggeredPriceInfo(address,uint256)": FunctionFragment;
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
    functionFragment: "lastPriceListAndTriggeredPriceInfo",
    values: [string, BigNumberish]
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
    functionFragment: "lastPriceListAndTriggeredPriceInfo",
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

export class INestPriceFacade extends BaseContract {
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

  interface: INestPriceFacadeInterface;

  functions: {
    /**
     * Get the latest trigger price
     * @param tokenAddress Destination token address
     */
    triggeredPrice(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { blockNumber: BigNumber; price: BigNumber }
    >;

    /**
     * Get the full information of latest trigger price
     * @param tokenAddress Destination token address
     */
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

    /**
     * Find the price at block number
     * @param height Destination block number
     * @param tokenAddress Destination token address
     */
    findPrice(
      tokenAddress: string,
      height: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { blockNumber: BigNumber; price: BigNumber }
    >;

    /**
     * Get the latest effective price
     * @param tokenAddress Destination token address
     */
    latestPrice(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { blockNumber: BigNumber; price: BigNumber }
    >;

    /**
     * Get the last (num) effective price
     * @param count The number of prices that want to return
     * @param tokenAddress Destination token address
     */
    lastPriceList(
      tokenAddress: string,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    /**
     * Returns the results of latestPrice() and triggeredPriceInfo()
     * @param tokenAddress Destination token address
     */
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

    /**
     * Returns lastPriceList and triggered price info
     * @param count The number of prices that want to return
     * @param tokenAddress Destination token address
     */
    lastPriceListAndTriggeredPriceInfo(
      tokenAddress: string,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber, BigNumber, BigNumber, BigNumber] & {
        prices: BigNumber[];
        triggeredPriceBlockNumber: BigNumber;
        triggeredPriceValue: BigNumber;
        triggeredAvgPrice: BigNumber;
        triggeredSigmaSQ: BigNumber;
      }
    >;

    /**
     * Get the latest trigger price. (token and ntoken)
     * @param tokenAddress Destination token address
     */
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

    /**
     * Get the full information of latest trigger price. (token and ntoken)
     * @param tokenAddress Destination token address
     */
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

    /**
     * Get the latest effective price. (token and ntoken)
     * @param tokenAddress Destination token address
     */
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

  /**
   * Get the latest trigger price
   * @param tokenAddress Destination token address
   */
  triggeredPrice(
    tokenAddress: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { blockNumber: BigNumber; price: BigNumber }
  >;

  /**
   * Get the full information of latest trigger price
   * @param tokenAddress Destination token address
   */
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

  /**
   * Find the price at block number
   * @param height Destination block number
   * @param tokenAddress Destination token address
   */
  findPrice(
    tokenAddress: string,
    height: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { blockNumber: BigNumber; price: BigNumber }
  >;

  /**
   * Get the latest effective price
   * @param tokenAddress Destination token address
   */
  latestPrice(
    tokenAddress: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { blockNumber: BigNumber; price: BigNumber }
  >;

  /**
   * Get the last (num) effective price
   * @param count The number of prices that want to return
   * @param tokenAddress Destination token address
   */
  lastPriceList(
    tokenAddress: string,
    count: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  /**
   * Returns the results of latestPrice() and triggeredPriceInfo()
   * @param tokenAddress Destination token address
   */
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

  /**
   * Returns lastPriceList and triggered price info
   * @param count The number of prices that want to return
   * @param tokenAddress Destination token address
   */
  lastPriceListAndTriggeredPriceInfo(
    tokenAddress: string,
    count: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber[], BigNumber, BigNumber, BigNumber, BigNumber] & {
      prices: BigNumber[];
      triggeredPriceBlockNumber: BigNumber;
      triggeredPriceValue: BigNumber;
      triggeredAvgPrice: BigNumber;
      triggeredSigmaSQ: BigNumber;
    }
  >;

  /**
   * Get the latest trigger price. (token and ntoken)
   * @param tokenAddress Destination token address
   */
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

  /**
   * Get the full information of latest trigger price. (token and ntoken)
   * @param tokenAddress Destination token address
   */
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

  /**
   * Get the latest effective price. (token and ntoken)
   * @param tokenAddress Destination token address
   */
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
    /**
     * Get the latest trigger price
     * @param tokenAddress Destination token address
     */
    triggeredPrice(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { blockNumber: BigNumber; price: BigNumber }
    >;

    /**
     * Get the full information of latest trigger price
     * @param tokenAddress Destination token address
     */
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

    /**
     * Find the price at block number
     * @param height Destination block number
     * @param tokenAddress Destination token address
     */
    findPrice(
      tokenAddress: string,
      height: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { blockNumber: BigNumber; price: BigNumber }
    >;

    /**
     * Get the latest effective price
     * @param tokenAddress Destination token address
     */
    latestPrice(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { blockNumber: BigNumber; price: BigNumber }
    >;

    /**
     * Get the last (num) effective price
     * @param count The number of prices that want to return
     * @param tokenAddress Destination token address
     */
    lastPriceList(
      tokenAddress: string,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    /**
     * Returns the results of latestPrice() and triggeredPriceInfo()
     * @param tokenAddress Destination token address
     */
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

    /**
     * Returns lastPriceList and triggered price info
     * @param count The number of prices that want to return
     * @param tokenAddress Destination token address
     */
    lastPriceListAndTriggeredPriceInfo(
      tokenAddress: string,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber, BigNumber, BigNumber, BigNumber] & {
        prices: BigNumber[];
        triggeredPriceBlockNumber: BigNumber;
        triggeredPriceValue: BigNumber;
        triggeredAvgPrice: BigNumber;
        triggeredSigmaSQ: BigNumber;
      }
    >;

    /**
     * Get the latest trigger price. (token and ntoken)
     * @param tokenAddress Destination token address
     */
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

    /**
     * Get the full information of latest trigger price. (token and ntoken)
     * @param tokenAddress Destination token address
     */
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

    /**
     * Get the latest effective price. (token and ntoken)
     * @param tokenAddress Destination token address
     */
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
    /**
     * Get the latest trigger price
     * @param tokenAddress Destination token address
     */
    triggeredPrice(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Get the full information of latest trigger price
     * @param tokenAddress Destination token address
     */
    triggeredPriceInfo(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Find the price at block number
     * @param height Destination block number
     * @param tokenAddress Destination token address
     */
    findPrice(
      tokenAddress: string,
      height: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Get the latest effective price
     * @param tokenAddress Destination token address
     */
    latestPrice(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Get the last (num) effective price
     * @param count The number of prices that want to return
     * @param tokenAddress Destination token address
     */
    lastPriceList(
      tokenAddress: string,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns the results of latestPrice() and triggeredPriceInfo()
     * @param tokenAddress Destination token address
     */
    latestPriceAndTriggeredPriceInfo(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns lastPriceList and triggered price info
     * @param count The number of prices that want to return
     * @param tokenAddress Destination token address
     */
    lastPriceListAndTriggeredPriceInfo(
      tokenAddress: string,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Get the latest trigger price. (token and ntoken)
     * @param tokenAddress Destination token address
     */
    triggeredPrice2(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Get the full information of latest trigger price. (token and ntoken)
     * @param tokenAddress Destination token address
     */
    triggeredPriceInfo2(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Get the latest effective price. (token and ntoken)
     * @param tokenAddress Destination token address
     */
    latestPrice2(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Get the latest trigger price
     * @param tokenAddress Destination token address
     */
    triggeredPrice(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Get the full information of latest trigger price
     * @param tokenAddress Destination token address
     */
    triggeredPriceInfo(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Find the price at block number
     * @param height Destination block number
     * @param tokenAddress Destination token address
     */
    findPrice(
      tokenAddress: string,
      height: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Get the latest effective price
     * @param tokenAddress Destination token address
     */
    latestPrice(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Get the last (num) effective price
     * @param count The number of prices that want to return
     * @param tokenAddress Destination token address
     */
    lastPriceList(
      tokenAddress: string,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the results of latestPrice() and triggeredPriceInfo()
     * @param tokenAddress Destination token address
     */
    latestPriceAndTriggeredPriceInfo(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns lastPriceList and triggered price info
     * @param count The number of prices that want to return
     * @param tokenAddress Destination token address
     */
    lastPriceListAndTriggeredPriceInfo(
      tokenAddress: string,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Get the latest trigger price. (token and ntoken)
     * @param tokenAddress Destination token address
     */
    triggeredPrice2(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Get the full information of latest trigger price. (token and ntoken)
     * @param tokenAddress Destination token address
     */
    triggeredPriceInfo2(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Get the latest effective price. (token and ntoken)
     * @param tokenAddress Destination token address
     */
    latestPrice2(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

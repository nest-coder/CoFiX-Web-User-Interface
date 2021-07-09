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

interface NestPriceFacadeInterface extends ethers.utils.Interface {
  functions: {
    "latestPrice(address,address)": FunctionFragment;
    "latestPriceAndTriggeredPriceInfo(address,address)": FunctionFragment;
    "latestPriceView(address)": FunctionFragment;
    "setPrice(address,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "latestPrice",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "latestPriceAndTriggeredPriceInfo",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "latestPriceView",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPrice",
    values: [string, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "latestPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestPriceAndTriggeredPriceInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestPriceView",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPrice", data: BytesLike): Result;

  events: {};
}

export class NestPriceFacade extends BaseContract {
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

  interface: NestPriceFacadeInterface;

  functions: {
    latestPrice(
      tokenAddress: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    latestPriceAndTriggeredPriceInfo(
      tokenAddress: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    latestPriceView(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { blockNumber: BigNumber; price: BigNumber }
    >;

    setPrice(
      token: string,
      price: BigNumberish,
      dbn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  latestPrice(
    tokenAddress: string,
    payback: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  latestPriceAndTriggeredPriceInfo(
    tokenAddress: string,
    payback: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  latestPriceView(
    tokenAddress: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { blockNumber: BigNumber; price: BigNumber }
  >;

  setPrice(
    token: string,
    price: BigNumberish,
    dbn: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    latestPrice(
      tokenAddress: string,
      payback: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { blockNumber: BigNumber; price: BigNumber }
    >;

    latestPriceAndTriggeredPriceInfo(
      tokenAddress: string,
      payback: string,
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

    latestPriceView(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { blockNumber: BigNumber; price: BigNumber }
    >;

    setPrice(
      token: string,
      price: BigNumberish,
      dbn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    latestPrice(
      tokenAddress: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    latestPriceAndTriggeredPriceInfo(
      tokenAddress: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    latestPriceView(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setPrice(
      token: string,
      price: BigNumberish,
      dbn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    latestPrice(
      tokenAddress: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    latestPriceAndTriggeredPriceInfo(
      tokenAddress: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    latestPriceView(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setPrice(
      token: string,
      price: BigNumberish,
      dbn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
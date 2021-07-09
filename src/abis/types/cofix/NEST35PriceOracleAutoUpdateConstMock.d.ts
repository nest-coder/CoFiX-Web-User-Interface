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

interface NEST35PriceOracleAutoUpdateConstMockInterface
  extends ethers.utils.Interface {
  functions: {
    "priceInfoMap(address)": FunctionFragment;
    "activate(address)": FunctionFragment;
    "queryPriceAvgVola(address,address)": FunctionFragment;
    "latestPrice(address)": FunctionFragment;
    "feedPrice(address,uint256,uint256,uint128,int128)": FunctionFragment;
    "checkPriceNow(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "priceInfoMap",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "activate", values: [string]): string;
  encodeFunctionData(
    functionFragment: "queryPriceAvgVola",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "latestPrice", values: [string]): string;
  encodeFunctionData(
    functionFragment: "feedPrice",
    values: [string, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkPriceNow",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "priceInfoMap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "activate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "queryPriceAvgVola",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feedPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "checkPriceNow",
    data: BytesLike
  ): Result;

  events: {};
}

export class NEST35PriceOracleAutoUpdateConstMock extends BaseContract {
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

  interface: NEST35PriceOracleAutoUpdateConstMockInterface;

  functions: {
    priceInfoMap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        ethAmount: BigNumber;
        erc20Amount: BigNumber;
        avgPrice: BigNumber;
        vola: BigNumber;
        lastUpdateBlock: BigNumber;
      }
    >;

    activate(
      defi: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    queryPriceAvgVola(
      token: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    latestPrice(
      token: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        ethAmount: BigNumber;
        tokenAmount: BigNumber;
        avgPrice: BigNumber;
        vola: BigNumber;
        bn: BigNumber;
      }
    >;

    feedPrice(
      token: string,
      ethAmount: BigNumberish,
      erc20Amount: BigNumberish,
      avgPrice: BigNumberish,
      vola: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    checkPriceNow(
      token: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        ethAmount: BigNumber;
        erc20Amount: BigNumber;
        avgPrice: BigNumber;
        vola: BigNumber;
        blockNum: BigNumber;
      }
    >;
  };

  priceInfoMap(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      ethAmount: BigNumber;
      erc20Amount: BigNumber;
      avgPrice: BigNumber;
      vola: BigNumber;
      lastUpdateBlock: BigNumber;
    }
  >;

  activate(
    defi: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  queryPriceAvgVola(
    token: string,
    payback: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  latestPrice(
    token: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      ethAmount: BigNumber;
      tokenAmount: BigNumber;
      avgPrice: BigNumber;
      vola: BigNumber;
      bn: BigNumber;
    }
  >;

  feedPrice(
    token: string,
    ethAmount: BigNumberish,
    erc20Amount: BigNumberish,
    avgPrice: BigNumberish,
    vola: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  checkPriceNow(
    token: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      ethAmount: BigNumber;
      erc20Amount: BigNumber;
      avgPrice: BigNumber;
      vola: BigNumber;
      blockNum: BigNumber;
    }
  >;

  callStatic: {
    priceInfoMap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        ethAmount: BigNumber;
        erc20Amount: BigNumber;
        avgPrice: BigNumber;
        vola: BigNumber;
        lastUpdateBlock: BigNumber;
      }
    >;

    activate(defi: string, overrides?: CallOverrides): Promise<void>;

    queryPriceAvgVola(
      token: string,
      payback: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        ethAmount: BigNumber;
        tokenAmount: BigNumber;
        avgPrice: BigNumber;
        vola: BigNumber;
        bn: BigNumber;
      }
    >;

    latestPrice(
      token: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        ethAmount: BigNumber;
        tokenAmount: BigNumber;
        avgPrice: BigNumber;
        vola: BigNumber;
        bn: BigNumber;
      }
    >;

    feedPrice(
      token: string,
      ethAmount: BigNumberish,
      erc20Amount: BigNumberish,
      avgPrice: BigNumberish,
      vola: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    checkPriceNow(
      token: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        ethAmount: BigNumber;
        erc20Amount: BigNumber;
        avgPrice: BigNumber;
        vola: BigNumber;
        blockNum: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    priceInfoMap(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    activate(
      defi: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    queryPriceAvgVola(
      token: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    latestPrice(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    feedPrice(
      token: string,
      ethAmount: BigNumberish,
      erc20Amount: BigNumberish,
      avgPrice: BigNumberish,
      vola: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    checkPriceNow(token: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    priceInfoMap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    activate(
      defi: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    queryPriceAvgVola(
      token: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    latestPrice(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feedPrice(
      token: string,
      ethAmount: BigNumberish,
      erc20Amount: BigNumberish,
      avgPrice: BigNumberish,
      vola: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    checkPriceNow(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

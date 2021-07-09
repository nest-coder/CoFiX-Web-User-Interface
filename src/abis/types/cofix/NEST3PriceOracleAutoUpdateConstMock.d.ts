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

interface NEST3PriceOracleAutoUpdateConstMockInterface
  extends ethers.utils.Interface {
  functions: {
    "priceInfoMap(address)": FunctionFragment;
    "updateAndCheckPriceList(address,uint256)": FunctionFragment;
    "checkPriceList(address,uint256)": FunctionFragment;
    "feedPrice(address,uint256,uint256)": FunctionFragment;
    "checkPriceNow(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "priceInfoMap",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAndCheckPriceList",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkPriceList",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "feedPrice",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkPriceNow",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "priceInfoMap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAndCheckPriceList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkPriceList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feedPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "checkPriceNow",
    data: BytesLike
  ): Result;

  events: {};
}

export class NEST3PriceOracleAutoUpdateConstMock extends BaseContract {
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

  interface: NEST3PriceOracleAutoUpdateConstMockInterface;

  functions: {
    priceInfoMap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        ethAmount: BigNumber;
        erc20Amount: BigNumber;
        lastUpdateBlock: BigNumber;
      }
    >;

    updateAndCheckPriceList(
      token: string,
      num: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    checkPriceList(
      token: string,
      num: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    feedPrice(
      token: string,
      ethAmount: BigNumberish,
      erc20Amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    checkPriceNow(
      token: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        ethAmount: BigNumber;
        erc20Amount: BigNumber;
        blockNum: BigNumber;
      }
    >;
  };

  priceInfoMap(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      ethAmount: BigNumber;
      erc20Amount: BigNumber;
      lastUpdateBlock: BigNumber;
    }
  >;

  updateAndCheckPriceList(
    token: string,
    num: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  checkPriceList(
    token: string,
    num: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  feedPrice(
    token: string,
    ethAmount: BigNumberish,
    erc20Amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  checkPriceNow(
    token: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      ethAmount: BigNumber;
      erc20Amount: BigNumber;
      blockNum: BigNumber;
    }
  >;

  callStatic: {
    priceInfoMap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        ethAmount: BigNumber;
        erc20Amount: BigNumber;
        lastUpdateBlock: BigNumber;
      }
    >;

    updateAndCheckPriceList(
      token: string,
      num: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    checkPriceList(
      token: string,
      num: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    feedPrice(
      token: string,
      ethAmount: BigNumberish,
      erc20Amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    checkPriceNow(
      token: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        ethAmount: BigNumber;
        erc20Amount: BigNumber;
        blockNum: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    priceInfoMap(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    updateAndCheckPriceList(
      token: string,
      num: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    checkPriceList(
      token: string,
      num: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    feedPrice(
      token: string,
      ethAmount: BigNumberish,
      erc20Amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    checkPriceNow(token: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    priceInfoMap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateAndCheckPriceList(
      token: string,
      num: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    checkPriceList(
      token: string,
      num: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feedPrice(
      token: string,
      ethAmount: BigNumberish,
      erc20Amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    checkPriceNow(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
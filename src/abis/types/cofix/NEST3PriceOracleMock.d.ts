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

interface NEST3PriceOracleMockInterface extends ethers.utils.Interface {
  functions: {
    "addressEffect_(address)": FunctionFragment;
    "nestToken_()": FunctionFragment;
    "priceInfoList_(address,uint256)": FunctionFragment;
    "activation()": FunctionFragment;
    "updateAndCheckPriceNow(address)": FunctionFragment;
    "updateAndCheckPriceList(address,uint256)": FunctionFragment;
    "checkPriceList(address,uint256)": FunctionFragment;
    "addPriceToList(address,uint256,uint256,uint256)": FunctionFragment;
    "checkPriceNow(address)": FunctionFragment;
    "getPriceLength(address)": FunctionFragment;
    "checkUseNestPrice(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addressEffect_",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "nestToken_",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "priceInfoList_",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "activation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateAndCheckPriceNow",
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
    functionFragment: "addPriceToList",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkPriceNow",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceLength",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "checkUseNestPrice",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addressEffect_",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nestToken_", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "priceInfoList_",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "activation", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateAndCheckPriceNow",
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
  decodeFunctionResult(
    functionFragment: "addPriceToList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkPriceNow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriceLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkUseNestPrice",
    data: BytesLike
  ): Result;

  events: {};
}

export class NEST3PriceOracleMock extends BaseContract {
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

  interface: NEST3PriceOracleMockInterface;

  functions: {
    addressEffect_(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    nestToken_(overrides?: CallOverrides): Promise<[string]>;

    priceInfoList_(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        ethAmount: BigNumber;
        erc20Amount: BigNumber;
        blockNum: BigNumber;
      }
    >;

    activation(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateAndCheckPriceNow(
      token: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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

    addPriceToList(
      token: string,
      _ethAmount: BigNumberish,
      _erc20Amount: BigNumberish,
      _blockNum: BigNumberish,
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

    getPriceLength(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    checkUseNestPrice(
      target: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  addressEffect_(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  nestToken_(overrides?: CallOverrides): Promise<string>;

  priceInfoList_(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      ethAmount: BigNumber;
      erc20Amount: BigNumber;
      blockNum: BigNumber;
    }
  >;

  activation(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateAndCheckPriceNow(
    token: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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

  addPriceToList(
    token: string,
    _ethAmount: BigNumberish,
    _erc20Amount: BigNumberish,
    _blockNum: BigNumberish,
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

  getPriceLength(token: string, overrides?: CallOverrides): Promise<BigNumber>;

  checkUseNestPrice(
    target: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    addressEffect_(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    nestToken_(overrides?: CallOverrides): Promise<string>;

    priceInfoList_(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        ethAmount: BigNumber;
        erc20Amount: BigNumber;
        blockNum: BigNumber;
      }
    >;

    activation(overrides?: CallOverrides): Promise<void>;

    updateAndCheckPriceNow(
      token: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        ethAmount: BigNumber;
        erc20Amount: BigNumber;
        blockNum: BigNumber;
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

    addPriceToList(
      token: string,
      _ethAmount: BigNumberish,
      _erc20Amount: BigNumberish,
      _blockNum: BigNumberish,
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

    getPriceLength(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkUseNestPrice(
      target: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    addressEffect_(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    nestToken_(overrides?: CallOverrides): Promise<BigNumber>;

    priceInfoList_(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    activation(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateAndCheckPriceNow(
      token: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

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

    addPriceToList(
      token: string,
      _ethAmount: BigNumberish,
      _erc20Amount: BigNumberish,
      _blockNum: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    checkPriceNow(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    getPriceLength(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkUseNestPrice(
      target: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addressEffect_(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nestToken_(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceInfoList_(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    activation(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateAndCheckPriceNow(
      token: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
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

    addPriceToList(
      token: string,
      _ethAmount: BigNumberish,
      _erc20Amount: BigNumberish,
      _blockNum: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    checkPriceNow(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPriceLength(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkUseNestPrice(
      target: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

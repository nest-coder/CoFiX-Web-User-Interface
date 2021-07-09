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

interface TimelockInterface extends ethers.utils.Interface {
  functions: {
    "GRACE_PERIOD()": FunctionFragment;
    "MAXIMUM_DELAY()": FunctionFragment;
    "MINIMUM_DELAY()": FunctionFragment;
    "admin()": FunctionFragment;
    "delay()": FunctionFragment;
    "pendingAdmin()": FunctionFragment;
    "queuedTransactions(bytes32)": FunctionFragment;
    "setDelay(uint256)": FunctionFragment;
    "acceptAdmin()": FunctionFragment;
    "setPendingAdmin(address)": FunctionFragment;
    "queueTransaction(address,uint256,string,bytes,uint256)": FunctionFragment;
    "cancelTransaction(address,uint256,string,bytes,uint256)": FunctionFragment;
    "executeTransaction(address,uint256,string,bytes,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "GRACE_PERIOD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAXIMUM_DELAY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MINIMUM_DELAY",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(functionFragment: "delay", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "queuedTransactions",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setDelay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "acceptAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPendingAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "queueTransaction",
    values: [string, BigNumberish, string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelTransaction",
    values: [string, BigNumberish, string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executeTransaction",
    values: [string, BigNumberish, string, BytesLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "GRACE_PERIOD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAXIMUM_DELAY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MINIMUM_DELAY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "delay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queuedTransactions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setDelay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "acceptAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPendingAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queueTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeTransaction",
    data: BytesLike
  ): Result;

  events: {
    "CancelTransaction(bytes32,address,uint256,string,bytes,uint256)": EventFragment;
    "ExecuteTransaction(bytes32,address,uint256,string,bytes,uint256)": EventFragment;
    "NewAdmin(address)": EventFragment;
    "NewDelay(uint256)": EventFragment;
    "NewPendingAdmin(address)": EventFragment;
    "QueueTransaction(bytes32,address,uint256,string,bytes,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CancelTransaction"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecuteTransaction"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewAdmin"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewDelay"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewPendingAdmin"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "QueueTransaction"): EventFragment;
}

export class Timelock extends BaseContract {
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

  interface: TimelockInterface;

  functions: {
    GRACE_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAXIMUM_DELAY(overrides?: CallOverrides): Promise<[BigNumber]>;

    MINIMUM_DELAY(overrides?: CallOverrides): Promise<[BigNumber]>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    delay(overrides?: CallOverrides): Promise<[BigNumber]>;

    pendingAdmin(overrides?: CallOverrides): Promise<[string]>;

    queuedTransactions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    setDelay(
      delay_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    acceptAdmin(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPendingAdmin(
      pendingAdmin_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    queueTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cancelTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

  MAXIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

  MINIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

  admin(overrides?: CallOverrides): Promise<string>;

  delay(overrides?: CallOverrides): Promise<BigNumber>;

  pendingAdmin(overrides?: CallOverrides): Promise<string>;

  queuedTransactions(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  setDelay(
    delay_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  acceptAdmin(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPendingAdmin(
    pendingAdmin_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  queueTransaction(
    target: string,
    value: BigNumberish,
    signature: string,
    data: BytesLike,
    eta: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cancelTransaction(
    target: string,
    value: BigNumberish,
    signature: string,
    data: BytesLike,
    eta: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeTransaction(
    target: string,
    value: BigNumberish,
    signature: string,
    data: BytesLike,
    eta: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    MAXIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

    MINIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<string>;

    delay(overrides?: CallOverrides): Promise<BigNumber>;

    pendingAdmin(overrides?: CallOverrides): Promise<string>;

    queuedTransactions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setDelay(delay_: BigNumberish, overrides?: CallOverrides): Promise<void>;

    acceptAdmin(overrides?: CallOverrides): Promise<void>;

    setPendingAdmin(
      pendingAdmin_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    queueTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    cancelTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    executeTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    CancelTransaction(
      txHash?: BytesLike | null,
      target?: string | null,
      value?: null,
      signature?: null,
      data?: null,
      eta?: null
    ): TypedEventFilter<
      [string, string, BigNumber, string, string, BigNumber],
      {
        txHash: string;
        target: string;
        value: BigNumber;
        signature: string;
        data: string;
        eta: BigNumber;
      }
    >;

    ExecuteTransaction(
      txHash?: BytesLike | null,
      target?: string | null,
      value?: null,
      signature?: null,
      data?: null,
      eta?: null
    ): TypedEventFilter<
      [string, string, BigNumber, string, string, BigNumber],
      {
        txHash: string;
        target: string;
        value: BigNumber;
        signature: string;
        data: string;
        eta: BigNumber;
      }
    >;

    NewAdmin(
      newAdmin?: string | null
    ): TypedEventFilter<[string], { newAdmin: string }>;

    NewDelay(
      newDelay?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { newDelay: BigNumber }>;

    NewPendingAdmin(
      newPendingAdmin?: string | null
    ): TypedEventFilter<[string], { newPendingAdmin: string }>;

    QueueTransaction(
      txHash?: BytesLike | null,
      target?: string | null,
      value?: null,
      signature?: null,
      data?: null,
      eta?: null
    ): TypedEventFilter<
      [string, string, BigNumber, string, string, BigNumber],
      {
        txHash: string;
        target: string;
        value: BigNumber;
        signature: string;
        data: string;
        eta: BigNumber;
      }
    >;
  };

  estimateGas: {
    GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    MAXIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

    MINIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    delay(overrides?: CallOverrides): Promise<BigNumber>;

    pendingAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    queuedTransactions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setDelay(
      delay_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    acceptAdmin(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPendingAdmin(
      pendingAdmin_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    queueTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cancelTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    GRACE_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAXIMUM_DELAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MINIMUM_DELAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    delay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    queuedTransactions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setDelay(
      delay_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    acceptAdmin(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPendingAdmin(
      pendingAdmin_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    queueTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cancelTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

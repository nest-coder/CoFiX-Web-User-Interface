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

interface ICoFiXRouterInterface extends ethers.utils.Interface {
  functions: {
    "addLiquidity(address,address,uint256,uint256,uint256,address,uint256)": FunctionFragment;
    "addLiquidityAndStake(address,address,uint256,uint256,uint256,address,uint256)": FunctionFragment;
    "getRouterPath(address,address)": FunctionFragment;
    "getTradeReward(address)": FunctionFragment;
    "pairFor(address,address)": FunctionFragment;
    "registerPair(address,address,address)": FunctionFragment;
    "registerRouterPath(address,address,address[])": FunctionFragment;
    "removeLiquidityGetTokenAndETH(address,address,uint256,uint256,address,uint256)": FunctionFragment;
    "swap(address,address,uint256,uint256,address,address,uint256)": FunctionFragment;
    "swapExactETHForTokens(address,uint256,uint256,address,address,uint256)": FunctionFragment;
    "swapExactTokensForETH(address,uint256,uint256,address,address,uint256)": FunctionFragment;
    "swapExactTokensForTokens(address[],uint256,uint256,address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquidityAndStake",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getRouterPath",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTradeReward",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "pairFor",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "registerPair",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "registerRouterPath",
    values: [string, string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityGetTokenAndETH",
    values: [string, string, BigNumberish, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      string,
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactETHForTokens",
    values: [string, BigNumberish, BigNumberish, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTokensForETH",
    values: [string, BigNumberish, BigNumberish, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTokensForTokens",
    values: [string[], BigNumberish, BigNumberish, string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidityAndStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRouterPath",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTradeReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pairFor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerPair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerRouterPath",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityGetTokenAndETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapExactETHForTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTokensForETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTokensForTokens",
    data: BytesLike
  ): Result;

  events: {};
}

export class ICoFiXRouter extends BaseContract {
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

  interface: ICoFiXRouterInterface;

  functions: {
    addLiquidity(
      pool: string,
      token: string,
      amountETH: BigNumberish,
      amountToken: BigNumberish,
      liquidityMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addLiquidityAndStake(
      pool: string,
      token: string,
      amountETH: BigNumberish,
      amountToken: BigNumberish,
      liquidityMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRouterPath(
      src: string,
      dest: string,
      overrides?: CallOverrides
    ): Promise<[string[]] & { path: string[] }>;

    getTradeReward(
      pair: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    pairFor(
      token0: string,
      token1: string,
      overrides?: CallOverrides
    ): Promise<[string] & { pool: string }>;

    registerPair(
      token0: string,
      token1: string,
      pair: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerRouterPath(
      src: string,
      dest: string,
      path: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeLiquidityGetTokenAndETH(
      pool: string,
      token: string,
      liquidity: BigNumberish,
      amountETHMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swap(
      src: string,
      dest: string,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      rewardTo: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapExactETHForTokens(
      token: string,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      rewardTo: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapExactTokensForETH(
      token: string,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      rewardTo: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapExactTokensForTokens(
      path: string[],
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      rewardTo: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addLiquidity(
    pool: string,
    token: string,
    amountETH: BigNumberish,
    amountToken: BigNumberish,
    liquidityMin: BigNumberish,
    to: string,
    deadline: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addLiquidityAndStake(
    pool: string,
    token: string,
    amountETH: BigNumberish,
    amountToken: BigNumberish,
    liquidityMin: BigNumberish,
    to: string,
    deadline: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRouterPath(
    src: string,
    dest: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getTradeReward(pair: string, overrides?: CallOverrides): Promise<BigNumber>;

  pairFor(
    token0: string,
    token1: string,
    overrides?: CallOverrides
  ): Promise<string>;

  registerPair(
    token0: string,
    token1: string,
    pair: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerRouterPath(
    src: string,
    dest: string,
    path: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeLiquidityGetTokenAndETH(
    pool: string,
    token: string,
    liquidity: BigNumberish,
    amountETHMin: BigNumberish,
    to: string,
    deadline: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swap(
    src: string,
    dest: string,
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    to: string,
    rewardTo: string,
    deadline: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapExactETHForTokens(
    token: string,
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    to: string,
    rewardTo: string,
    deadline: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapExactTokensForETH(
    token: string,
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    to: string,
    rewardTo: string,
    deadline: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapExactTokensForTokens(
    path: string[],
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    to: string,
    rewardTo: string,
    deadline: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addLiquidity(
      pool: string,
      token: string,
      amountETH: BigNumberish,
      amountToken: BigNumberish,
      liquidityMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { xtoken: string; liquidity: BigNumber }>;

    addLiquidityAndStake(
      pool: string,
      token: string,
      amountETH: BigNumberish,
      amountToken: BigNumberish,
      liquidityMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { xtoken: string; liquidity: BigNumber }>;

    getRouterPath(
      src: string,
      dest: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getTradeReward(pair: string, overrides?: CallOverrides): Promise<BigNumber>;

    pairFor(
      token0: string,
      token1: string,
      overrides?: CallOverrides
    ): Promise<string>;

    registerPair(
      token0: string,
      token1: string,
      pair: string,
      overrides?: CallOverrides
    ): Promise<void>;

    registerRouterPath(
      src: string,
      dest: string,
      path: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    removeLiquidityGetTokenAndETH(
      pool: string,
      token: string,
      liquidity: BigNumberish,
      amountETHMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amountToken: BigNumber; amountETH: BigNumber }
    >;

    swap(
      src: string,
      dest: string,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      rewardTo: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapExactETHForTokens(
      token: string,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      rewardTo: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapExactTokensForETH(
      token: string,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      rewardTo: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapExactTokensForTokens(
      path: string[],
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      rewardTo: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;
  };

  filters: {};

  estimateGas: {
    addLiquidity(
      pool: string,
      token: string,
      amountETH: BigNumberish,
      amountToken: BigNumberish,
      liquidityMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addLiquidityAndStake(
      pool: string,
      token: string,
      amountETH: BigNumberish,
      amountToken: BigNumberish,
      liquidityMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRouterPath(
      src: string,
      dest: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTradeReward(pair: string, overrides?: CallOverrides): Promise<BigNumber>;

    pairFor(
      token0: string,
      token1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerPair(
      token0: string,
      token1: string,
      pair: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerRouterPath(
      src: string,
      dest: string,
      path: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeLiquidityGetTokenAndETH(
      pool: string,
      token: string,
      liquidity: BigNumberish,
      amountETHMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swap(
      src: string,
      dest: string,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      rewardTo: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapExactETHForTokens(
      token: string,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      rewardTo: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapExactTokensForETH(
      token: string,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      rewardTo: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapExactTokensForTokens(
      path: string[],
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      rewardTo: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addLiquidity(
      pool: string,
      token: string,
      amountETH: BigNumberish,
      amountToken: BigNumberish,
      liquidityMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addLiquidityAndStake(
      pool: string,
      token: string,
      amountETH: BigNumberish,
      amountToken: BigNumberish,
      liquidityMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRouterPath(
      src: string,
      dest: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTradeReward(
      pair: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pairFor(
      token0: string,
      token1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerPair(
      token0: string,
      token1: string,
      pair: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerRouterPath(
      src: string,
      dest: string,
      path: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeLiquidityGetTokenAndETH(
      pool: string,
      token: string,
      liquidity: BigNumberish,
      amountETHMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swap(
      src: string,
      dest: string,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      rewardTo: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapExactETHForTokens(
      token: string,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      rewardTo: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapExactTokensForETH(
      token: string,
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      rewardTo: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapExactTokensForTokens(
      path: string[],
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      rewardTo: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

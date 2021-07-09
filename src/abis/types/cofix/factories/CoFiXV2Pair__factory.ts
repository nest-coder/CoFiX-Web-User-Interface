/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { CoFiXV2Pair, CoFiXV2PairInterface } from "../CoFiXV2Pair";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "outToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "outAmount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "outToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Swap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve0",
        type: "uint112",
      },
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve1",
        type: "uint112",
      },
    ],
    name: "Sync",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "K_BASE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINIMUM_LIQUIDITY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NAVPS_BASE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "THETA_BASE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initToken0Amount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initToken1Amount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nameForDomain",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token0",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token1",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token1",
        type: "address",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_initToken0Amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_initToken1Amount",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getInitialAssetRatio",
    outputs: [
      {
        internalType: "uint256",
        name: "_initToken0Amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_initToken1Amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getReserves",
    outputs: [
      {
        internalType: "uint112",
        name: "_reserve0",
        type: "uint112",
      },
      {
        internalType: "uint112",
        name: "_reserve1",
        type: "uint112",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountETH",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountToken",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "oracleFeeChange",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenTo",
        type: "address",
      },
      {
        internalType: "address",
        name: "ethTo",
        type: "address",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "uint256",
        name: "amountTokenOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountEthOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "oracleFeeChange",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "outToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "swapWithExact",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "oracleFeeChange",
        type: "uint256",
      },
      {
        internalType: "uint256[5]",
        name: "tradeInfo",
        type: "uint256[5]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "skim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sync",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "balance0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "balance1",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "ethAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "erc20Amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "blockNum",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "K",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "theta",
            type: "uint256",
          },
        ],
        internalType: "struct ICoFiXV2Pair.OraclePrice",
        name: "_op",
        type: "tuple",
      },
    ],
    name: "calcNAVPerShareForMint",
    outputs: [
      {
        internalType: "uint256",
        name: "navps",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "balance0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "balance1",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "ethAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "erc20Amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "blockNum",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "K",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "theta",
            type: "uint256",
          },
        ],
        internalType: "struct ICoFiXV2Pair.OraclePrice",
        name: "_op",
        type: "tuple",
      },
    ],
    name: "calcNAVPerShareForBurn",
    outputs: [
      {
        internalType: "uint256",
        name: "navps",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "balance0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "balance1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ethAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "erc20Amount",
        type: "uint256",
      },
    ],
    name: "calcNAVPerShare",
    outputs: [
      {
        internalType: "uint256",
        name: "navps",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "navps",
        type: "uint256",
      },
    ],
    name: "calcLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "ethAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "erc20Amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "blockNum",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "K",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "theta",
            type: "uint256",
          },
        ],
        internalType: "struct ICoFiXV2Pair.OraclePrice",
        name: "_op",
        type: "tuple",
      },
    ],
    name: "getNAVPerShareForMint",
    outputs: [
      {
        internalType: "uint256",
        name: "navps",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "ethAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "erc20Amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "blockNum",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "K",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "theta",
            type: "uint256",
          },
        ],
        internalType: "struct ICoFiXV2Pair.OraclePrice",
        name: "_op",
        type: "tuple",
      },
    ],
    name: "getNAVPerShareForBurn",
    outputs: [
      {
        internalType: "uint256",
        name: "navps",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ethAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "erc20Amount",
        type: "uint256",
      },
    ],
    name: "getNAVPerShare",
    outputs: [
      {
        internalType: "uint256",
        name: "navps",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "ethAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "erc20Amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "blockNum",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "K",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "theta",
            type: "uint256",
          },
        ],
        internalType: "struct ICoFiXV2Pair.OraclePrice",
        name: "_op",
        type: "tuple",
      },
    ],
    name: "getLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "ethAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "erc20Amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "blockNum",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "K",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "theta",
            type: "uint256",
          },
        ],
        internalType: "struct ICoFiXV2Pair.OraclePrice",
        name: "_op",
        type: "tuple",
      },
    ],
    name: "calcOutTokenAndETHForBurn",
    outputs: [
      {
        internalType: "uint256",
        name: "amountTokenOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountEthOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "ethAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "erc20Amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "blockNum",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "K",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "theta",
            type: "uint256",
          },
        ],
        internalType: "struct ICoFiXV2Pair.OraclePrice",
        name: "_op",
        type: "tuple",
      },
    ],
    name: "calcOutToken0",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "ethAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "erc20Amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "blockNum",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "K",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "theta",
            type: "uint256",
          },
        ],
        internalType: "struct ICoFiXV2Pair.OraclePrice",
        name: "_op",
        type: "tuple",
      },
    ],
    name: "calcOutToken1",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "ethAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "erc20Amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "blockNum",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "K",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "theta",
            type: "uint256",
          },
        ],
        internalType: "struct ICoFiXV2Pair.OraclePrice",
        name: "_op",
        type: "tuple",
      },
    ],
    name: "calcInNeededToken0",
    outputs: [
      {
        internalType: "uint256",
        name: "amountInNeeded",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "ethAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "erc20Amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "blockNum",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "K",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "theta",
            type: "uint256",
          },
        ],
        internalType: "struct ICoFiXV2Pair.OraclePrice",
        name: "_op",
        type: "tuple",
      },
    ],
    name: "calcInNeededToken1",
    outputs: [
      {
        internalType: "uint256",
        name: "amountInNeeded",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

export class CoFiXV2Pair__factory {
  static readonly abi = _abi;
  static createInterface(): CoFiXV2PairInterface {
    return new utils.Interface(_abi) as CoFiXV2PairInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CoFiXV2Pair {
    return new Contract(address, _abi, signerOrProvider) as CoFiXV2Pair;
  }
}

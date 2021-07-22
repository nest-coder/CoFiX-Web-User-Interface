/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CoFiXRouter, CoFiXRouterInterface } from "../CoFiXRouter";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "_governance",
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
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
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
      {
        internalType: "uint256",
        name: "liquidityMin",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "addLiquidity",
    outputs: [
      {
        internalType: "address",
        name: "xtoken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "liquidity",
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
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
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
      {
        internalType: "uint256",
        name: "liquidityMin",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "addLiquidityAndStake",
    outputs: [
      {
        internalType: "address",
        name: "xtoken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "liquidity",
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
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
    ],
    name: "getRouterPath",
    outputs: [
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "xtoken",
        type: "address",
      },
    ],
    name: "getTradeReward",
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
        name: "governance",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
    ],
    name: "pairFor",
    outputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "registerPair",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
    ],
    name: "registerRouterPath",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountETHMin",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "removeLiquidityGetTokenAndETH",
    outputs: [
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
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "address",
        name: "rewardTo",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapExactTokensForTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
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
        name: "newGovernance",
        type: "address",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612999806100206000396000f3fe6080604052600436106100d65760003560e01c806397bcc8571161007f578063ba9f20b811610059578063ba9f20b814610268578063bfbd02971461027b578063c4d66de81461029b578063fc4468ca146102bb57600080fd5b806397bcc857146101fb5780639c5afa1614610228578063ad68ebf71461024857600080fd5b80632f9badd0116100b05780632f9badd01461017c5780633da83095146101bb57806396ed28f9146101db57600080fd5b80631c1b8772146100e25780631c2f3e3d146101045780632cb909fc1461015b57600080fd5b366100dd57005b600080fd5b3480156100ee57600080fd5b506101026100fd3660046123c9565b6102e3565b005b34801561011057600080fd5b506002546101319073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61016e6101693660046126a6565b6103b2565b604051908152602001610152565b61018f61018a3660046125da565b61072f565b6040805173ffffffffffffffffffffffffffffffffffffffff9093168352602083019190915201610152565b3480156101c757600080fd5b506101026101d636600461250e565b6109be565b3480156101e757600080fd5b506101316101f6366004612403565b610c7f565b34801561020757600080fd5b5061021b610216366004612403565b610c92565b60405161015291906127ae565b34801561023457600080fd5b5061016e6102433660046123c9565b61101e565b34801561025457600080fd5b5061010261026336600461264c565b611054565b61018f6102763660046125da565b6112b9565b34801561028757600080fd5b5061010261029636600461243c565b6114b0565b3480156102a757600080fd5b506101026102b63660046123c9565b61161e565b6102ce6102c9366004612573565b6116e5565b60408051928352602083019190915201610152565b6102ec8161195e565b8073ffffffffffffffffffffffffffffffffffffffff1663593ab5e16040518163ffffffff1660e01b815260040160206040518083038186803b15801561033257600080fd5b505afa158015610346573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061036a91906123e6565b600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905550565b60008180421115610424576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f436f466958526f757465723a204558504952454400000000000000000000000060448201526064015b60405180910390fd5b6002881415610627576000898960008181106104425761044261290f565b905060200201602081019061045791906123c9565b905060008a8a600181811061046e5761046e61290f565b905060200201602081019061048391906123c9565b905060006104918383611bb1565b905073ffffffffffffffffffffffffffffffffffffffff8316156104bb576104bb8333838d611bef565b6040517f44c133e200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84811660048301528381166024830152604482018c9052898116606483018190526084830152600091908316906344c133e290349060a40160408051808303818588803b15801561054657600080fd5b505af115801561055a573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061057f919061274f565b909650905089861015610614576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f436f466958526f757465723a20676f74206c65737320657468207468616e206560448201527f7870656374656400000000000000000000000000000000000000000000000000606482015260840161041b565b61061e8189611d8d565b50505050610723565b60006106358a8a8a89611e6c565b9093509050868310156106ca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f436f466958526f757465723a20676f74206c657373207468616e20657870656360448201527f7465640000000000000000000000000000000000000000000000000000000000606482015260840161041b565b4780156107165760405173ffffffffffffffffffffffffffffffffffffffff88169082156108fc029083906000818181858888f19350505050158015610714573d6000803e3d6000fd5b505b6107208287611d8d565b50505b50979650505050505050565b600080828042111561079d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f436f466958526f757465723a2045585049524544000000000000000000000000604482015260640161041b565b73ffffffffffffffffffffffffffffffffffffffff8916156107c5576107c589338c8a611bef565b6003546040517ffa28d69200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8b8116600483015291821660248201819052604482018b9052606482018a90528783166084830152918c169063fa28d69290349060a40160408051808303818588803b15801561085257600080fd5b505af1158015610866573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061088b9190612678565b909450925086831015610920576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f436f466958526f757465723a206c657373206c6971756964697479207468616e60448201527f2065787065637465640000000000000000000000000000000000000000000000606482015260840161041b565b6040517f348964bd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff858116600483015287811660248301526044820185905282169063348964bd90606401600060405180830381600087803b15801561099857600080fd5b505af11580156109ac573d6000803e3d6000fd5b50505050505097509795505050505050565b6002546040517f91e1472b0000000000000000000000000000000000000000000000000000000081523360048201526000602482015273ffffffffffffffffffffffffffffffffffffffff909116906391e1472b9060440160206040518083038186803b158015610a2e57600080fd5b505afa158015610a42573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a66919061272d565b610acc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f436f4669583a21676f7600000000000000000000000000000000000000000000604482015260640161041b565b81816000818110610adf57610adf61290f565b9050602002016020810190610af491906123c9565b73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614610b88576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f436f466958526f757465723a20666972737420746f6b656e206572726f720000604482015260640161041b565b8181610b9560018261285b565b818110610ba457610ba461290f565b9050602002016020810190610bb991906123c9565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610c4d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f436f466958526f757465723a206c61737420746f6b656e206572726f72000000604482015260640161041b565b818160056000610c5d88886120c5565b81526020019081526020016000209190610c789291906122e7565b5050505050565b6000610c8b8383611bb1565b9392505050565b606060056000610ca285856120c5565b8152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015610d1157602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610ce6575b5050835193945050508115159050610d85576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f436f466958526f757465723a2070617468206e6f742065786973740000000000604482015260640161041b565b81610d8f82612872565b91508181518110610da257610da261290f565b602002602001015173ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148015610e29575081600081518110610df257610df261290f565b602002602001015173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b15610f185760005b81811015610f12576000838281518110610e4d57610e4d61290f565b60200260200101519050838381518110610e6957610e6961290f565b6020026020010151848380610e7d906128a7565b945081518110610e8f57610e8f61290f565b73ffffffffffffffffffffffffffffffffffffffff90921660209283029190910190910152808484610ec081612872565b955081518110610ed257610ed261290f565b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505050610e31565b50611017565b81600081518110610f2b57610f2b61290f565b602002602001015173ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148015610fb15750818181518110610f7a57610f7a61290f565b602002602001015173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b611017576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f436f466958526f757465723a2070617468206572726f72000000000000000000604482015260640161041b565b5092915050565b60015460009073ffffffffffffffffffffffffffffffffffffffff8381169116141561104c57505060065490565b506000919050565b6002546040517f91e1472b0000000000000000000000000000000000000000000000000000000081523360048201526000602482015273ffffffffffffffffffffffffffffffffffffffff909116906391e1472b9060440160206040518083038186803b1580156110c457600080fd5b505afa1580156110d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110fc919061272d565b611162576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f436f4669583a21676f7600000000000000000000000000000000000000000000604482015260640161041b565b600254604080517f96776492000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff16916396776492916004808301926020929190829003018186803b1580156111cd57600080fd5b505afa1580156111e1573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061120591906123e6565b905073ffffffffffffffffffffffffffffffffffffffff83166112a9576040517fdaa78c0f0000000000000000000000000000000000000000000000000000000081526000600482015273ffffffffffffffffffffffffffffffffffffffff82169063daa78c0f9084906024016000604051808303818588803b15801561128b57600080fd5b505af115801561129f573d6000803e3d6000fd5b5050505050505050565b6112b4838284612130565b505050565b6000808280421115611327576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f436f466958526f757465723a2045585049524544000000000000000000000000604482015260640161041b565b73ffffffffffffffffffffffffffffffffffffffff89161561134f5761134f89338c8a611bef565b6040517ffa28d69200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a8116600483015286811660248301819052604483018b9052606483018a905260848301528b169063fa28d69290349060a40160408051808303818588803b1580156113d557600080fd5b505af11580156113e9573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061140e9190612678565b9093509150858210156114a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f436f466958526f757465723a206c657373206c6971756964697479207468616e60448201527f2065787065637465640000000000000000000000000000000000000000000000606482015260840161041b565b5097509795505050505050565b6002546040517f91e1472b0000000000000000000000000000000000000000000000000000000081523360048201526000602482015273ffffffffffffffffffffffffffffffffffffffff909116906391e1472b9060440160206040518083038186803b15801561152057600080fd5b505afa158015611534573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611558919061272d565b6115be576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f436f4669583a21676f7600000000000000000000000000000000000000000000604482015260640161041b565b80600460006115cd86866120c5565b815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b60025473ffffffffffffffffffffffffffffffffffffffff161561169e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f436f4669583a21696e697469616c697a65000000000000000000000000000000604482015260640161041b565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000808280421115611753576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f436f466958526f757465723a2045585049524544000000000000000000000000604482015260640161041b565b6040517f4cb2b6b100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8981166004830152600091908b1690634cb2b6b19060240160206040518083038186803b1580156117be57600080fd5b505afa1580156117d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117f691906123e6565b905061180481338c8b611bef565b6040517ffa291e5300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a8116600483015287811660248301819052604483018b905260648301528b169063fa291e5390349060840160408051808303818588803b15801561188357600080fd5b505af1158015611897573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906118bc919061274f565b909450925086841015611951576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f436f466958526f757465723a206c65737320657468207468616e20657870656360448201527f7465640000000000000000000000000000000000000000000000000000000000606482015260840161041b565b5050965096945050505050565b60025473ffffffffffffffffffffffffffffffffffffffff1633811480611a2457506040517f91e1472b0000000000000000000000000000000000000000000000000000000081523360048201526000602482015273ffffffffffffffffffffffffffffffffffffffff8216906391e1472b9060440160206040518083038186803b1580156119ec57600080fd5b505afa158015611a00573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a24919061272d565b611a8a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f436f4669583a21676f7600000000000000000000000000000000000000000000604482015260640161041b565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8416908117909155604080517f746b56f9000000000000000000000000000000000000000000000000000000008152905163746b56f99160048082019260c092909190829003018186803b158015611b1c57600080fd5b505afa158015611b30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b549190612487565b50506001805473ffffffffffffffffffffffffffffffffffffffff9485167fffffffffffffffffffffffff000000000000000000000000000000000000000091821617909155600080549590941694169390931790915550505050565b600060046000611bc185856120c5565b815260208101919091526040016000205473ffffffffffffffffffffffffffffffffffffffff169392505050565b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd000000000000000000000000000000000000000000000000000000001790529151600092839290881691611c8e9190612773565b6000604051808303816000865af19150503d8060008114611ccb576040519150601f19603f3d011682016040523d82523d6000602084013e611cd0565b606091505b5091509150818015611cfa575080511580611cfa575080806020019051810190611cfa919061272d565b611d85576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f5472616e7366657248656c7065723a205452414e534645525f46524f4d5f464160448201527f494c454400000000000000000000000000000000000000000000000000000000606482015260840161041b565b505050505050565b8115611e68576000611da0600a84612820565b60005490915073ffffffffffffffffffffffffffffffffffffffff166340c10f1983611dcc848761285b565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff90921660048301526024820152604401600060405180830381600087803b158015611e3757600080fd5b505af1158015611e4b573d6000803e3d6000fd5b505050508060066000828254611e619190612808565b9091555050505b5050565b6000808086868281611e8057611e8061290f565b9050602002016020810190611e9591906123c9565b9050600087876001818110611eac57611eac61290f565b9050602002016020810190611ec191906123c9565b90506000611ecf8383611bb1565b905073ffffffffffffffffffffffffffffffffffffffff831615611ef957611ef98387838a611bef565b600060015b8773ffffffffffffffffffffffffffffffffffffffff8b611f1e846128a7565b9350831015611f5d578c8c84818110611f3957611f3961290f565b9050602002016020810190611f4e91906123c9565b9050611f5a8682611bb1565b91505b8473ffffffffffffffffffffffffffffffffffffffff166344c133e24789898f600073ffffffffffffffffffffffffffffffffffffffff168c73ffffffffffffffffffffffffffffffffffffffff1614611fb75787611fb9565b305b60405160e087901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff948516600482015292841660248401526044830191909152909116606482015230608482015260a40160408051808303818588803b15801561203b57600080fd5b505af115801561204f573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190612074919061274f565b909b5093506120838489612808565b975073ffffffffffffffffffffffffffffffffffffffff80821614156120aa5750506120b4565b9495509250611efe565b508795505050505094509492505050565b60006120d18383612299565b6040517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606084811b8216602084015283901b166034820152919450925060480160405160208183030381529060405280519060200120905092915050565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905291516000928392908716916121c79190612773565b6000604051808303816000865af19150503d8060008114612204576040519150601f19603f3d011682016040523d82523d6000602084013e612209565b606091505b5091509150818015612233575080511580612233575080806020019051810190612233919061272d565b610c78576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5472616e7366657248656c7065723a205452414e534645525f4641494c454400604482015260640161041b565b6000808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1610156122da5750829050816122e0565b50819050825b9250929050565b82805482825590600052602060002090810192821561235f579160200282015b8281111561235f5781547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff843516178255602090920191600190910190612307565b5061236b92915061236f565b5090565b5b8082111561236b5760008155600101612370565b60008083601f84011261239657600080fd5b50813567ffffffffffffffff8111156123ae57600080fd5b6020830191508360208260051b85010111156122e057600080fd5b6000602082840312156123db57600080fd5b8135610c8b8161293e565b6000602082840312156123f857600080fd5b8151610c8b8161293e565b6000806040838503121561241657600080fd5b82356124218161293e565b915060208301356124318161293e565b809150509250929050565b60008060006060848603121561245157600080fd5b833561245c8161293e565b9250602084013561246c8161293e565b9150604084013561247c8161293e565b809150509250925092565b60008060008060008060c087890312156124a057600080fd5b86516124ab8161293e565b60208801519096506124bc8161293e565b60408801519095506124cd8161293e565b60608801519094506124de8161293e565b60808801519093506124ef8161293e565b60a08801519092506125008161293e565b809150509295509295509295565b6000806000806060858703121561252457600080fd5b843561252f8161293e565b9350602085013561253f8161293e565b9250604085013567ffffffffffffffff81111561255b57600080fd5b61256787828801612384565b95989497509550505050565b60008060008060008060c0878903121561258c57600080fd5b86356125978161293e565b955060208701356125a78161293e565b9450604087013593506060870135925060808701356125c58161293e565b8092505060a087013590509295509295509295565b600080600080600080600060e0888a0312156125f557600080fd5b87356126008161293e565b965060208801356126108161293e565b955060408801359450606088013593506080880135925060a08801356126358161293e565b8092505060c0880135905092959891949750929550565b6000806040838503121561265f57600080fd5b823561266a8161293e565b946020939093013593505050565b6000806040838503121561268b57600080fd5b82516126968161293e565b6020939093015192949293505050565b600080600080600080600060c0888a0312156126c157600080fd5b873567ffffffffffffffff8111156126d857600080fd5b6126e48a828b01612384565b909850965050602088013594506040880135935060608801356127068161293e565b925060808801356127168161293e565b8092505060a0880135905092959891949750929550565b60006020828403121561273f57600080fd5b81518015158114610c8b57600080fd5b6000806040838503121561276257600080fd5b505080516020909101519092909150565b6000825160005b81811015612794576020818601810151858301520161277a565b818111156127a3576000828501525b509190910192915050565b6020808252825182820181905260009190848201906040850190845b818110156127fc57835173ffffffffffffffffffffffffffffffffffffffff16835292840192918401916001016127ca565b50909695505050505050565b6000821982111561281b5761281b6128e0565b500190565b600082612856577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b60008282101561286d5761286d6128e0565b500390565b600081612881576128816128e0565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156128d9576128d96128e0565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff8116811461296057600080fd5b5056fea2646970667358221220a62b6f1a52c644cc19364d03c76baea2d35e5a085420b84829a0a45bb93d0b4a64736f6c63430008060033";

export class CoFiXRouter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CoFiXRouter> {
    return super.deploy(overrides || {}) as Promise<CoFiXRouter>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CoFiXRouter {
    return super.attach(address) as CoFiXRouter;
  }
  connect(signer: Signer): CoFiXRouter__factory {
    return super.connect(signer) as CoFiXRouter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CoFiXRouterInterface {
    return new utils.Interface(_abi) as CoFiXRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CoFiXRouter {
    return new Contract(address, _abi, signerOrProvider) as CoFiXRouter;
  }
}

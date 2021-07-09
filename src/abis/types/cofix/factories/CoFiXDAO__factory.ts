/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CoFiXDAO, CoFiXDAOInterface } from "../CoFiXDAO";

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
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "flag",
        type: "uint256",
      },
    ],
    name: "ApplicationChanged",
    type: "event",
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
        name: "pair",
        type: "address",
      },
    ],
    name: "addETHReward",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "checkApplication",
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
    name: "getConfig",
    outputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "uint16",
            name: "cofiPerBlock",
            type: "uint16",
          },
          {
            internalType: "uint32",
            name: "cofiLimit",
            type: "uint32",
          },
          {
            internalType: "uint16",
            name: "priceDeviationLimit",
            type: "uint16",
          },
        ],
        internalType: "struct ICoFiXDAO.Config",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getTokenExchange",
    outputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "exchange",
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
        name: "pair",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenAddress",
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
    name: "pay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "quotaOf",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "payback",
        type: "address",
      },
    ],
    name: "redeem",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "payback",
        type: "address",
      },
    ],
    name: "redeemToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "flag",
        type: "uint256",
      },
    ],
    name: "setApplication",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "uint16",
            name: "cofiPerBlock",
            type: "uint16",
          },
          {
            internalType: "uint32",
            name: "cofiLimit",
            type: "uint32",
          },
          {
            internalType: "uint16",
            name: "priceDeviationLimit",
            type: "uint16",
          },
        ],
        internalType: "struct ICoFiXDAO.Config",
        name: "config",
        type: "tuple",
      },
    ],
    name: "setConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "exchange",
        type: "uint256",
      },
    ],
    name: "setTokenExchange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pair",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenAddress",
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
    name: "settle",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pair",
        type: "address",
      },
    ],
    name: "totalETHRewards",
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
        name: "newGovernance",
        type: "address",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612213806100206000396000f3fe60806040526004361061010e5760003560e01c80636314ed68116100a5578063ad68ebf711610074578063c4d66de811610059578063c4d66de81461043d578063d85c40791461045d578063daa78c0f1461047d57600080fd5b8063ad68ebf714610356578063c3f909d41461037657600080fd5b80636314ed6814610253578063776dfe99146102735780637bde82f214610293578063abc2ebee146102a657600080fd5b80633f83e9c8116100e15780633f83e9c8146101bf5780634a0ba49d146101e2578063543ed0421461020257806360291d6f1461021057600080fd5b80631a7bf701146101135780631c1b8772146101355780631c2f3e3d1461015557806333d1182c146101ac575b600080fd5b34801561011f57600080fd5b5061013361012e366004611f84565b610490565b005b34801561014157600080fd5b50610133610150366004611d9a565b610660565b34801561016157600080fd5b506002546101829073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6101336101ba366004611f20565b61072f565b3480156101cb57600080fd5b506101d4610ccb565b6040519081526020016101a3565b3480156101ee57600080fd5b506101336101fd366004611e62565b610d3e565b6101336101fd366004611e62565b34801561021c57600080fd5b506101d461022b366004611d9a565b73ffffffffffffffffffffffffffffffffffffffff1660009081526006602052604090205490565b34801561025f57600080fd5b5061013361026e366004611eb3565b610e4c565b34801561027f57600080fd5b506101d461028e366004611d9a565b610f59565b6101336102a1366004612030565b610f82565b3480156102b257600080fd5b5061032a6102c1366004611d9a565b73ffffffffffffffffffffffffffffffffffffffff908116600090815260076020908152604091829020825180840190935254928316808352740100000000000000000000000000000000000000009093046bffffffffffffffffffffffff1691018190529091565b6040805173ffffffffffffffffffffffffffffffffffffffff90931683526020830191909152016101a3565b34801561036257600080fd5b50610133610371366004611ef4565b6112d8565b34801561038257600080fd5b506103f7604080516080810182526000808252602082018190529181018290526060810191909152506040805160808101825260035460ff8116825261ffff61010082048116602084015263ffffffff6301000000830416938301939093526701000000000000009004909116606082015290565b6040516101a39190815160ff16815260208083015161ffff9081169183019190915260408084015163ffffffff1690830152606092830151169181019190915260800190565b34801561044957600080fd5b50610133610458366004611d9a565b61153d565b34801561046957600080fd5b50610133610478366004611ef4565b611604565b61013361048b366004611d9a565b611777565b6002546040517f91e1472b0000000000000000000000000000000000000000000000000000000081523360048201526000602482015273ffffffffffffffffffffffffffffffffffffffff909116906391e1472b9060440160206040518083038186803b15801561050057600080fd5b505afa158015610514573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105389190611f62565b6105a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f436f4669583a21676f760000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b8051600380546020840151604085015160609095015160ff9094167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009092169190911761010061ffff92831602177fffffffffffffffffffffffffffffffffffffffffffffff000000000000ffffff16630100000063ffffffff909516949094027fffffffffffffffffffffffffffffffffffffffffffffff0000ffffffffffffff16939093176701000000000000009390921692909202179055565b6106698161179a565b8073ffffffffffffffffffffffffffffffffffffffff16630a6548536040518163ffffffff1660e01b815260040160206040518083038186803b1580156106af57600080fd5b505afa1580156106c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e79190611dbe565b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905550565b6040805160808101825260035460ff811680835261ffff61010083048116602085015263ffffffff63010000008404169484019490945267010000000000000090910490921660608201529060011461080a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f436f46695844414f3a205265707572636861736520737461747573206572726f60448201527f7200000000000000000000000000000000000000000000000000000000000000606482015260840161059a565b73ffffffffffffffffffffffffffffffffffffffff848116600090815260076020908152604091829020825180840190935254928316808352740100000000000000000000000000000000000000009093046bffffffffffffffffffffffff1690820152906108d5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f436f46695844414f3a20546f6b656e206e6f7420616c6c6f7765640000000000604482015260640161059a565b60048054600080546040517f3c72db4c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216948101949094528681166024850152909283928392839283929190911690633c72db4c903460011c9060440160c0604051808303818588803b15801561096057600080fd5b505af1158015610974573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906109999190612060565b50600480548c516040517f3c72db4c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216938101939093528f81166024840152959a50939850919650945060009350839283928392911690633c72db4c903460011c9060440160c0604051808303818588803b158015610a2c57600080fd5b505af1158015610a40573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610a659190612060565b509450945094509450508787670de0b6b3a7640000610a849190612138565b610a8e91906120fd565b965085610aa386670de0b6b3a7640000612138565b610aad91906120fd565b945083610ac284670de0b6b3a7640000612138565b610acc91906120fd565b925081610ae182670de0b6b3a7640000612138565b610aeb91906120fd565b60208b01519091506bffffffffffffffffffffffff16610b1384670de0b6b3a7640000612138565b610b1d91906120fd565b60208b01519093506bffffffffffffffffffffffff16610b4582670de0b6b3a7640000612138565b610b4f91906120fd565b90508a6060015161ffff16612710610b6791906120e5565b610b718487612138565b610b7b9190612138565b610b858289612138565b610b9190612710612138565b11158015610bdc575060608b0151610baf9061ffff16612710612175565b610bb98487612138565b610bc39190612138565b610bcd8289612138565b610bd990612710612138565b10155b610c42576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f436f46695844414f3a2170726963650000000000000000000000000000000000604482015260640161059a565b86610c4d848f612138565b610c5791906120fd565b9850600080610c688d6005546119ed565b9092509050610c778f83612175565b610c819082612175565b6005555050600054610cb8985073ffffffffffffffffffffffffffffffffffffffff1696503395503094508c9350611a6992505050565b610cc3863383611bff565b505050505050565b6040805160808101825260035460ff811680835261ffff61010083048116602085015263ffffffff6301000000840416948401949094526701000000000000009091049092166060820152600091600114610d2857600091505090565b6000610d36826005546119ed565b509392505050565b73ffffffffffffffffffffffffffffffffffffffff8416610d5e57600080fd5b33600090815260066020526040902054600114610dd7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f436f46695844414f3a2161707000000000000000000000000000000000000000604482015260640161059a565b73ffffffffffffffffffffffffffffffffffffffff8316610e3b5760405173ffffffffffffffffffffffffffffffffffffffff83169082156108fc029083906000818181858888f19350505050158015610e35573d6000803e3d6000fd5b50610e46565b610e46838383611bff565b50505050565b6bffffffffffffffffffffffff811115610ee8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f436f46695844414f3a2065786368616e67652076616c7565206f766572666c6f60448201527f7700000000000000000000000000000000000000000000000000000000000000606482015260840161059a565b60408051808201825273ffffffffffffffffffffffffffffffffffffffff93841681526bffffffffffffffffffffffff928316602080830191825295851660009081526007909652919094209351905190911674010000000000000000000000000000000000000000029116179055565b600073ffffffffffffffffffffffffffffffffffffffff8216610f7b57600080fd5b5047919050565b6040805160808101825260035460ff811680835261ffff61010083048116602085015263ffffffff63010000008404169484019490945267010000000000000090910490921660608201529060011461105d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f436f46695844414f3a205265707572636861736520737461747573206572726f60448201527f7200000000000000000000000000000000000000000000000000000000000000606482015260840161059a565b60048054600080546040517f3c72db4c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9182169481019490945285811660248501529092839283928392911690633c72db4c90349060440160c0604051808303818588803b1580156110e157600080fd5b505af11580156110f5573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061111a9190612060565b509450945094509450508383670de0b6b3a76400006111399190612138565b61114391906120fd565b92508161115882670de0b6b3a7640000612138565b61116291906120fd565b9050846060015161ffff1661271061117a91906120e5565b6111849082612138565b61119084612710612138565b111580156111c7575060608501516111ae9061ffff16612710612175565b6111b89082612138565b6111c484612710612138565b10155b61122d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f436f46695844414f3a2170726963650000000000000000000000000000000000604482015260640161059a565b60008361124289670de0b6b3a7640000612138565b61124c91906120fd565b905060008061125d886005546119ed565b909250905061126c8a83612175565b6112769082612175565b60055560005461129e9073ffffffffffffffffffffffffffffffffffffffff1633308d611a69565b604051339084156108fc029085906000818181858888f193505050501580156112cb573d6000803e3d6000fd5b5050505050505050505050565b6002546040517f91e1472b0000000000000000000000000000000000000000000000000000000081523360048201526000602482015273ffffffffffffffffffffffffffffffffffffffff909116906391e1472b9060440160206040518083038186803b15801561134857600080fd5b505afa15801561135c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113809190611f62565b6113e6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f436f4669583a21676f7600000000000000000000000000000000000000000000604482015260640161059a565b600254604080517f96776492000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff16916396776492916004808301926020929190829003018186803b15801561145157600080fd5b505afa158015611465573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114899190611dbe565b905073ffffffffffffffffffffffffffffffffffffffff831661152d576040517fdaa78c0f0000000000000000000000000000000000000000000000000000000081526000600482015273ffffffffffffffffffffffffffffffffffffffff82169063daa78c0f9084906024016000604051808303818588803b15801561150f57600080fd5b505af1158015611523573d6000803e3d6000fd5b5050505050505050565b611538838284611bff565b505050565b60025473ffffffffffffffffffffffffffffffffffffffff16156115bd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f436f4669583a21696e697469616c697a65000000000000000000000000000000604482015260640161059a565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6002546040517f91e1472b0000000000000000000000000000000000000000000000000000000081523360048201526000602482015273ffffffffffffffffffffffffffffffffffffffff909116906391e1472b9060440160206040518083038186803b15801561167457600080fd5b505afa158015611688573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116ac9190611f62565b611712576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f436f4669583a21676f7600000000000000000000000000000000000000000000604482015260640161059a565b73ffffffffffffffffffffffffffffffffffffffff8216600081815260066020908152604091829020849055815192835282018390527f756de02efc109a2c47289727af65d5a4c9830601b57f730abb8d93d6a1aa0547910160405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff811661179757600080fd5b50565b60025473ffffffffffffffffffffffffffffffffffffffff163381148061186057506040517f91e1472b0000000000000000000000000000000000000000000000000000000081523360048201526000602482015273ffffffffffffffffffffffffffffffffffffffff8216906391e1472b9060440160206040518083038186803b15801561182857600080fd5b505afa15801561183c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118609190611f62565b6118c6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f436f4669583a21676f7600000000000000000000000000000000000000000000604482015260640161059a565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8416908117909155604080517f746b56f9000000000000000000000000000000000000000000000000000000008152905163746b56f99160048082019260c092909190829003018186803b15801561195857600080fd5b505afa15801561196c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119909190611ddb565b50506001805473ffffffffffffffffffffffffffffffffffffffff9485167fffffffffffffffffffffffff000000000000000000000000000000000000000091821617909155600080549590941694169390931790915550505050565b6000806000846040015163ffffffff169050846020015161ffff1643611a139190612138565b611a2590670de0b6b3a7640000612138565b9150611a318483612175565b9250611a4581670de0b6b3a7640000612138565b831115611a6157611a5e81670de0b6b3a7640000612138565b92505b509250929050565b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd000000000000000000000000000000000000000000000000000000001790529151600092839290881691611b0891906120aa565b6000604051808303816000865af19150503d8060008114611b45576040519150601f19603f3d011682016040523d82523d6000602084013e611b4a565b606091505b5091509150818015611b74575080511580611b74575080806020019051810190611b749190611f62565b610cc3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f5472616e7366657248656c7065723a205452414e534645525f46524f4d5f464160448201527f494c454400000000000000000000000000000000000000000000000000000000606482015260840161059a565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790529151600092839290871691611c9691906120aa565b6000604051808303816000865af19150503d8060008114611cd3576040519150601f19603f3d011682016040523d82523d6000602084013e611cd8565b606091505b5091509150818015611d02575080511580611d02575080806020019051810190611d029190611f62565b611d68576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5472616e7366657248656c7065723a205452414e534645525f4641494c454400604482015260640161059a565b5050505050565b803561ffff81168114611d8157600080fd5b919050565b803563ffffffff81168114611d8157600080fd5b600060208284031215611dac57600080fd5b8135611db7816121bb565b9392505050565b600060208284031215611dd057600080fd5b8151611db7816121bb565b60008060008060008060c08789031215611df457600080fd5b8651611dff816121bb565b6020880151909650611e10816121bb565b6040880151909550611e21816121bb565b6060880151909450611e32816121bb565b6080880151909350611e43816121bb565b60a0880151909250611e54816121bb565b809150509295509295509295565b60008060008060808587031215611e7857600080fd5b8435611e83816121bb565b93506020850135611e93816121bb565b92506040850135611ea3816121bb565b9396929550929360600135925050565b600080600060608486031215611ec857600080fd5b8335611ed3816121bb565b92506020840135611ee3816121bb565b929592945050506040919091013590565b60008060408385031215611f0757600080fd5b8235611f12816121bb565b946020939093013593505050565b600080600060608486031215611f3557600080fd5b8335611f40816121bb565b9250602084013591506040840135611f57816121bb565b809150509250925092565b600060208284031215611f7457600080fd5b81518015158114611db757600080fd5b600060808284031215611f9657600080fd5b6040516080810181811067ffffffffffffffff82111715611fe0577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604052823560ff81168114611ff457600080fd5b815261200260208401611d6f565b602082015261201360408401611d86565b604082015261202460608401611d6f565b60608201529392505050565b6000806040838503121561204357600080fd5b823591506020830135612055816121bb565b809150509250929050565b60008060008060008060c0878903121561207957600080fd5b865195506020870151945060408701519350606087015192506080870151915060a087015190509295509295509295565b6000825160005b818110156120cb57602081860181015185830152016120b1565b818111156120da576000828501525b509190910192915050565b600082198211156120f8576120f861218c565b500190565b600082612133577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156121705761217061218c565b500290565b6000828210156121875761218761218c565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff8116811461179757600080fdfea2646970667358221220c70a8607cdb10f2e9015ca35121fc8bded592aeb769f4d8a2c334111f56dd83464736f6c63430008060033";

export class CoFiXDAO__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CoFiXDAO> {
    return super.deploy(overrides || {}) as Promise<CoFiXDAO>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CoFiXDAO {
    return super.attach(address) as CoFiXDAO;
  }
  connect(signer: Signer): CoFiXDAO__factory {
    return super.connect(signer) as CoFiXDAO__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CoFiXDAOInterface {
    return new utils.Interface(_abi) as CoFiXDAOInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CoFiXDAO {
    return new Contract(address, _abi, signerOrProvider) as CoFiXDAO;
  }
}

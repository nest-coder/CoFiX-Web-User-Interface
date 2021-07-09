/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CoFiToken, CoFiTokenInterface } from "../CoFiToken";

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
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_minter",
        type: "address",
      },
    ],
    name: "MinterAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_minter",
        type: "address",
      },
    ],
    name: "MinterRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_new",
        type: "address",
      },
    ],
    name: "NewGovernance",
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
    name: "DELEGATION_TYPEHASH",
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
    name: "DOMAIN_TYPEHASH",
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
    inputs: [
      {
        internalType: "uint8",
        name: "value",
        type: "uint8",
      },
    ],
    name: "_setupDecimals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_minter",
        type: "address",
      },
    ],
    name: "addMinter",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "amount",
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
        name: "account",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "fromBlock",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "votes",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
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
    name: "delegateBySig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegator",
        type: "address",
      },
    ],
    name: "delegates",
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
        name: "account",
        type: "address",
      },
    ],
    name: "getCurrentVotes",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPriorVotes",
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
    name: "governance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
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
    name: "minters",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
        name: "",
        type: "address",
      },
    ],
    name: "numCheckpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_minter",
        type: "address",
      },
    ],
    name: "removeMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_new",
        type: "address",
      },
    ],
    name: "setGovernance",
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
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
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
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604080518082018252600a81526921b7a334902a37b5b2b760b11b602080830191825283518085019094526004845263436f466960e01b908401528151919291620000609160039162000096565b5080516200007690600490602084019062000096565b505060058054610100600160a81b03191633610100021790555062000179565b828054620000a4906200013c565b90600052602060002090601f016020900481019282620000c8576000855562000113565b82601f10620000e357805160ff191683800117855562000113565b8280016001018555821562000113579182015b8281111562000113578251825591602001919060010190620000f6565b506200012192915062000125565b5090565b5b8082111562000121576000815560010162000126565b600181811c908216806200015157607f821691505b602082108114156200017357634e487b7160e01b600052602260045260246000fd5b50919050565b61237f80620001896000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806370a08231116100f9578063ab033ea911610097578063dd62ed3e11610071578063dd62ed3e1461049c578063e7a324dc146104e2578063f1127ed814610509578063f46eccc41461056057600080fd5b8063ab033ea914610463578063b4b5ea5714610476578063c3cda5201461048957600080fd5b806395d89b41116100d357806395d89b4114610422578063983b2d561461042a578063a457c2d71461043d578063a9059cbb1461045057600080fd5b806370a08231146103b9578063782d6fe1146103ef5780637ecebe001461040257600080fd5b806339509351116101665780635aa6e675116101405780635aa6e675146103045780635c19a95c1461032957806361e9edb21461033c5780636fcfff451461037e57600080fd5b8063395093511461028057806340c10f1914610293578063587cde1e146102a657600080fd5b806320606b70116101a257806320606b701461021c57806323b872dd146102435780633092afd514610256578063313ce5671461026b57600080fd5b806306fdde03146101c9578063095ea7b3146101e757806318160ddd1461020a575b600080fd5b6101d1610583565b6040516101de9190612120565b60405180910390f35b6101fa6101f5366004612043565b610615565b60405190151581526020016101de565b6002545b6040519081526020016101de565b61020e7f797cfab58fcb15f590eb8e4252d5c228ff88f94f907e119e80c4393a946e8f3581565b6101fa610251366004612007565b61062c565b610269610264366004611fb9565b610683565b005b60055460405160ff90911681526020016101de565b6101fa61028e366004612043565b610791565b6102696102a1366004612043565b6107da565b6102df6102b4366004611fb9565b73ffffffffffffffffffffffffffffffffffffffff9081166000908152600760205260409020541690565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101de565b6005546102df90610100900473ffffffffffffffffffffffffffffffffffffffff1681565b610269610337366004611fb9565b610893565b61026961034a366004612105565b600580547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff92909216919091179055565b6103a461038c366004611fb9565b60096020526000908152604090205463ffffffff1681565b60405163ffffffff90911681526020016101de565b61020e6103c7366004611fb9565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b61020e6103fd366004612043565b6108a0565b61020e610410366004611fb9565b600a6020526000908152604090205481565b6101d1610b83565b610269610438366004611fb9565b610b92565b6101fa61044b366004612043565b610c97565b6101fa61045e366004612043565b610d67565b610269610471366004611fb9565b610db2565b61020e610484366004611fb9565b610fb9565b61026961049736600461206d565b611048565b61020e6104aa366004611fd4565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b61020e7f1ac861a6a8532f3704e1768564a53a32774f00d6cf20ccbbdf60ab61378302bc81565b6105446105173660046120c5565b60086020908152600092835260408084209091529082529020805460019091015463ffffffff9091169082565b6040805163ffffffff90931683526020830191909152016101de565b6101fa61056e366004611fb9565b60066020526000908152604090205460ff1681565b60606003805461059290612259565b80601f01602080910402602001604051908101604052809291908181526020018280546105be90612259565b801561060b5780601f106105e05761010080835404028352916020019161060b565b820191906000526020600020905b8154815290600101906020018083116105ee57829003601f168201915b5050505050905090565b600061062233848461142b565b5060015b92915050565b60006106398484846115de565b5073ffffffffffffffffffffffffffffffffffffffff808516600090815260076020526040808220548684168352912054610679929182169116846116c6565b5060019392505050565b600554610100900473ffffffffffffffffffffffffffffffffffffffff16331461070e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f436f46693a2021676f7665726e616e636500000000000000000000000000000060448201526064015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526006602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669291015b60405180910390a150565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490916106229185906107d5908690612193565b61142b565b3360009081526006602052604090205460ff16610853576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f436f46693a20216d696e746572000000000000000000000000000000000000006044820152606401610705565b61085d8282611892565b73ffffffffffffffffffffffffffffffffffffffff80831660009081526007602052604081205461088f9216836116c6565b5050565b61089d33826119b2565b50565b6000438210610931576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f436f46693a3a6765745072696f72566f7465733a206e6f74207965742064657460448201527f65726d696e6564000000000000000000000000000000000000000000000000006064820152608401610705565b73ffffffffffffffffffffffffffffffffffffffff831660009081526009602052604090205463ffffffff168061096c576000915050610626565b73ffffffffffffffffffffffffffffffffffffffff84166000908152600860205260408120849161099e600185612234565b63ffffffff90811682526020820192909252604001600020541611610a145773ffffffffffffffffffffffffffffffffffffffff84166000908152600860205260408120906109ee600184612234565b63ffffffff1663ffffffff16815260200190815260200160002060010154915050610626565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260086020908152604080832083805290915290205463ffffffff16831015610a5c576000915050610626565b600080610a6a600184612234565b90505b8163ffffffff168163ffffffff161115610b3f5760006002610a8f8484612234565b610a9991906121d3565b610aa39083612234565b73ffffffffffffffffffffffffffffffffffffffff8816600090815260086020908152604080832063ffffffff8086168552908352928190208151808301909252805490931680825260019093015491810191909152919250871415610b13576020015194506106269350505050565b805163ffffffff16871115610b2a57819350610b38565b610b35600183612234565b92505b5050610a6d565b5073ffffffffffffffffffffffffffffffffffffffff8516600090815260086020908152604080832063ffffffff9094168352929052206001015491505092915050565b60606004805461059290612259565b600554610100900473ffffffffffffffffffffffffffffffffffffffff163314610c18576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f436f46693a2021676f7665726e616e63650000000000000000000000000000006044820152606401610705565b73ffffffffffffffffffffffffffffffffffffffff811660008181526006602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f69101610786565b33600090815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8616845290915281205482811015610d58576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610705565b61067933856107d5868561221d565b6000610d738383611a56565b50336000908152600760205260408082205473ffffffffffffffffffffffffffffffffffffffff868116845291909220546106229282169116846116c6565b600554610100900473ffffffffffffffffffffffffffffffffffffffff163314610e38576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f436f46693a2021676f7665726e616e63650000000000000000000000000000006044820152606401610705565b73ffffffffffffffffffffffffffffffffffffffff8116610eb5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f436f46693a207a65726f206164647200000000000000000000000000000000006044820152606401610705565b60055473ffffffffffffffffffffffffffffffffffffffff828116610100909204161415610f3f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f436f46693a2073616d65206164647200000000000000000000000000000000006044820152606401610705565b600580547fffffffffffffffffffffff0000000000000000000000000000000000000000ff1661010073ffffffffffffffffffffffffffffffffffffffff8416908102919091179091556040519081527f4f386975ea1c2f7cf1845b08bee00626fbb624ecad16254d63d9bb9ba86526de90602001610786565b73ffffffffffffffffffffffffffffffffffffffff811660009081526009602052604081205463ffffffff1680610ff1576000611041565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260086020526040812090611022600184612234565b63ffffffff1663ffffffff168152602001908152602001600020600101545b9392505050565b60007f797cfab58fcb15f590eb8e4252d5c228ff88f94f907e119e80c4393a946e8f35611073610583565b805190602001206110814690565b60408051602080820195909552808201939093526060830191909152306080808401919091528151808403909101815260a0830182528051908401207f1ac861a6a8532f3704e1768564a53a32774f00d6cf20ccbbdf60ab61378302bc60c084015273ffffffffffffffffffffffffffffffffffffffff8b1660e084015261010083018a90526101208084018a9052825180850390910181526101408401909252815191909301207f1901000000000000000000000000000000000000000000000000000000000000610160830152610162820183905261018282018190529192506000906101a201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600080855291840180845281905260ff8a169284019290925260608301889052608083018790529092509060019060a0016020604051602081039080840390855afa1580156111f3573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81166112c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f436f46693a3a64656c656761746542795369673a20696e76616c69642073696760448201527f6e617475726500000000000000000000000000000000000000000000000000006064820152608401610705565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600a602052604081208054916112f2836122ad565b919050558914611384576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f436f46693a3a64656c656761746542795369673a20696e76616c6964206e6f6e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610705565b87421115611414576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f436f46693a3a64656c656761746542795369673a207369676e6174757265206560448201527f78706972656400000000000000000000000000000000000000000000000000006064820152608401610705565b61141e818b6119b2565b505050505b505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166114cd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610705565b73ffffffffffffffffffffffffffffffffffffffff8216611570576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610705565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006115eb848484611a5f565b73ffffffffffffffffffffffffffffffffffffffff84166000908152600160209081526040808320338452909152902054828110156116ac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e63650000000000000000000000000000000000000000000000006064820152608401610705565b6116bb85336107d5868561221d565b506001949350505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156117025750600081115b1561188d5773ffffffffffffffffffffffffffffffffffffffff8316156117cc5773ffffffffffffffffffffffffffffffffffffffff831660009081526009602052604081205463ffffffff16908161175c5760006117ac565b73ffffffffffffffffffffffffffffffffffffffff851660009081526008602052604081209061178d600185612234565b63ffffffff1663ffffffff168152602001908152602001600020600101545b905060006117ba848361221d565b90506117c886848484611d1c565b5050505b73ffffffffffffffffffffffffffffffffffffffff82161561188d5773ffffffffffffffffffffffffffffffffffffffff821660009081526009602052604081205463ffffffff169081611821576000611871565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260086020526040812090611852600185612234565b63ffffffff1663ffffffff168152602001908152602001600020600101545b9050600061187f8483612193565b905061142385848484611d1c565b505050565b73ffffffffffffffffffffffffffffffffffffffff821661190f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610705565b80600260008282546119219190612193565b909155505073ffffffffffffffffffffffffffffffffffffffff82166000908152602081905260408120805483929061195b908490612193565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff8281166000818152600760208181526040808420805485845282862054949093528787167fffffffffffffffffffffffff00000000000000000000000000000000000000008416811790915590519190951694919391928592917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4611a508284836116c6565b50505050565b60006106223384845b73ffffffffffffffffffffffffffffffffffffffff8316611b02576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610705565b73ffffffffffffffffffffffffffffffffffffffff8216611ba5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610705565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015611c5b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610705565b611c65828261221d565b73ffffffffffffffffffffffffffffffffffffffff8086166000908152602081905260408082209390935590851681529081208054849290611ca8908490612193565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611d0e91815260200190565b60405180910390a350505050565b6000611d404360405180606001604052806034815260200161231660349139611f35565b905060008463ffffffff16118015611da7575073ffffffffffffffffffffffffffffffffffffffff8516600090815260086020526040812063ffffffff831691611d8b600188612234565b63ffffffff908116825260208201929092526040016000205416145b15611dfd5773ffffffffffffffffffffffffffffffffffffffff851660009081526008602052604081208391611dde600188612234565b63ffffffff168152602081019190915260400160002060010155611edd565b60408051808201825263ffffffff8381168252602080830186815273ffffffffffffffffffffffffffffffffffffffff8a166000908152600883528581208a85168252909252939020915182547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001691161781559051600191820155611e849085906121ab565b73ffffffffffffffffffffffffffffffffffffffff8616600090815260096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001663ffffffff929092169190911790555b604080518481526020810184905273ffffffffffffffffffffffffffffffffffffffff8716917fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724910160405180910390a25050505050565b6000816401000000008410611f77576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107059190612120565b509192915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611fa357600080fd5b919050565b803560ff81168114611fa357600080fd5b600060208284031215611fcb57600080fd5b61104182611f7f565b60008060408385031215611fe757600080fd5b611ff083611f7f565b9150611ffe60208401611f7f565b90509250929050565b60008060006060848603121561201c57600080fd5b61202584611f7f565b925061203360208501611f7f565b9150604084013590509250925092565b6000806040838503121561205657600080fd5b61205f83611f7f565b946020939093013593505050565b60008060008060008060c0878903121561208657600080fd5b61208f87611f7f565b955060208701359450604087013593506120ab60608801611fa8565b92506080870135915060a087013590509295509295509295565b600080604083850312156120d857600080fd5b6120e183611f7f565b9150602083013563ffffffff811681146120fa57600080fd5b809150509250929050565b60006020828403121561211757600080fd5b61104182611fa8565b600060208083528351808285015260005b8181101561214d57858101830151858201604001528201612131565b8181111561215f576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b600082198211156121a6576121a66122e6565b500190565b600063ffffffff8083168185168083038211156121ca576121ca6122e6565b01949350505050565b600063ffffffff80841680612211577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b92169190910492915050565b60008282101561222f5761222f6122e6565b500390565b600063ffffffff83811690831681811015612251576122516122e6565b039392505050565b600181811c9082168061226d57607f821691505b602082108114156122a7577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156122df576122df6122e6565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfe436f46693a3a5f7772697465436865636b706f696e743a20626c6f636b206e756d62657220657863656564732033322062697473a2646970667358221220e26a0e278f3fcfaff6fa58aed329909dcb9173e623dc1b67394807d2edcecd6464736f6c63430008060033";

export class CoFiToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CoFiToken> {
    return super.deploy(overrides || {}) as Promise<CoFiToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CoFiToken {
    return super.attach(address) as CoFiToken;
  }
  connect(signer: Signer): CoFiToken__factory {
    return super.connect(signer) as CoFiToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CoFiTokenInterface {
    return new utils.Interface(_abi) as CoFiTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CoFiToken {
    return new Contract(address, _abi, signerOrProvider) as CoFiToken;
  }
}

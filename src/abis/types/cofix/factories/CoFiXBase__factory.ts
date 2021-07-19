/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CoFiXBase, CoFiXBaseInterface } from "../CoFiXBase";

const _abi = [
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
  "0x608060405234801561001057600080fd5b50610975806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80631c1b8772146100515780631c2f3e3d14610066578063ad68ebf7146100af578063c4d66de8146100c2575b600080fd5b61006461005f3660046107c9565b6100d5565b005b6002546100869073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100646100bd366004610891565b61032d565b6100646100d03660046107c9565b610592565b60025473ffffffffffffffffffffffffffffffffffffffff163381148061019b57506040517f91e1472b0000000000000000000000000000000000000000000000000000000081523360048201526000602482015273ffffffffffffffffffffffffffffffffffffffff8216906391e1472b9060440160206040518083038186803b15801561016357600080fd5b505afa158015610177573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061019b91906108bd565b610206576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f436f4669583a21676f760000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8416908117909155604080517f746b56f9000000000000000000000000000000000000000000000000000000008152905163746b56f99160048082019260c092909190829003018186803b15801561029857600080fd5b505afa1580156102ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d0919061080a565b50506001805473ffffffffffffffffffffffffffffffffffffffff9485167fffffffffffffffffffffffff000000000000000000000000000000000000000091821617909155600080549590941694169390931790915550505050565b6002546040517f91e1472b0000000000000000000000000000000000000000000000000000000081523360048201526000602482015273ffffffffffffffffffffffffffffffffffffffff909116906391e1472b9060440160206040518083038186803b15801561039d57600080fd5b505afa1580156103b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103d591906108bd565b61043b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f436f4669583a21676f760000000000000000000000000000000000000000000060448201526064016101fd565b600254604080517f96776492000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff16916396776492916004808301926020929190829003018186803b1580156104a657600080fd5b505afa1580156104ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104de91906107ed565b905073ffffffffffffffffffffffffffffffffffffffff8316610582576040517fdaa78c0f0000000000000000000000000000000000000000000000000000000081526000600482015273ffffffffffffffffffffffffffffffffffffffff82169063daa78c0f9084906024016000604051808303818588803b15801561056457600080fd5b505af1158015610578573d6000803e3d6000fd5b5050505050505050565b61058d838284610659565b505050565b60025473ffffffffffffffffffffffffffffffffffffffff1615610612576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f436f4669583a21696e697469616c697a6500000000000000000000000000000060448201526064016101fd565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905291516000928392908716916106f091906108df565b6000604051808303816000865af19150503d806000811461072d576040519150601f19603f3d011682016040523d82523d6000602084013e610732565b606091505b509150915081801561075c57508051158061075c57508080602001905181019061075c91906108bd565b6107c2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5472616e7366657248656c7065723a205452414e534645525f4641494c45440060448201526064016101fd565b5050505050565b6000602082840312156107db57600080fd5b81356107e68161091a565b9392505050565b6000602082840312156107ff57600080fd5b81516107e68161091a565b60008060008060008060c0878903121561082357600080fd5b865161082e8161091a565b602088015190965061083f8161091a565b60408801519095506108508161091a565b60608801519094506108618161091a565b60808801519093506108728161091a565b60a08801519092506108838161091a565b809150509295509295509295565b600080604083850312156108a457600080fd5b82356108af8161091a565b946020939093013593505050565b6000602082840312156108cf57600080fd5b815180151581146107e657600080fd5b6000825160005b8181101561090057602081860181015185830152016108e6565b8181111561090f576000828501525b509190910192915050565b73ffffffffffffffffffffffffffffffffffffffff8116811461093c57600080fd5b5056fea26469706673582212209c35c680ae46d3fdc37e9d044095c0537f83f6506ff010744d682bdf66d6100e64736f6c63430008060033";

export class CoFiXBase__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CoFiXBase> {
    return super.deploy(overrides || {}) as Promise<CoFiXBase>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CoFiXBase {
    return super.attach(address) as CoFiXBase;
  }
  connect(signer: Signer): CoFiXBase__factory {
    return super.connect(signer) as CoFiXBase__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CoFiXBaseInterface {
    return new utils.Interface(_abi) as CoFiXBaseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CoFiXBase {
    return new Contract(address, _abi, signerOrProvider) as CoFiXBase;
  }
}

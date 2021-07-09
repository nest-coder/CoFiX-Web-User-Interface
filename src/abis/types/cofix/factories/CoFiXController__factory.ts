/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CoFiXController,
  CoFiXControllerInterface,
} from "../CoFiXController";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "nestPriceFacade",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "sigmaSQ",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bn",
        type: "uint256",
      },
    ],
    name: "calcK",
    outputs: [
      {
        internalType: "uint256",
        name: "k",
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
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "payback",
        type: "address",
      },
    ],
    name: "latestPriceInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "priceEthAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "priceTokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "avgPriceEthAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "avgPriceTokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "sigmaSQ",
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
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "payback",
        type: "address",
      },
    ],
    name: "queryOracle",
    outputs: [
      {
        internalType: "uint256",
        name: "k",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ethAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
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
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "payback",
        type: "address",
      },
    ],
    name: "queryPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "ethAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
    ],
    name: "sqrt",
    outputs: [
      {
        internalType: "uint256",
        name: "z",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161074938038061074983398101604081905261002f91610044565b60601b6001600160601b031916608052610074565b60006020828403121561005657600080fd5b81516001600160a01b038116811461006d57600080fd5b9392505050565b60805160601c6106b0610099600039600081816101e5015261033801526106b06000f3fe60806040526004361061005a5760003560e01c8063677342ce11610043578063677342ce146100d75780637c0bcdae14610105578063ef8305231461013357600080fd5b80631a78f96d1461005f5780633c72db4c14610097575b600080fd5b61007261006d3660046104c8565b610153565b6040805194855260208501939093529183015260608201526080015b60405180910390f35b6100aa6100a53660046104c8565b61018b565b604080519687526020870195909552938501929092526060840152608083015260a082015260c00161008e565b3480156100e357600080fd5b506100f76100f23660046104fb565b610284565b60405190815260200161008e565b6101186101133660046104c8565b6102e4565b6040805193845260208401929092529082015260600161008e565b34801561013f57600080fd5b506100f761014e366004610514565b6103cd565b6000806000806000610165878761018b565b93985091965092945090925061017f9150829050836103cd565b94505092959194509250565b6040517ffe0103e200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301528281166024830152600091829182918291829182917f0000000000000000000000000000000000000000000000000000000000000000169063fe0103e290349060440160c0604051808303818588803b15801561022a57600080fd5b505af115801561023e573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610263919061055a565b949d670de0b6b3a76400009d50939b508c9a50985092965090945050505050565b600060038211156102d557508060006102a1600183811c906105a4565b90505b818110156102cf579050806001816102bc81866105bc565b6102c691906105a4565b901c90506102a4565b50919050565b81156102df575060015b919050565b6040517f7c2d656b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301528281166024830152600091829182917f000000000000000000000000000000000000000000000000000000000000000090911690637c2d656b90349060440160408051808303818588803b15801561037e57600080fd5b505af1158015610392573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906103b79190610536565b670de0b6b3a76400009790965090945092505050565b6000806103df6100f2612710866105bc565b6103ee9064174876e8006105f7565b9050670de0b6b3a76400006601c6bf526340008211156104175750671bc16d674ec80000610431565b660110d9316ec00082111561043157506714d1120d7b1600005b670de0b6b3a7640000808261044e85678ac7230489e800006105f7565b6104588843610634565b610468906509184e72a0006105f7565b61047390600e6105f7565b61047d91906105a4565b61048791906105f7565b61049191906105bc565b61049b91906105bc565b95945050505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146102df57600080fd5b600080604083850312156104db57600080fd5b6104e4836104a4565b91506104f2602084016104a4565b90509250929050565b60006020828403121561050d57600080fd5b5035919050565b6000806040838503121561052757600080fd5b50508035926020909101359150565b6000806040838503121561054957600080fd5b505080516020909101519092909150565b60008060008060008060c0878903121561057357600080fd5b865195506020870151945060408701519350606087015192506080870151915060a087015190509295509295509295565b600082198211156105b7576105b761064b565b500190565b6000826105f2577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561062f5761062f61064b565b500290565b6000828210156106465761064661064b565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea2646970667358221220f51ec40d47e30bb0150325bcd8b077818c6f3e59caad350bf3452120fdf9bad564736f6c63430008060033";

export class CoFiXController__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    nestPriceFacade: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CoFiXController> {
    return super.deploy(
      nestPriceFacade,
      overrides || {}
    ) as Promise<CoFiXController>;
  }
  getDeployTransaction(
    nestPriceFacade: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(nestPriceFacade, overrides || {});
  }
  attach(address: string): CoFiXController {
    return super.attach(address) as CoFiXController;
  }
  connect(signer: Signer): CoFiXController__factory {
    return super.connect(signer) as CoFiXController__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CoFiXControllerInterface {
    return new utils.Interface(_abi) as CoFiXControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CoFiXController {
    return new Contract(address, _abi, signerOrProvider) as CoFiXController;
  }
}

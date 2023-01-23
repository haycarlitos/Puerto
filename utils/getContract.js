import ContractAbi from "../artifacts/contracts/Puerto.sol/Puerto.json";
import { ethers } from "ethers";

export default function getContract() {
  // Creating a new provider
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // Getting the signer
  const signer = provider.getSigner();
  // Creating a new contract factory with the signer, address and ABI
  let contract = new ethers.Contract(
    "0x3D0CD8b4c81aeD2F1A8D3b0092b5605f51529953",
    ContractAbi.abi,
    signer
  );
  // Returning the contract
  return contract;
}

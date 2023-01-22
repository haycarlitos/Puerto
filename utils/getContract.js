import ContractAbi from "../artifacts/contracts/Puerto.sol/Puerto.json";
import { ethers } from "ethers";

export default function getContract() {
  // Creating a new provider
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // Getting the signer
  const signer = provider.getSigner();
  // Creating a new contract factory with the signer, address and ABI
  let contract = new ethers.Contract(
    "0xf6F03b0837569eec33e0Af7f3F43B362916e5de1",
    ContractAbi.abi,
    signer
  );
  // Returning the contract
  return contract;
}

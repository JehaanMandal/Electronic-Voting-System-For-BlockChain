import { ethers } from "ethers";
import abi from "./voting.json";

export const contractAddress = "0x7d7bfFC9Ed141e1d9Ac087c21Afe24a527984DBF";

export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = provider.getSigner();

export const votingContract = new ethers.Contract(contractAddress, abi, signer);

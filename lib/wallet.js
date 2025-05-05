// lib/wallet.js
import { ethers } from "ethers";

export async function connectWallet() {
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const address = await signer.getAddress();

    console.log("Wallet connected:", address);
    return { provider, signer, address };
  } else {
    throw new Error("No Ethereum wallet found");
  }
}

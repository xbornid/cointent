// lib/wallet.js
import { ethers } from "ethers";

export async function connectWallet() {
  if (typeof window !== "undefined" && window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

    try {
      // Cek apakah wallet adalah Warplet (Warpcast native wallet)
      if (window.ethereum.isWarpcast) {
        console.log("Detected Warplet wallet. Attempting auto-connect...");
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();

        console.log("Connected to Warplet:", address);
        return { provider, signer, address };
      } else {
        console.log("Wallet detected but not Warplet.");
        return null;
      }
    } catch (err) {
      console.error("Wallet connection failed:", err);
      return null;
    }
  } else {
    console.warn("Ethereum wallet not found.");
    return null;
  }
}

import { useEffect } from 'react';

export function connectWallet() {
  if (typeof window !== "undefined" && window.ethereum) {
    return window.ethereum.request({ method: 'eth_requestAccounts' });
  } else {
    console.warn("Wallet not found. Please install MetaMask or enable Warplet.");
    return [];
  }
}

export function useAutoConnectWallet(callback) {
  useEffect(() => {
    connectWallet().then(accounts => {
      if (accounts.length > 0) {
        callback(accounts[0]);
      }
    });
  }, [callback]);
}

import { useCallback, useEffect, useState } from 'react';
import { ethers } from 'ethers';

const STORAGE_KEY = 'nft-app-wallet-address';
const SEPOLIA_CHAIN = {
  chainId: '0xaa36a7',
  chainName: 'Sepolia',
  nativeCurrency: { name: 'SepoliaEther', symbol: 'ETH', decimals: 18 },
  rpcUrls: ['https://rpc.sepolia.org'],
  blockExplorerUrls: ['https://sepolia.etherscan.io'],
};

export default function useWeb3Wallet() {
  const [walletAddress, setWalletAddress] = useState('');
  const [balance, setBalance] = useState('0.0');
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState('');

  const fetchBalance = useCallback(async (address) => {
    if (typeof window === 'undefined' || !window.ethereum || !address) return;

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const rawBalance = await provider.getBalance(address);
      setBalance(ethers.utils.formatEther(rawBalance));
    } catch (err) {
      console.warn('Failed to fetch wallet balance', err);
      setBalance('0.0');
    }
  }, []);

  const ensureSepoliaNetwork = useCallback(async () => {
    if (typeof window === 'undefined' || !window.ethereum) return false;

    const current = window.ethereum.chainId;
    if (current === SEPOLIA_CHAIN.chainId) return true;

    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: SEPOLIA_CHAIN.chainId }],
      });
      return true;
    } catch (switchError) {
      // 4902: chain not added to wallet
      if (switchError?.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [SEPOLIA_CHAIN],
          });
          return true;
        } catch (addError) {
          setError(addError?.message || 'Failed to add Sepolia network');
          return false;
        }
      }
      setError(switchError?.message || 'Failed to switch to Sepolia network');
      return false;
    }
  }, []);

  const connectWallet = useCallback(async () => {
    if (typeof window === 'undefined' || !window.ethereum) {
      setError('MetaMask or Web3 wallet is not installed.');
      return;
    }

    try {
      // ensure wallet is on Sepolia testnet before requesting accounts
      const ok = await ensureSepoliaNetwork();
      if (!ok) return;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setWalletAddress(address);
      setIsConnected(true);
      setError('');
      window.localStorage.setItem(STORAGE_KEY, address);
      await fetchBalance(address);
    } catch (err) {
      setError(err?.message || 'Failed to connect wallet.');
    }
  }, []);

  const disconnectWallet = useCallback(async () => {
    setWalletAddress('');
    setIsConnected(false);
    setError('');
    window.localStorage.removeItem(STORAGE_KEY);

    if (typeof window !== 'undefined' && window.ethereum?.request) {
      try {
        await window.ethereum.request({
          method: 'wallet_removePermissions',
          params: [{ eth_accounts: {} }],
        });
      } catch (removeError) {
        // Some wallets may not support permission revocation, fallback to clearing local state only.
        console.warn('Permission revoke unsupported:', removeError?.message || removeError);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.ethereum) return;

    const savedAddress = window.localStorage.getItem(STORAGE_KEY);
    if (savedAddress) {
      setWalletAddress(savedAddress);
      setIsConnected(true);
      fetchBalance(savedAddress);
    }

    const handleAccountsChanged = (accounts) => {
      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
        setIsConnected(true);
        window.localStorage.setItem(STORAGE_KEY, accounts[0]);
      } else {
        disconnectWallet();
      }
    };

    const handleChainChanged = () => {
      window.location.reload();
    };

    window.ethereum.on('accountsChanged', handleAccountsChanged);
    window.ethereum.on('chainChanged', handleChainChanged);

    return () => {
      if (window.ethereum?.removeListener) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      }
    };
}, [disconnectWallet, fetchBalance]);

  useEffect(() => {
    if (!walletAddress) return;
    fetchBalance(walletAddress);
  }, [walletAddress, fetchBalance]);

  return {
    walletAddress,
    balance,
    isConnected,
    error,
    connectWallet,
    disconnectWallet,
  };
}

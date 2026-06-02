import React, { useEffect } from 'react';
import DashboardSearch from './parts/DashboardSearch';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { toast } from 'react-toastify';
import useWeb3Wallet from '../../hooks/useWeb3Wallet';

const useStyles = makeStyles({
  root: {
    background: 'primary',
    color: 'white',
    height: 48,
    padding: '0 30px',
    top: '24px',
    left: '45px',
    position: 'relative',
  },
});

const DashboardTopbar = () => {
  const classes = useStyles();
  const { walletAddress, isConnected, error, connectWallet, disconnectWallet } =
    useWeb3Wallet();

  useEffect(() => {
    if (error) {
      toast.error(error, { pauseOnHover: false });
    }
  }, [error]);
  const handleWalletButton = async () => {
    if (isConnected) {
      disconnectWallet();
      toast.success('Wallet disconnected', {pauseOnHover: false});
      return;
    }
    await connectWallet();
  }
  const displayAddress = walletAddress
    ? `${walletAddress.slice(0, 7)}...${walletAddress.slice(-4)}`
    : 'Connect wallet';

  return (
    <div className="">
      <div className="flex items-center justify-between pr-[72px] ">
        <DashboardSearch />
        <Button
          className={classes.root}
          variant="contained"
          onClick={handleWalletButton}
          type="button"
        >
          {displayAddress}
        </Button>
      </div>
    </div>
  );
};

export default DashboardTopbar;

import React, { useState } from 'react';
import Blur from './parts/Blur';
import IconEther from '../icons/IconEther';
import IconWrappedEther from '../icons/IconWrappedEther';
import { useAuth } from '../../contexts/auth-context';
import useWeb3Wallet from '../../hooks/useWeb3Wallet';

const Card = () => {
  const { userInfo } = useAuth();
  const { balance, isConnected } = useWeb3Wallet();
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  const ethBalance = isConnected ? parseFloat(balance || '0').toFixed(2) : '0.00';
  const mainBalance = isConnected ? `${ethBalance} ETH` : '$4,467.00';

  return (
    <>
      <div className="bg-white w-[314px] h-[432px] mt-[42px] px-[18px] py-5 rounded-[10px] dark:bg-[#1F2128] dark:shadow-3xl">
        <div className="flex absolute flex-col px-5 mt-[18px] ml-1 ">
          <p className="font-bold text-xs text-[#F2F2F2] select-none">
            Main Balance
          </p>
          <p
            className="font-bold text-white  select-none"
            style={{ fontSize: '26px', lineHeight: '34px' }}
          >
            {mainBalance}
          </p>
          {userInfo && <Blur show={show}></Blur>}
        </div>
        <img srcSet="/card.png 4x" alt="" onClick={handleShow} />
        <div className="flex mt-10">
          <div className="rounded-full w-9 h-9 bg-[#D8DCF9] mt-1 flex items-center justify-center dark:bg-[#3C50E033]">
            <IconEther></IconEther>
          </div>
          <div className="flex flex-col ml-3">
            <p
              className="font-semibold text-naturalcolor2"
              style={{ fontSize: '13px', lineHeight: '16px' }}
            >
              Ether
            </p>
            <p className="font-semibold text-black1 text-base dark:text-white ">
              {ethBalance} ETH
            </p>
          </div>
        </div>
        <div className="flex mt-7">
          <div className="rounded-full w-9 h-9 bg-[#D8DCF9] mt-1 flex items-center justify-center dark:bg-[#3C50E033] dark:dark light icon">
            <IconWrappedEther></IconWrappedEther>
          </div>
          <div className="flex ml-3">
            <div className="flex flex-col mr-[79px]">
              <p
                className="font-semibold text-naturalcolor2 whitespace-nowrap"
                style={{ fontSize: '13px', lineHeight: '16px' }}
              >
                Warpped Ether
              </p>
              <p className="font-semibold text-black1 text-base dark:text-white">
                0 wETH
              </p>
            </div>
            <button className="bg-[#F7F7F7] w-[63px] h-[38px] font-semibold text-xs pb-[2px] items-center rounded-[10px] dark:bg-[#2A2C33] dark:text-white">
              Convert
            </button>
          </div>
        </div>
        <div className="flex">
          <button className="bg-primary w-[130px] h-[48px] font-bold text-base text-white rounded-[10px] mt-[22px] py-3 pt-[10px]">
            Add Founds
          </button>
          <button className="dark:text-white bg-[#F0F3F6] w-[130px] h-[48px] font-bold text-base text-[#35373E] rounded-[10px] mt-[22px] py-3 pt-[10px] ml-[21px] dark:bg-[#2A2C33]">
            Withdraw
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;

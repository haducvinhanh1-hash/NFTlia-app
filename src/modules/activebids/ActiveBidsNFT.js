import React from 'react';
import IconHeart from '../../components/icons/IconHeart';
import IconEther from '../../components/icons/IconEther';
import Countdown from 'react-countdown';
import { v4 } from 'uuid';
export const activeBidsNft = [
  {
    image: '/magnet2.png',
    avatarbefore: '/avatar1.png',
    avatarafter: '/avatar2.png',
    heart: <IconHeart></IconHeart>,
    title: '3D Renders #52',
    icon: (
      <IconEther className="w-[8px] h-[13.26px] top-[6px] relative mr-2"></IconEther>
    ),
    amountPrice: 0.5,
    highestBids: 'Highest bid 1/1',
    bid: '🔥 New bid',
    coin: 'ETH',
  },
  {
    image: '/space.png',
    avatarbefore: '/avatar1.png',
    avatarafter: '/avatar2.png',
    heart: <IconHeart></IconHeart>,
    title: '3D Renders #52',
    icon: (
      <IconEther className="w-[8px] h-[13.26px] top-[6px] relative mr-2"></IconEther>
    ),
    amountPrice: 27.5,
    highestBids: 'Highest bid 1/1',
    bid: '🔥 Hot bid',
    coin: 'ETH',
  },
  {
    image: '/brain.png',
    avatarbefore: '/avatar1.png',
    avatarafter: '/avatar2.png',
    heart: <IconHeart></IconHeart>,
    title: '3D Renders #52',
    icon: (
      <IconEther className="w-[8px] h-[13.26px] top-[6px] relative mr-2"></IconEther>
    ),
    amountPrice: 27.5,
    highestBids: 'Highest bid 1/1',
    bid: '🔥 New bid',
    coin: 'ETH',
  },
  {
    image: '/3drender.png',
    avatarbefore: '/avatar1.png',
    avatarafter: '/avatar2.png',
    heart: <IconHeart></IconHeart>,
    title: '3D Renders #52',
    icon: (
      <IconEther className="w-[8px] h-[13.26px] top-[6px] relative mr-2"></IconEther>
    ),
    amountPrice: 27.5,
    highestBids: 'Highest bid 1/1',
    bid: '🔥 Hot bid',
    coin: 'ETH',
  },
  {
    image: '/water.png',
    avatarbefore: '/avatar1.png',
    avatarafter: '/avatar2.png',
    heart: <IconHeart></IconHeart>,
    title: '3D Renders #52',
    icon: (
      <IconEther className="w-[8px] h-[13.26px] top-[6px] relative mr-2"></IconEther>
    ),
    amountPrice: 27.5,
    highestBids: 'Highest bid 1/1',
    bid: '🔥 New bid',
    coin: 'ETH',
  },
  {
    image: '/magnet.png',
    avatarbefore: '/avatar1.png',
    avatarafter: '/avatar2.png',
    heart: <IconHeart></IconHeart>,
    title: '3D Renders #52',
    icon: (
      <IconEther className="w-[8px] h-[13.26px] top-[6px] relative mr-2"></IconEther>
    ),
    amountPrice: 27.5,
    highestBids: 'Highest bid 1/1',
    bid: '🔥 New bid',
    coin: 'ETH',
  },
  {
    image: '/spirally.png',
    avatarbefore: '/avatar1.png',
    avatarafter: '/avatar2.png',
    heart: <IconHeart></IconHeart>,
    title: '3D Renders #52',
    icon: (
      <IconEther className="w-[8px] h-[13.26px] top-[6px] relative mr-2"></IconEther>
    ),
    amountPrice: 27.5,
    highestBids: 'Highest bid 1/1',
    bid: '🔥 Hot bid',
    coin: 'ETH',
  },
  {
    image: '/article.png',
    avatarbefore: '/avatar1.png',
    avatarafter: '/avatar2.png',
    heart: <IconHeart></IconHeart>,
    title: '3D Renders #52',
    icon: (
      <IconEther className="w-[8px] h-[13.26px] top-[6px] relative mr-2"></IconEther>
    ),
    amountPrice: 27.5,
    bid: '🔥 Hot bid',
    coin: 'ETH',
  },
];
const ActiveBidsNFT = () => {
  return (
    <div className="w-[1250px]">
      <div className="grid md:grid-cols-4 ml-[40px] grid-cols-1 ">
        {activeBidsNft.map((item) => (
          <div
            className="w-[258px] h-[390px] bg-white shadow-xl rounded-[10px] mt-[30px] flex justify-center dark:bg-[#242731] hover:transition-all"
            key={v4()}
          >
            <div>
              <div
                className={`w-[5rem] h-[2rem] whitespace-nowrap rounded-[10px] flex items-center z-50 top-[0.625rem] left-[0.375rem] relative ${
                  item.bid === '🔥 Hot bid'
                    ? 'bg-[#FF754C99]'
                    : 'bg-[#11142D99]'
                }`}
              >
                <p className="font-semibold text-xs text-white ml-[0.5rem]">
                  {item.bid}
                </p>
              </div>
              <div className="bottom-8 relative">
                <img
                  srcSet={`${item.image} 4x`}
                  alt=""
                  className="md:w-[237px] md:h-[195px] w-[300px] h-[180px] select-none mt-1 object-cover rounded-[10px] z-10"
                />
                <div className="flex justify-start bg-[#E6F2E2] bottom-[34px] relative border border-secondary w-[150px] h-[34px] rounded-[10px] font-semibold text-sm items-center justify-center">
                  <Countdown date={Date.now() + 1000000000 * 4} />{' '}
                  <p className="ml-[2px]">Left 🔥</p>
                </div>
                <div className="flex justify-between bottom-5 relative">
                  <div className="flex ml-1">
                    <img
                      srcSet={`${item.avatarbefore} 4x`}
                      alt=""
                      className="z-0 select-none"
                    />
                    <img
                      srcSet={`${item.avatarafter} 4x`}
                      alt=""
                      className="z-40 right-2 relative select-none"
                    />
                  </div>
                  <span className="mt-[6px]">{item.heart}</span>
                </div>
                <div className="flex items-center justify-between bottom-1 relative">
                  <h3 className="font-bold text-black2 ml-1 dark:text-white select-none">
                    {item.title}
                  </h3>
                  <div className="w-[21px] h-[21px] bg-[#EBEDFC] dark:bg-[rgba(32,_129,_226,_0.2)] rounded-full mr-1">
                    <span className="left-[6.5px] bottom-[2px] relative">
                      {item.icon}
                    </span>
                  </div>
                </div>
                <p className="ml-1 font-medium text-naturalcolor2 text-sm mt-[2px] select-none">
                  {item.desc}
                </p>
                <div className="flex mt-2 mb-1 justify-between">
                  <p className="font-semibold text-sm text-naturalcolor2 ml-1">
                    {item.highestBids}
                  </p>
                  <div className="flex font-medium text-sm mt-[2px] ml-[8px] bottom-[2px] relative justify-between">
                    <p className="mr-1 text-black2 select-none dark:text-white">
                      {item.amountPrice}
                    </p>
                    <p className="text-naturalcolor2 select-none mr-1 dark:text-white">
                      {item.coin}
                    </p>
                  </div>
                </div>
                <button className="border border-[#EBEDFC] dark:border-[#2081E2] h-[40px] w-full rounded-[10px] mt-4 hover:bg-primary hover:bg-opacity-10">
                  <p className="font-semibold text-primary text-base">
                    Place Bid
                  </p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveBidsNFT;

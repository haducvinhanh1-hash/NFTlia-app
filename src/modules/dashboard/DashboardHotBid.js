import React from 'react';
import IconHeart from '../../components/icons/IconHeart';
import IconWrappedEther from '../../components/icons/IconWrappedEther';
import IconWrappedEtherWhite from '../../components/icons/IconWrappedEtherWhite';

const hotBids = [
  {
    image: '/cube.png',
    avatarbefore: '/avatar1.png',
    avatarafter: '/avatar2.png',
    heart: <IconHeart></IconHeart>,
    title: 'Abstract Cube #2000',
    desc: 'Highest bid 1/1',
    place: 'Place Bid',
    icon: (
      <IconWrappedEther className="w-[8px] h-[13.26px] top-[6px] relative mr-2"></IconWrappedEther>
    ),
    icondarkmode: <IconWrappedEtherWhite></IconWrappedEtherWhite>,
    amount: 0.5,
    coin: 'ETH',
    like: '232',
  },
  {
    image: '/cyberkong.png',
    avatarbefore: '/avatar3.png',
    avatarafter: '/avatar2.png',
    heart: <IconHeart></IconHeart>,
    title: 'CyberKong #245',
    desc: 'Highest bid 1/1',
    place: 'Place Bid',
    icon: (
      <IconWrappedEther className="w-[8px] h-[13.26px] top-[6px] relative mr-2"></IconWrappedEther>
    ),
    icondarkmode: <IconWrappedEtherWhite></IconWrappedEtherWhite>,
    amount: 0.5,
    coin: 'ETH',
    like: '232',
  },
  {
    image: '/3drender.png',
    avatarbefore: '/avatar4.png',
    avatarafter: '/avatar1.png',
    heart: <IconHeart></IconHeart>,
    title: '3D Renders #52',
    desc: 'Highest bid 1/1',
    place: 'Place Bid',
    icon: (
      <IconWrappedEther className="w-[8px] h-[13.26px] top-[6px] relative mr-2"></IconWrappedEther>
    ),
    icondarkmode: <IconWrappedEtherWhite></IconWrappedEtherWhite>,
    amount: 0.5,
    coin: 'ETH',
    like: '232',
  },
];
const DashboardHotBid = () => {
  return (
    <div className="ml-[40px] gap-x-[26px]">
      <h2 className="font-semibold font-['Poppins'] text-[#1B1D21] text-xl dark:text-white">
        Hot bids 🔥
      </h2>
      <div className="flex gap-x-[30px]">
        {hotBids.map((item) => (
          <div
            className="w-[236px] h-[290px] bg-white shadow-xl rounded-[10px] mt-[18px] flex justify-center pt-2 dark:bg-[#242731] hover:scale-105 cursor-pointer hover:transition-all"
            key={item.image}
          >
            <div>
              <img
                srcSet={`${item.image} 4x`}
                alt=""
                className="w-[220px] h-[130px] mt-2 select-none"
              />
              <div className="flex mt-2 justify-between">
                <div className="flex ml-1 mt-1">
                  <img
                    srcSet={`${item.avatarbefore} 4x`}
                    alt=""
                    className="z-0 select-none"
                  />
                  <img
                    srcSet={`${item.avatarafter} 4x`}
                    alt=""
                    className="z-50 right-2 relative select-none"
                  />
                </div>
                <span className="mt-[6px]">{item.heart}</span>
              </div>
              <h3 className="mt-3 font-bold text-black2 ml-1 dark:text-white select-none">
                {item.title}
              </h3>
              <p className="ml-1 font-medium text-naturalcolor2 text-sm mt-[2px] select-none">
                {item.desc}
              </p>
              <p className="ml-1 font-semibold text-sm text-primary mt-[10px] select-none">
                {item.place}
              </p>
              <div className="flex justify-end bottom-[23px] relative">
                <span>{item.icon || item.icondarkmode}</span>
                <div className="flex font-semibold text-sm mt-[2px]">
                  <p className="mr-1 text-black2 select-none">{item.amount}</p>
                  <p className="text-naturalcolor2 select-none">{item.coin}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DashboardHotBid;

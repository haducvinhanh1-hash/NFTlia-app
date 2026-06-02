import React from 'react';
import IconHeart from '../../components/icons/IconHeart';
import IconEther from '../../components/icons/IconEther';
const exploreNft = [
  {
    image: '/square.png',
    avatarbefore: '/avatar1.png',
    avatarafter: '/avatar2.png',
    heart: <IconHeart></IconHeart>,
    title: 'Abstract Cube #2000',
    icon: (
      <IconEther className="w-[8px] h-[13.26px] top-[6px] relative mr-2"></IconEther>
    ),
    amountPrice: 0.5,
    amount: '1/1',
    coin: 'ETH',
  },
  {
    image: '/ball.png',
    avatarbefore: '/avatar1.png',
    avatarafter: '/avatar2.png',
    heart: <IconHeart></IconHeart>,
    title: 'Abstract Cube #2000',
    icon: (
      <IconEther className="w-[8px] h-[13.26px] top-[6px] relative mr-2"></IconEther>
    ),
    amountPrice: 27.5,
    amount: '1/1',
    coin: 'ETH',
  },
  {
    image: '/brain.png',
    avatarbefore: '/avatar1.png',
    avatarafter: '/avatar2.png',
    heart: <IconHeart></IconHeart>,
    title: 'Abstract Cube #2000',
    icon: (
      <IconEther className="w-[8px] h-[13.26px] top-[6px] relative mr-2"></IconEther>
    ),
    amountPrice: 27.5,
    amount: '1/1',
    coin: 'ETH',
  },
  {
    image: '/3drender.png',
    avatarbefore: '/avatar1.png',
    avatarafter: '/avatar2.png',
    heart: <IconHeart></IconHeart>,
    title: 'Abstract Cube #2000',
    icon: (
      <IconEther className="w-[8px] h-[13.26px] top-[6px] relative mr-2"></IconEther>
    ),
    amountPrice: 27.5,
    amount: '1/1',
    coin: 'ETH',
  },
  {
    image: '/water.png',
    avatarbefore: '/avatar1.png',
    avatarafter: '/avatar2.png',
    heart: <IconHeart></IconHeart>,
    title: 'Abstract Cube #2000',
    icon: (
      <IconEther className="w-[8px] h-[13.26px] top-[6px] relative mr-2"></IconEther>
    ),
    amountPrice: 27.5,
    amount: '1/1',
    coin: 'ETH',
  },
  {
    image: '/magnet.png',
    avatarbefore: '/avatar1.png',
    avatarafter: '/avatar2.png',
    heart: <IconHeart></IconHeart>,
    title: 'Abstract Cube #2000',
    icon: (
      <IconEther className="w-[8px] h-[13.26px] top-[6px] relative mr-2"></IconEther>
    ),
    amountPrice: 27.5,
    amount: '1/1',
    coin: 'ETH',
  },
  {
    image: '/spirally.png',
    avatarbefore: '/avatar1.png',
    avatarafter: '/avatar2.png',
    heart: <IconHeart></IconHeart>,
    title: 'Abstract Cube #2000',
    icon: (
      <IconEther className="w-[8px] h-[13.26px] top-[6px] relative mr-2"></IconEther>
    ),
    amountPrice: 27.5,
    amount: '1/1',
    coin: 'ETH',
  },
  {
    image: '/article.png',
    avatarbefore: '/avatar1.png',
    avatarafter: '/avatar2.png',
    heart: <IconHeart></IconHeart>,
    title: 'Abstract Cube #2000',
    icon: (
      <IconEther className="w-[8px] h-[13.26px] top-[6px] relative mr-2"></IconEther>
    ),
    amountPrice: 27.5,
    coin: 'ETH',
  },
];
const ExploreNft = () => {
  return (
    <div className="w-[1250px]">
      <div className="grid md:grid-cols-4 ml-[40px] top-4 relative grid-cols-1 ">
        {exploreNft.map((item) => (
          <div
            className="md:w-[236px] md:h-[310px] w-[327px] h-[367px] bg-white shadow-xl rounded-[10px] mt-[30px] flex justify-center pt-2 dark:bg-[#242731] cursor-pointer md:hover:transition-all md:hover:scale-105"
            key={item.image}
          >
            <div>
              <img
                srcSet={`${item.image} 4x`}
                alt=""
                className="md:w-[220px] md:h-[130px] w-[300px] h-[180px] select-none ml-[2px] mt-1"
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
                    className="z-40 right-2 relative select-none"
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
              <div className="flex bottom-1 relative">
                <div className="w-[21px] h-[21px] bg-[#EBEDFC] dark:bg-[rgba(32,_129,_226,_0.2)] rounded-full ml-1">
                  <span className="left-[6.5px] bottom-[2px] relative">
                    {item.icon}
                  </span>
                </div>
                <div className="flex font-semibold text-sm mt-[2px] ml-[8px] bottom-[2px] relative">
                  <p className="mr-1 text-black2 select-none dark:text-white">
                    {item.amountPrice}
                  </p>
                  <p className="text-black2 select-none mr-2 dark:text-white">
                    {item.coin}
                  </p>
                  <p className=" select-none text-naturalcolor2 text-xs mt-[2.3px]">
                    {item.amount}
                  </p>
                </div>
              </div>
              <button className="border border-[#EBEDFC] dark:border-[#2081E2] md:w-[225px] h-[40px] w-full rounded-[10px] mt-[10px] hover:bg-primary hover:bg-opacity-10">
                <p className="font-semibold text-primary text-base mb-1">
                  Buy now
                </p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreNft;

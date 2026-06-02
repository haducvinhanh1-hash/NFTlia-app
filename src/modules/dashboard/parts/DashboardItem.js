import React from 'react';
import axios from 'axios';
import IconEther from '../../../components/icons/IconEther';
const topCollectibles = [
  {
    id: 1,
    image: '/bredape.png',
    title: 'Bred Ape C..',
    icon: <IconEther className="w-[10px] h-[15.26px]"></IconEther>,
    price: '• 8.99',
    percent: '+60.91%',
    increase: true,
  },
  {
    id: 1,
    image: '/doodles.png',
    title: 'Doodles',
    icon: <IconEther className="w-[10px] h-[15.26px]"></IconEther>,
    price: '• 8.99',
    percent: '+60.91%',
    increase: false,
  },
  {
    id: 1,
    image: '/azuki.png',
    title: 'Azuki',
    icon: <IconEther className="w-[10px] h-[15.26px]"></IconEther>,
    price: '• 8.99',
    percent: '+60.91%',
    increase: false,
  },
  {
    id: 1,
    image: '/ragnarakmeta.png',
    title: 'Ragnarak Meta',
    icon: <IconEther className="w-[10px] h-[15.26px]"></IconEther>,
    price: '• 8.99',
    percent: '+60.91%',
    increase: true,
  },
  {
    id: 1,
    image: '/beanzofficial.png',
    title: 'BEANZ Official',
    icon: <IconEther className="w-[10px] h-[15.26px]"></IconEther>,
    price: '• 8.99',
    percent: '+60.91%',
    increase: true,
  },
  {
    id: 1,
    image: '/artblockc.png',
    title: 'Art Blocks C',
    icon: <IconEther className="w-[10px] h-[15.26px]"></IconEther>,
    price: '• 8.99',
    percent: '+60.91%',
    increase: false,
  },
];
const DashboardItem = () => {
  axios({
    method: 'GET',
    url: 'https://testnets-api.opensea.io/api/v1/collections?offset=0&limit=300',
  }).then((response) => {
    const data = response.data;
  });
  return (
    <div className="ml-3">
      <div className="flex justify-between">
        <h2 className="text-xl font-['Poppins'] font-semibold text-black1 ml-7 dark:text-white">
          Top Collectibles
        </h2>
        <button className="w-[86px] h-[48px] border-2 border-[#F7F7F7] rounded-2xl bottom-[9px] relative mr-[18px] bg-white dark:bg-darkbg dark:border-[#35373E]">
          <p className="dark:text-[#4C4D53] font-semibold dark:text-naturalcolor2">
            See All
          </p>
        </button>
      </div>
      <div className="grid grid-cols-2 w-[812px] cursor-pointer">
        {topCollectibles.map((item) => (
          <div
            className="flex hover:shadow-xl dark:hover:shadow-2xl w-[372px] h-[95px] items-center justify-start rounded-[9px] hover:transition-all ml-7 mb-5 mt-[31px]"
            key={item.title}
          >
            <p className="mr-[14px] text-xl font-semibold text-naturalcolor2 ml-[10px]">
              {item.id}
            </p>
            <img
              srcSet={`${item.image} 4x`}
              alt=""
              className="w-11 h-11 mt-[6px]"
            />
            <div className="ml-[14px] py-[18px]">
              <p className="font-semibold text-xl text-black2 dark:text-white">
                {item.title}
              </p>
              <div className="flex mt-1">
                <span className="mt-[5px] mb-[1px] mr-[5px]">{item.icon}</span>
                <p className="font-medium text-naturalcolor2">{item.price}</p>
                {item.increase ? (
                  <p className="text-[#83BF6E] relative left-[150px]">
                    {item.percent}
                  </p>
                ) : (
                  <p className="text-[#FF754C] relative left-[150px]">
                    {item.percent}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardItem;

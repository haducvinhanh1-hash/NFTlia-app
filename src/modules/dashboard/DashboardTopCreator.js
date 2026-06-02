import React from 'react';
import { Dropdown } from '../../components/dropdown';
const topCreator = [
  {
    title: 'Leslie Alexander',
    price: '320,000+',
    total: 'Total USD',
    items: '850 Items',
    image: '/avatar2.png',
  },
  {
    title: 'Jenny Wilson',
    price: '250,000+',
    total: 'Total USD',
    items: '12k Items',
    image: '/avatar1.png',
  },
  {
    title: 'Jacob Jones',
    price: '340,000+',
    total: 'Total USD',
    items: '250 Items',
    image: '/avatar3.png',
  },
  {
    title: 'Kristin Watson',
    price: '200,000+',
    total: 'Total USD',
    items: '450 Items',
    image: '/avatar4.png',
  },
];
const DashboardTopCreator = () => {
  return (
    <div className="flex h-10 mr-10 relative mt-10  dark:visible">
      <h2 className="font-semibold dark:text-white text-black2 text-lg">
        Trending
      </h2>
      <h2 className="font-semibold text-primary text-lg ml-[6px]">Creator</h2>
      <span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mt-[5px] ml-1"
        >
          <path
            d="M6.70711 8.29289C6.31658 7.90237 5.68342 7.90237 5.29289 8.29289C4.90237 8.68342 4.90237 9.31658 5.29289 9.70711L6.70711 8.29289ZM12 15L11.2929 15.7071C11.6834 16.0976 12.3166 16.0976 12.7071 15.7071L12 15ZM18.7071 9.70711C19.0976 9.31658 19.0976 8.68342 18.7071 8.29289C18.3166 7.90237 17.6834 7.90237 17.2929 8.29289L18.7071 9.70711ZM5.29289 9.70711L11.2929 15.7071L12.7071 14.2929L6.70711 8.29289L5.29289 9.70711ZM12.7071 15.7071L18.7071 9.70711L17.2929 8.29289L11.2929 14.2929L12.7071 15.7071Z"
            fill="#3C50E0"
          />
        </svg>
      </span>
      <div className="w-[90px] h-[36px] whitespace-nowrap ml-[63px] flex-col select-none">
        <div className=" z-50 relative ">
          <Dropdown className="select-none">
            <Dropdown.Select
              placeholder="1 Day"
              className="text-[#808191] "
            ></Dropdown.Select>
            <Dropdown.List>
              <Dropdown.Option>1 Day</Dropdown.Option>
              <Dropdown.Option>3 Day</Dropdown.Option>
              <Dropdown.Option>7 Day</Dropdown.Option>
            </Dropdown.List>
          </Dropdown>
        </div>
        <div>
          {topCreator.map((item) => (
            <div
              className="w-[314px] h-[71px] border border-[#F0F3F6] dark:border-[#35373E] right-[225px] relative mt-6 rounded-[10px] flex hover:bg-primary hover:bg-opacity-10 dark:hover:bg-opacity-30 cursor-pointer transition-all"
              key={item.title}
            >
              <img
                srcSet={`${item.image} 4x`}
                alt=""
                className="w-10 h-10 mt-[15.5px] ml-[14px]"
              />
              <div className="flex-col">
                <p className="dark:text-white font-semibold ml-[14px] mt-[12px]">
                  {item.title}
                </p>
                <p className="text-naturalcolor2 font-semibold text-sm ml-[14px]">
                  {item.items}
                </p>
              </div>
              <div className="flex flex-col">
                <p
                  className={`ml-[46px] mt-3 font-semibold text-darkbg dark:text-white ${
                    item.title.length < 16 ? 'ml-[65px]' : ''
                  }`}
                >
                  {item.price}
                </p>
                <p
                  className={` font-semibold text-naturalcolor2 mb-1 text-sm ${
                    item.title.length < 16 ? 'ml-[65px]' : 'ml-[48px]'
                  }`}
                >
                  {item.total}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardTopCreator;

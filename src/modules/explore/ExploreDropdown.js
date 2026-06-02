import React from 'react';
import { Dropdown } from '../../components/dropdown';
import IconFilter from '../../components/icons/IconFilter';

const ExploreDropdown = () => {
  return (
    <div className="md:flex md:justify-between md:z-50">
      <div>
        <Dropdown className="select-none md:ml-[40px] ml-[24px] bg-primary rounded-[10px] font-bold py-[4px] md:w-[70px] w-[108px] md:mb-0 flex justify-center">
          <Dropdown.Select
            placeholder="All"
            className="border-none text-white text-base"
          ></Dropdown.Select>
        </Dropdown>
      </div>
      <div>
        <Dropdown className="select-none md:ml-[12px] ml-[6px] rounded-[10px] font-semibold py-[4px] md:w-[126px] w-[120px] h-[44px] border-2 border-[#F0F3F6] bg-white dark:bg-darkbg dark:border-[#35373E] text-[#4C4D53]">
          <Dropdown.Select
            placeholder="Blockchain"
            className="border-none justify-center pt-[2px] "
          ></Dropdown.Select>
          <Dropdown.List>
            <Dropdown.Option className="pt-[10px] pb-[10px] z-0">
              NFTs
            </Dropdown.Option>
            <Dropdown.Option className="pt-[10px] pb-[10px] z-0">
              Crypto
            </Dropdown.Option>
            <Dropdown.Option className="pt-[10px] pb-[10px] z-0">
              Blockchain
            </Dropdown.Option>
          </Dropdown.List>
        </Dropdown>
      </div>
      <div>
        <Dropdown className="select-none md:ml-[12px] ml-[2px] rounded-[10px] font-semibold py-[4px] md:w-[126px] w-[120px] h-[44px] border-2 border-[#F0F3F6] bg-white dark:bg-darkbg dark:border-[#35373E] text-[#4C4D53]">
          <Dropdown.Select
            placeholder="Category"
            className="border-none justify-center pt-[2px] "
          ></Dropdown.Select>
          <Dropdown.List>
            <Dropdown.Option className="pt-[10px] pb-[10px] z-0">
              Crypto
            </Dropdown.Option>
            <Dropdown.Option className="pt-[10px] pb-[10px] z-0">
              Blockchain
            </Dropdown.Option>
          </Dropdown.List>
        </Dropdown>
      </div>
      <div>
        <Dropdown className="select-none md:ml-[12px] ml-[24px] rounded-[10px] font-semibold py-[4px] md:w-[130px] w-[126px] h-[44px] border-2 border-[#F0F3F6] bg-white dark:bg-darkbg dark:border-[#35373E] text-[#4C4D53]">
          <Dropdown.Select
            placeholder="Collections"
            className="border-none justify-center pt-[2px] "
          ></Dropdown.Select>
          <Dropdown.List>
            <Dropdown.Option className="pt-[10px] pb-[10px] z-0">
              Crypto
            </Dropdown.Option>
            <Dropdown.Option className="pt-[10px] pb-[10px] z-0">
              Blockchain
            </Dropdown.Option>
          </Dropdown.List>
        </Dropdown>
      </div>
      <div>
        <Dropdown className="select-none md:ml-[12px] ml-[24px] rounded-[10px] font-semibold py-[4px] md:w-[126px] w-[110px] h-[44px] border-2 border-[#F0F3F6] bg-white dark:bg-darkbg dark:border-[#35373E] text-[#4C4D53] whitespace-nowrap ">
          <Dropdown.Select
            placeholder="On sale"
            className="border-none justify-center pt-[2px]"
          ></Dropdown.Select>
          <Dropdown.List>
            <Dropdown.Option className="pt-[10px] pb-[10px] pl-8 ">
              On Sale
            </Dropdown.Option>
            <Dropdown.Option className="pt-[10px] pb-[10px] pl-8 ">
              100%
            </Dropdown.Option>
          </Dropdown.List>
        </Dropdown>
      </div>
      <div>
        <Dropdown className="select-none md:ml-[12px] ml-[6px] rounded-[10px] whitespace-nowrap font-semibold py-[4px] md:w-[126px] h-[44px] w-[118px] border-2 border-[#F0F3F6] bg-white dark:bg-darkbg dark:border-[#35373E] text-[#4C4D53]">
          <Dropdown.Select
            placeholder="Price range"
            className="border-none justify-center pt-[2px] "
          ></Dropdown.Select>
          <Dropdown.List>
            <Dropdown.Option className="pt-[10px] pb-[10px]">
              Price range
            </Dropdown.Option>
            <Dropdown.Option className="pt-[10px] pb-[10px]">
              1 - 10
            </Dropdown.Option>
            <Dropdown.Option className="pt-[10px] pb-[10px]">
              50 - 100
            </Dropdown.Option>
          </Dropdown.List>
        </Dropdown>
      </div>
      <div className="flex items-center justify-between right-[80px] relative">
        <button className="font-semibold text-base text-[#4C4D53] border-2 border-[#F0F3F6] dark:border-[#2F323B] w-[98px] h-[44px] rounded-[10px] left-[360px] relative">
          <p className="ml-[25px]">Latest</p>
        </button>
        <IconFilter className="left-[270px] relative mt-1"></IconFilter>
      </div>
    </div>
  );
};

export default ExploreDropdown;

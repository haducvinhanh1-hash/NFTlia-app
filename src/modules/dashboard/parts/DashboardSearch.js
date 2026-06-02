import React from 'react';
import IconSearch from '../../../components/icons/IconSearch';

const DashboardSearch = () => {
  return (
    <>
      <div className="bg-[#F7F7F7] md:rounded-[0.625rem] md:h-[3.25rem] pb-1 md:w-[22rem] w-[3rem] top-[60rem] md:top-0 relative h-[3rem] rounded-full flex items-center md:right-[5rem] md:relative md:left-[2.5rem] left-[4.375rem] relative md:mt-12 mt-[2.563rem] dark:bg-[#242731]">
        <IconSearch className="md:ml-[19px] w-[22px] h-[22px] mt-1 ml-[12px]"></IconSearch>
        <div className="md:flex hidden flex-1 px-3">
          <input
            type="text"
            placeholder="Search items, collections, and accounts"
            className="bg-transparent text-base placeholder:text-[#808191] w-full text-[#808191]"
          />
        </div>
      </div>
    </>
  );
};

export default DashboardSearch;

import React from 'react';
import IconSearch from '../../../components/icons/IconSearch';
import Button from '../../../components/button/Button';

const RankingsSearch = () => {
  return (
    <div className="bg-[#F7F7F7] rounded-[0.625rem] h-[3.25rem] pb-1 w-[20rem] flex items-center dark:bg-[#2F323B] ml-[1rem]">
      <IconSearch className="md:ml-[19px] w-[22px] h-[22px] mt-1 ml-[12px]"></IconSearch>
      <div className="md:flex hidden flex-1 px-3">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-base placeholder:text-[#808191] w-full text-[#808191]"
        />
        <Button className="whitespace-nowrap bg-primary w-[9.188rem] h-[3rem] rounded-[0.75rem] mt-[0.313rem] left-[0.625rem] relative">
          <p className="font-['Inter'] text-sm text-white">Advance Search</p>
        </Button>
      </div>
    </div>
  );
};

export default RankingsSearch;

import React from 'react';
import { Dropdown } from '../../../components/dropdown';
import RankingsSearch from './RankingsSearch';

const RankingsDropdown = () => {
  return (
    <div className="top-[1.375rem] relative flex">
      <Dropdown className="select-none bg-[#F7F7F7] dark:bg-[#2F323B] whitespace-nowrap rounded-[10px] w-[12rem] flex justify-center h-[3.25rem] items-center justify-between ml-[1.594rem] ">
        <Dropdown.SelectTop
          placeholder="Last 30 days"
          className=" flex ml-[3.813rem] "
        ></Dropdown.SelectTop>
        <Dropdown.List>
          <Dropdown.Option className="text-naturalcolor2 text-sm font-semibold pb-3">
            Last 30 days
          </Dropdown.Option>
          <Dropdown.Option className="text-naturalcolor2 text-sm font-semibold pb-3">
            New 30 days
          </Dropdown.Option>
        </Dropdown.List>
      </Dropdown>
      <Dropdown className="select-none bg-[#F7F7F7] dark:bg-[#2F323B] whitespace-nowrap rounded-[10px] w-[12rem] flex justify-center h-[3.25rem] items-center justify-between ml-[1rem] ">
        <Dropdown.SelectTop
          placeholder="All Categories"
          className=" flex ml-[3.125rem]"
        ></Dropdown.SelectTop>
        <Dropdown.List>
          <Dropdown.Option className="text-naturalcolor2 text-sm font-semibold pb-3">
            All Categories
          </Dropdown.Option>
          <Dropdown.Option className="text-naturalcolor2 text-sm font-semibold pb-3">
            New 30 days
          </Dropdown.Option>
        </Dropdown.List>
      </Dropdown>
      <Dropdown className="select-none bg-[#F7F7F7] dark:bg-[#2F323B] whitespace-nowrap rounded-[10px] w-[12rem] flex justify-center h-[3.25rem] items-center justify-between ml-[1rem]">
        <Dropdown.SelectTop
          placeholder="All Chains"
          className=" flex ml-[4.688rem] "
        ></Dropdown.SelectTop>
        <Dropdown.List>
          <Dropdown.Option className="text-naturalcolor2 text-sm font-semibold pb-3">
            All Chains
          </Dropdown.Option>
          <Dropdown.Option className="text-naturalcolor2 text-sm font-semibold pb-3">
            New 30 days
          </Dropdown.Option>
        </Dropdown.List>
      </Dropdown>
      <div>
        <RankingsSearch></RankingsSearch>
      </div>
    </div>
  );
};

export default RankingsDropdown;

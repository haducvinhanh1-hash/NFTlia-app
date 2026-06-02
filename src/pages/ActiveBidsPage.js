import React from 'react';
import LayoutDashboard from '../layout/layoutDashboard';
import ActiveBidsNFT from '../modules/activebids/ActiveBidsNFT';
import { Dropdown } from '../components/dropdown';

const ActiveBidsPage = () => {
  return (
    <LayoutDashboard height={'h-[75rem]'}>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-black1 dark:text-white font-bold text-3xl ml-10 mt-[42px] mb-1 z-10 w-14">
            Bids
          </h1>
          <p className="font-semibold text-base text-naturalcolor2 ml-10 w-[12.5rem]">
            Welcome mxama Bids Page
          </p>
        </div>
        <div className="w-[6rem] h-[3.125rem] right-[4.875rem] top-[30px] relative ">
          <Dropdown className="z-50 whitespace-nowrap border-[#F2F2F2]">
            <Dropdown.Select2
              placeholder="Newest"
              className="border-[#F2F2F2] dark:border-[#35373e] text-[#4C4D53] font-semibold text-sm"
              padding="py-[10px]"
            ></Dropdown.Select2>
            <Dropdown.List
              space="a"
              className="mt-[0.125rem] rounded-[0.313rem]"
            >
              <Dropdown.Option className="text-[#4C4D53] font-semibold text-sm mb-1">
                Newest
              </Dropdown.Option>
              <Dropdown.Option className="text-[#4C4D53] font-semibold text-sm mb-1">
                Latests
              </Dropdown.Option>
              <Dropdown.Option className="text-[#4C4D53] font-semibold text-sm mb-1">
                30 Day
              </Dropdown.Option>
            </Dropdown.List>
          </Dropdown>
        </div>
      </div>
      <ActiveBidsNFT></ActiveBidsNFT>
    </LayoutDashboard>
  );
};

export default ActiveBidsPage;

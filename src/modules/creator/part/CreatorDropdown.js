import React from 'react';
import { Dropdown } from '../../../components/dropdown';

const CreatorDropdown = () => {
  return (
    <div className="w-[6rem] h-[3.125rem] right-[2.875rem] top-[30px] relative ">
      <Dropdown className="z-50 whitespace-nowrap">
        <Dropdown.Select2
          placeholder="Featured"
          className="border-[#F2F2F2] dark:border-[#35373e] text-[#4C4D53] font-semibold text-sm py-[0.375rem] px-[0.375rem] mb-[0.125rem]"
        ></Dropdown.Select2>
        <Dropdown.List
          space="a"
          className="mt-[0.125rem] rounded-[0.313rem] ml-3"
        >
          <Dropdown.Option className="text-[#4C4D53] font-semibold text-sm mb-1">
            Featured
          </Dropdown.Option>
          <Dropdown.Option className="text-[#4C4D53] font-semibold text-sm mb-1">
            Featureless
          </Dropdown.Option>
          <Dropdown.Option className="text-[#4C4D53] font-semibold text-sm mb-1">
            30 Day
          </Dropdown.Option>
        </Dropdown.List>
      </Dropdown>
    </div>
  );
};

export default CreatorDropdown;

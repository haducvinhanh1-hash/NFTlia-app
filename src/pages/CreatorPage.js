import React from 'react';
import LayoutDashboard from '../layout/layoutDashboard';
import CardCreator from '../modules/creator/CardCreator';
import CreatorDropdown from '../modules/creator/part/CreatorDropdown';
const CreatorPage = () => {
  return (
    <LayoutDashboard>
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-black1 dark:text-white font-bold text-3xl ml-10 mt-[2.625rem] mb-1 z-10 w-14">
              Creators
            </h1>
            <p className="font-semibold text-base text-naturalcolor2 ml-10 w-[20rem]">
              Welcome mxama Creators page
            </p>
          </div>
          <CreatorDropdown></CreatorDropdown>
        </div>
        <CardCreator></CardCreator>
      </div>
    </LayoutDashboard>
  );
};

export default CreatorPage;

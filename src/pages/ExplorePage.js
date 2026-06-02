import React from 'react';
import LayoutDashboard from '../layout/layoutDashboard';
import ExploreNft from '../modules/explore/ExploreNft';
import ExploreDropdown from '../modules/explore/ExploreDropdown';

const ExplorePage = () => {
  return (
    <LayoutDashboard>
      <h1 className="text-black1 dark:text-white font-bold text-3xl md:ml-10 md:mt-[42px] md:mb-5 z-10">
        Explore NFTs
      </h1>
      <div className="flex">
        <ExploreDropdown></ExploreDropdown>
      </div>
      <ExploreNft></ExploreNft>
    </LayoutDashboard>
  );
};

export default ExplorePage;

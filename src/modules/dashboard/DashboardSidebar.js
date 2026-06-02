import React from 'react';

import DashboardStatus from './parts/DashboardStatus';
import DashboardProfile from './parts/DashboardProfile';
import DashboardDarkmode from './parts/DashboardDarkmode';
import DashboardHome from './DashboardHome';
import DashboardLogo from './parts/DashboardLogo';
const DashboardSidebar = ({ height }) => {
  return (
    <div
      className={`flex flex-col w-full max-w-[240px] mr-5 h-full shadow-xl pr-1 bg-white dark:bg-darkbg ${height}`}
    >
      <DashboardLogo></DashboardLogo>
      <DashboardHome></DashboardHome>
      <DashboardStatus></DashboardStatus>
      <DashboardProfile></DashboardProfile>
      <DashboardDarkmode></DashboardDarkmode>
    </div>
  );
};

export default DashboardSidebar;

import React from 'react';
import LayoutDashboard from '../layout/layoutDashboard';
import DashboardBanner from '../modules/dashboard/DashboardBanner';
import Card from '../components/card/Card';
import DashboardItem from '../modules/dashboard/parts/DashboardItem';
import DashboardHotBid from '../modules/dashboard/DashboardHotBid';
import DashboardTopCreator from '../modules/dashboard/DashboardTopCreator';
const DashboardPage = () => {
  return (
    <LayoutDashboard>
      <div className="flex justify-between mr-[40px]">
        <DashboardBanner></DashboardBanner>
        <div className=" drop-shadow-2xl overflow-hidden">
          <Card></Card>
        </div>
      </div>
      <div className="flex flex-1 justify-between">
        <div className="bottom-[183px] relative">
          <DashboardItem></DashboardItem>
          <DashboardHotBid></DashboardHotBid>
        </div>
        <DashboardTopCreator></DashboardTopCreator>
      </div>
    </LayoutDashboard>
  );
};
export default DashboardPage;

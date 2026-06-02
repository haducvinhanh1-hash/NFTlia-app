import React from 'react';
import DashboardSidebar from '../modules/dashboard/DashboardSidebar';
import DashboardTopbar from '../modules/dashboard/DashboardTopbar';
import classNames from '../utils/classNames';

const LayoutDashboard = ({ children, className = '', height }) => {
  return (
    <div className="flex h-full dark:bg-darkbg bg-white">
      <div>
        <DashboardSidebar height={height}></DashboardSidebar>
      </div>
      <div className={classNames('w-full', className)}>
        <DashboardTopbar></DashboardTopbar>
        {children}
      </div>
    </div>
  );
};

export default LayoutDashboard;

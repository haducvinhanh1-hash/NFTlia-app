import React from 'react';

const DashboardGrid = ({ children }) => {
  return <div className="grid grid-cols-4 gap-x-7">{children}</div>;
};

export default DashboardGrid;

import React from 'react';
import IconRankings from '../../../components/icons/IconRankings';
import IconActivity from '../../../components/icons/IconActivity';
import { NavLink } from 'react-router-dom';
import Label2 from '../../../components/label/Label2';
const statusLink = [
  {
    icon: <IconRankings></IconRankings>,
    title: 'Rankings',
    url: '/rankings',
  },
  {
    icon: <IconActivity></IconActivity>,
    title: 'Activity',
    url: '/activity',
  },
];
const DashboardStatus = () => {
  const statusLinkClass =
    'ml-5 px-[22px] mb-7 flex items-center w-48 h-12 rounded-xl font-bold text-base mb-3';
  return (
    <div>
      <div className="mt-[26px] px-[42px] mb-[18px]">
        <Label2>States</Label2>
      </div>
      <div>
        {statusLink.length > 0 &&
          statusLink.map((link) => (
            <NavLink
              to={link.url}
              key={link.title}
              className={({ isActive }) =>
                isActive
                  ? `${statusLinkClass} bg-primary text-white`
                  : `${statusLinkClass} text-[#808191] hover:bg-primary hover:bg-opacity-10 transition-all dark:hover:bg-opacity-50`
              }
            >
              <span className="mr-4">{link.icon}</span>
              <span className="text-base">{link.title}</span>
            </NavLink>
          ))}
        <div className="mt-7 border border-[#F0F3F6] w-[176px] ml-8 dark:border-[#2A2C33]"></div>
      </div>
    </div>
  );
};

export default DashboardStatus;

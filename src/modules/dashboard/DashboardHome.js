import React from 'react';
import { NavLink } from 'react-router-dom';
import IconHome from '../../components/icons/IconHome';
import IconExplore from '../../components/icons/IconExplore';
import IconActiveBids from '../../components/icons/IconActiveBids';
import IconCreator from '../../components/icons/IconCreator';
const sidebarLink = [
  {
    icon: <IconHome></IconHome>,
    title: 'Home',
    url: '/dashboard',
  },
  {
    icon: <IconExplore></IconExplore>,
    title: 'Explore',
    url: '/explore',
  },
  {
    icon: <IconActiveBids></IconActiveBids>,
    title: 'Active Bids',
    url: '/active-bids',
  },
  {
    icon: <IconCreator></IconCreator>,
    title: 'Creator',
    url: '/creator',
  },
];
const DashboardHome = () => {
  const navLinkClass =
    'ml-5 px-[22px] mb-7 flex items-center w-48 h-12 rounded-xl text-base mb-3 font-bold';
  return (
    <div>
      <div className="flex flex-col flex-shrink-0">
        {sidebarLink.length > 0 &&
          sidebarLink.map((link) => (
            <NavLink
              to={link.url}
              key={link.title}
              className={({ isActive }) =>
                isActive
                  ? `${navLinkClass} bg-primary text-white`
                  : `${navLinkClass} text-[#808191] hover:bg-primary hover:bg-opacity-10 transition-all dark:hover:bg-green dark:hover:bg-opacity-50`
              }
            >
              <span className="mr-[18px]">{link.icon}</span>
              <span className={``}>{link.title}</span>
            </NavLink>
          ))}
        <div className="mt-4 border border-[#F0F3F6] w-[176px] ml-8 dark:border-[#2A2C33]"></div>
      </div>
    </div>
  );
};

export default DashboardHome;

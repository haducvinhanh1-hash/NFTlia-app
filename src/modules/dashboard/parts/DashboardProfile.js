import React from 'react';
import IconMyCollection from '../../../components/icons/IconMyCollection';
import IconMyWallet from '../../../components/icons/IconMyWallet';
import { NavLink } from 'react-router-dom';
import IconMyWatchlist from '../../../components/icons/IconMyWatchlist';
import IconSetting from '../../../components/icons/IconSetting';
import Label2 from '../../../components/label/Label2';

const DashboardProfile = () => {
  const profileLink = [
    {
      icon: <IconMyCollection></IconMyCollection>,
      title: 'My Collection',
      url: '/my-collection',
    },
    {
      icon: <IconMyWallet></IconMyWallet>,
      title: 'My Wallet',
      url: '/my-wallet',
    },
    {
      icon: <IconMyWatchlist></IconMyWatchlist>,
      title: 'My Watchlist',
      url: '/my-watchlist',
    },
  ];
  const profileLinkClass =
    'ml-5 px-[22px] mb-7 flex items-center w-48 h-12 rounded-xl font-bold text-base mb-3';
  return (
    <div>
      <div className="mt-[26px] px-[42px] mb-[18px]">
        <Label2>Profile</Label2>
      </div>
      <div>
        {profileLink.length > 0 &&
          profileLink.map((link) => (
            <NavLink
              to={link.url}
              key={link.title}
              className={({ isActive }) =>
                isActive
                  ? `${profileLinkClass} bg-primary text-white`
                  : `${profileLinkClass} text-[#808191] hover:bg-primary hover:bg-opacity-10 transition-all dark:hover:bg-opacity-50`
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
export default DashboardProfile;

import React from 'react';
import { Link } from 'react-router-dom';

const DashboardLogo = () => {
  return (
    <Link to="/" className="flex px-10 pb-10 pt-12 ">
      <img srcSet="/logo2.png 2x" alt="" className="w-8 h-8" />
      <p className="font-bold text-2xl ml-[10px] dark:text-white ">NFTlia</p>
    </Link>
  );
};

export default DashboardLogo;

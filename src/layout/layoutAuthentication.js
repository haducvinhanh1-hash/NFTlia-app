import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
import ErrorComponent from '../components/common/ErrorComponent';
import DashboardDarkmode from '../modules/dashboard/parts/DashboardDarkmode';

const LayoutAuthentication = ({ children, heading = '' }) => {
  return (
    <div className="relative w-full min-h-screen p-10 bg-naturalcolor2 bg-opacity-10 dark:bg-darkbg isolate overflow-hidden">
      <Link to="/dashboard" className="inline-block mb-5 lg:mb-10 lg:ml-5 flex">
        <img srcSet="/logo2.png 2x" alt="nftlia" className="w-10 h-10" />
        <p className="mt-1 font-bold text-2xl ml-2 dark:text-white">NFTlia</p>
      </Link>
      <DashboardDarkmode
        className="lg:left-[1300px] lg:bottom-[60px] relative dark:text-white left-[330px] bottom-[65px]"
        toggle={false}
      ></DashboardDarkmode>
      <div className="w-full max-w-[556px] bg-white dark:bg-[#242731] rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto">
        <h1 className="mb-1 text-lg font-semibold text-center lg:text-xl lg:mb-3 text-text1 dark:text-white">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};
LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};
export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent,
});

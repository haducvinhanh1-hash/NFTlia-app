import React from 'react';
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
import ErrorComponent from '../common/ErrorComponent';

const ButtonGoogle = ({ text = 'Sign up with google', onClick = () => {}, disabled = false }) => {
  return (
    <button
      className="flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border gap-x-3 border-strock rounded-xl text-black2 dark:text-white dark:border-[#35373e] disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      <img srcSet="/google.png 2x" alt="icon-google" />
      <span>{text}</span>
    </button>
  );
};
ButtonGoogle.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
export default withErrorBoundary(ButtonGoogle, {
  FallbackComponent: ErrorComponent,
});

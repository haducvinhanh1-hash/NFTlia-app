import React from 'react';
import { DropdownProvider } from './dropdown-context';
import classNames from '../../utils/classNames';

const Dropdown = ({ children, className = '', ...props }) => {
  return (
    <DropdownProvider {...props} className={className}>
      <div className={classNames('relative inline-block w-full ', className)}>
        {children}
      </div>
    </DropdownProvider>
  );
};

export default Dropdown;

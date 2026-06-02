import React from 'react';
import classNames from '../../utils/classNames';

const Label2 = ({ children, className = '', htmlForm = '' }) => {
  return (
    <label
      htmlFor={htmlForm}
      className={classNames(
        'font-bold text-base text-naturalcolor2',
        className,
      )}
    >
      {children}
    </label>
  );
};

export default Label2;

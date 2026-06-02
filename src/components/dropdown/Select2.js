import React from 'react';
import { useDropdown } from './dropdown-context';

const Select2 = ({ placeholder = '', className = '' }) => {
  const { toggle, show, day } = useDropdown();
  return (
    <div
      className={`flex py-[6px] px-[16px] border rounded-[10px] cursor-pointer text-[#4C4D53] ${className}`}
      onClick={toggle}
    >
      <span className={`py-[0.3rem]`}>
        {day.length === 0 ? placeholder : day}
      </span>
      <span>
        {show ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-[14px] h-[14px] mt-[10px] left-3 relative `}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-[14px] h-[14px] mt-[10px] left-3 relative `}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </span>
    </div>
  );
};

export default Select2;

import React from 'react';
import { useDropdown } from './dropdown-context';

const Select = ({ placeholder = '', className = '', padding = "" }) => {
  const { toggle, show, day } = useDropdown();
  return (
    <div
      className={`flex py-[6px] px-[16px] border rounded-[10px] cursor-pointer text-[#4C4D53] ${className} ${padding}`}
      onClick={toggle}
      padding={padding}
    >
      <span className={className}>{day.length === 0 ? placeholder : day}</span>
      <span>
        {show ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-[18px] h-[18px] mt-[4px]  ml-[6px] ${className}`}
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
            className={`w-[18px] h-[18px] mt-[4px]  ml-[6px] ${className}`}
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

export default Select;

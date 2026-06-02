import React from 'react';

const IconExplore = ({ active = true }) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10.8074" r="10" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.52344 14.2836L8.18058 8.98838L13.4758 7.33124L11.8187 12.6265L6.52344 14.2836Z"
        stroke={`${active ? '#3C50E0' : 'white'}`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconExplore;

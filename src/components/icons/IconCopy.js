import React from 'react';

const IconCopy = ({ className = '', onClick = () => {} }) => {
  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M13.7466 10.3992V12.7067C13.7466 15.7833 12.516 17.0139 9.4394 17.0139H6.51664C3.44005 17.0139 2.20941 15.7833 2.20941 12.7067V9.78391C2.20941 6.70732 3.44005 5.47668 6.51664 5.47668H8.82408"
        stroke="white"
        strokeWidth="1.38447"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.7466 10.3992H11.2854C9.43941 10.3992 8.8241 9.78391 8.8241 7.93796V5.47668L13.7466 10.3992Z"
        stroke="white"
        strokeWidth="1.38447"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.59326 1.63095H12.6699"
        stroke="white"
        strokeWidth="1.38447"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.05518 3.93839C6.05518 2.66161 7.08583 1.63095 8.36262 1.63095H10.3778"
        stroke="white"
        strokeWidth="1.38447"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5924 6.24583V11.0069C17.5924 12.199 16.6233 13.1682 15.4311 13.1682"
        stroke="white"
        strokeWidth="1.38447"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5924 6.24583H15.2849C13.5543 6.24583 12.9775 5.66897 12.9775 3.93839V1.63095L17.5924 6.24583Z"
        stroke="white"
        strokeWidth="1.38447"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconCopy;

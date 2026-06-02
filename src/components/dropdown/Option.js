import React from 'react';
import { useDropdown } from './dropdown-context';

const Option = (props) => {
  const { onClick, className = '' } = props;
  const { setShow, setDay } = useDropdown();
  const handleClick = () => {
    onClick && onClick();
    setDay(props.children);
    setShow(false);
  };
  return (
    <div
      className={`py-[6px] px-[16px] cursor-pointer flex items-center justify-between hover:text-primary transition-all ${className} `}
      onClick={handleClick}
    >
      {props.children}
    </div>
  );
};

export default Option;

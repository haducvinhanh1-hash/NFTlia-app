import React, { useState } from 'react';

const IconHeart = () => {
  const [like, setLike] = useState(false);
  const [amountLike, setAmountLike] = useState(232);
  const handleLike = () => {
    setLike(!like);
    if (like) {
      setAmountLike(amountLike - 1);
    } else {
      setAmountLike(amountLike + 1);
    }
  };
  return (
    <div className="flex ml-1 items-center mt-1">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill={`${like ? 'red' : 'none'}`}
        xmlns="http://www.w3.org/2000/svg"
        className={`${like ? 'red' : ''}`}
        onClick={handleLike}
      >
        <path
          d="M9.465 15.5325C9.21 15.6225 8.79 15.6225 8.535 15.5325C6.36 14.79 1.5 11.6925 1.5 6.4425C1.5 4.125 3.3675 2.25 5.67 2.25C7.035 2.25 8.2425 2.91 9 3.93C9.7575 2.91 10.9725 2.25 12.33 2.25C14.6325 2.25 16.5 4.125 16.5 6.4425C16.5 11.6925 11.64 14.79 9.465 15.5325Z"
          stroke={`${like ? 'none' : '#808191'}`}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="ml-1 mr-[8px] font-medium text-sm text-naturalcolor2 select-none bottom-[2px] relative">
        {amountLike}
      </p>
    </div>
  );
};

export default IconHeart;

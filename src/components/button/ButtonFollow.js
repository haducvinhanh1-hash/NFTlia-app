import React from 'react';
import { useState } from 'react';
import classNames from '../../utils/classNames';
import { toast } from 'react-toastify';
const ButtonFollow = ({ className = '' }) => {
  const [follow, setFollow] = useState(false);
  const handleFollow = () => {
    setFollow(!follow);
    if (!follow) {
      toast.success('Follow Success', { delay: 0, pauseOnHover: false });
    } else {
      toast.success('Unfollow Success', { delay: 0, pauseOnHover: false });
    }
  };
  return (
    <div>
      <button
        className={classNames(
          ` ${
            follow
              ? 'bg-primary bg-opacity-60 w-[4.5rem] h-[2rem] rounded-[0.6rem] text-white'
              : 'bg-primary w-[4rem]  h-[2rem] rounded-[0.625rem] text-white'
          }  flex items-center justify-center mr-[0.875rem]`,
          className,
        )}
        type="button"
        onClick={handleFollow}
      >
        <p
          className={`font-normal mb-[0.125rem] ${
            follow ? ' text-xs ' : ' text-sm'
          }`}
        >
          {follow ? 'Unfollow' : 'Follow'}
        </p>
      </button>
    </div>
  );
};

export default ButtonFollow;

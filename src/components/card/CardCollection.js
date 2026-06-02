import React from 'react';
import Button from '../button/Button';

const CardCollection = () => {
  return (
    <div className="dark:bg-[#22252f] bg-white shadow-md w-[27.6%] h-[24.813rem] ml-10 rounded-[0.625rem] mb-[1.875rem] mr-auto">
      <div className="ml-[0.625rem] mt-[0.625rem] flex justify-between">
        <img
          srcSet="/Pyramid1.png 2x"
          alt=""
          className="w-[45.1%] h-56 rounded-[0.625rem] object-cover"
        />
        <div className="flex flex-col">
          <div className="flex mr-[0.188rem]">
            <img
              srcSet="/Pyramid2.png 2x"
              alt=""
              className="w-[120%] h-[6.5rem] rounded-[0.625rem] mr-[0.6rem]"
            />
            <img
              srcSet="/Pynamid3.png 2x"
              alt=""
              className="w-[120%] h-[6.5rem] rounded-[0.625rem] mr-[0.6rem]"
            />
          </div>
          <img
            srcSet="/Pynamid4.png 2x"
            alt=""
            className="w-[10.25rem] h-[6.875rem] rounded-[0.625rem] object-cover mt-[0.625rem]"
          />
        </div>
      </div>
      <div className="flex justify-between mt-[0.875rem] ml-[1.25rem]">
        <div>
          <p className="text-lg text-black1 font-semibold">3d Wallpapers #56</p>
          <p className="text-sm font-semibold text-naturalcolor2">
            Created by UIHUT
          </p>
        </div>
        <div className="bg-[#EBEDFC] border border-primary rounded-[0.625rem] w-[28.4%] h-[2.5rem] flex items-center justify-center mr-[1.25rem]">
          <p className="text-base text-primary font-semibold">35 Items</p>
        </div>
      </div>
      <Button className="bg-[#F7F7F7] text-black1 font-bold text-base w-[90%] h-11 rounded-[0.625rem] mx-auto mt-10 hover:bg-primary hover:bg-opacity-10 hover:transition-all hover:border hover:border-primary">
        View All
      </Button>
    </div>
  );
};

export default CardCollection;

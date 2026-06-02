import React from 'react';
import PropTypes from 'prop-types';
import { creator } from '../../utils/constant';
import ButtonFollow from '../../components/button/ButtonFollow';
const CardCreator = () => {
  return (
    <div className="grid grid-cols-4">
      {creator.map((item) => (
        <div className="ml-[2.1rem] mt-8" key={item.id}>
          <div className="shadow-2xl w-[16rem] h-[18.063rem] rounded-[0.625rem] dark:drop-shadow-2xl">
            <div>
              <img
                srcSet={`${item.imageCard} 4x`}
                alt=""
                className="w-[20.438rem] h-[6.7rem] object-cover rounded-[0.625rem]
                "
              />
              <div
                className="border-2 border-white dark:border-darkbg
               rounded-full w-[3.8rem] h-[3.8rem] flex items-center justify-start bottom-[2rem] left-[6.094rem] relative"
              >
                <img
                  src={item.avatar}
                  alt=""
                  className="rounded-full w-[3.6rem] h-[3.6rem]"
                />
              </div>
            </div>
            <div className="bottom-[1.25rem] relative flex items-center justify-between ">
              <div className="ml-[0.875rem]">
                <h2 className="font-bold text-base text-[#2A2C33] dark:text-white">
                  {item.name}
                </h2>
                <p className="font-normal text-sm italic text-naturalcolor2">
                  {item.userName}
                </p>
              </div>
              <ButtonFollow>Follow</ButtonFollow>
            </div>
            <div className="flex bg-[#F7F7F7] w-[14.75rem] items-center justify-center h-[3.625rem] ml-[0.625rem] rounded-[0.625rem] dark:bg-naturalcolor2 dark:bg-opacity-10 dark:shadow-2xl">
              <div className="right-[1.313rem] relative">
                <p className="ml-[0.840rem] font-semibold text-base dark:text-white">
                  {item.created}
                </p>
                <p className="font-medium text-sm text-naturalcolor2">
                  Created
                </p>
              </div>
              <div>
                <p className="font-semibold text-base  dark:text-white">
                  {item.sold}
                </p>
                <p className="font-medium text-sm text-naturalcolor2 left-[0.8rem] relative">
                  Sold
                </p>
              </div>
              <div className="left-[1.313rem] relative">
                <p className="font-semibold text-base left-[1rem] relative dark:text-white">
                  {item.followers}
                </p>
                <p className="font-medium text-sm text-naturalcolor2">
                  Followers
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
CardCreator.propTypes = {
  image: PropTypes.string,
  imageCard: PropTypes.string,
};
export default CardCreator;

import React from 'react';

const DashboardBanner = () => {
  return (
    <div className="flex ml-[40px] relative mt-[46px] mr-10 overflow-hidden">
      <img
        srcSet="/banner.png 4x"
        alt=""
        className="w-[766px] h-[207px] rounded-[10px]"
      />
      <div className="flex absolute flex-col px-5 text-[#E4E4E4]">
        <span
          style={{ fontFamily: 'Epilogue' }}
          className="font-bold text-2xl text-white mt-7 pb-[2px] select-none"
        >
          Keep calm & collect your NFTs 😎
        </span>
        <span
          style={{ fontFamily: 'Urbanist' }}
          className="font-bold text-[#e4e4e4] text-base select-none"
        >
          The future of digital collectibles is here.
        </span>
        <div>
          <button className="w-[141px] h-[44px] bg-white text-[#2A2C33] rounded-xl text-base mt-[45px] mr-4 font-bold">
            Explore
          </button>
          <button
            className="w-[130px] h-[44px] bg-[rgba(255,_255,_255,_0.1)] rounded-[10px] text-base mt-[45px] transition-all hover:-translate-y-1 hover:scale-100 hover:bg-primary font-bold"
            style={{
              boxShadow: 'inset 0px 2px 8px rgba(255, 255, 255, 0.25)',
            }}
          >
            Learn More
          </button>
          <img
            src="/animation.gif"
            alt=""
            className="w-[349px] h-[270px] mix-blend-screen ml-[390px] translate-y-[-185px] -scale-x-100 translate-x-[40px]"
          />
          <img
            src="/image.gif"
            alt=""
            className="-scale-x-100 w-[126px] h-[95px] mix-blend-screen absolute left-[1px] top-[112px]"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardBanner;

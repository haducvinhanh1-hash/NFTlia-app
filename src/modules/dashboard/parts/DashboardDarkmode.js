import React from 'react';
import Label from '../../../components/label/Label';
import IconDarkmode from '../../../components/icons/IconDarkmode';
import useDarkMode from '../../../hooks/useDarkmode';
import useLocalStorage from '../../../hooks/useLocalStorage';

const DashboardDarkmode = ({ toggle = true, className = '' }) => {
  const [toggleDarkmode, setToggleDarkmode] = useLocalStorage(true);
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div>
      <div className=" flex mt-[35px] px-[42px] mb-[18px] items-center gap-x-4">
        {colorTheme === 'light' ? (

          <Label className={`mb-[7px] select-none ${className}`}>
            <svg
              width="23"
              height="25"
              viewBox="0 0 23 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                setTheme(colorTheme);
                setToggleDarkmode(!toggleDarkmode);
              }}
            >
              <path
                d="M12.5 25C16.3556 25 19.8769 23.2459 22.2098 20.3715C22.5549 19.9463 22.1786 19.3251 21.6453 19.4267C15.5807 20.5816 10.0114 15.9317 10.0114 9.80977C10.0114 6.2833 11.8992 3.04048 14.9673 1.29443C15.4403 1.02529 15.3213 0.308252 14.7839 0.208984C14.0306 0.070065 13.2661 0.000114079 12.5 0C5.60015 0 0 5.59136 0 12.5C0 19.3999 5.59136 25 12.5 25Z"
                fill="currentColor"
              />
            </svg>
          </Label>
        ) : (
          <Label className={`mb-[7px] select-none ${className}`}>
            <IconDarkmode
              onClick={() => {
                setTheme(colorTheme);
                setToggleDarkmode(!toggleDarkmode);
              }}
            ></IconDarkmode>
          </Label>
        )}
        {toggle && (
          <label>
            <input
              type="checkbox"
              className="hidden"
              onClick={() => {
                setToggleDarkmode(!toggleDarkmode);
                setTheme(colorTheme);
              }}
            />
            <div
              className={`inline-block w-[66px] h-[28px] relative cursor-pointer rounded-full pl-1 py-[4px] transition-all bg-[#E4E4E4] ${
                colorTheme === 'light' ? ' bg-[#12141B]' : ''
              }`}
            >
              <span
                style={{
                  transition:
                    'background-color 0.25s linear, transform 0.25s linear',
                }}
                className={` w-[20px] h-[20px] bg-primary rounded-full inline-block border-2 border-white absolute shadow-[0px_3px_4px_rgba(0,_0,_0,_0.14)] ${
                  colorTheme === 'light' ? 'translate-x-[38px]' : ''
                }`}
              ></span>
            </div>
          </label>
        )}
      </div>
    </div>
  );
};

export default DashboardDarkmode;

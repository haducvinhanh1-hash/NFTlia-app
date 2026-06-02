import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard/src';
import IconCopy from '../../icons/IconCopy';

const Blur = ({ show = false }) => {
  return (
    <div className="flex">
      {show ? (
        <div
          className="blur-card"
          style={{
            backdropFilter: 'blur(14.7676px)',
            background:
              'radial-gradient(55.46% 91.9% at 50% 38.1%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.432) 100%)',
            boxShadow:
              'inset 0px 5.53786px 13.8447px rgba(255, 255, 255, 0.23)',
          }}
        >
          <h3
            className="font-bold ml-[43px] text-white mt-[14px]"
            style={{ fontSize: '18px', lineHeight: '26px' }}
          >
            jubed_ahmed
          </h3>
          <p
            className="font-normal text-white ml-[43px] flex mt-1"
            style={{ fontSize: '12.3787px', lineHeight: '18px' }}
          >
            {'0x495B957B31f4D002E193CB71cc5d8E804A22Ea4C'.slice(0, 18) +
              '...' +
              '0x495B957B31f4D002E193CB71cc5d8E804A22Ea4C'.slice(34, 38)}{' '}
            <CopyToClipboard
              text={'0x495B957B31f4D002E193CB71cc5d8E804A22Ea4C'}
            >
              <IconCopy className="ml-[9px] cursor-pointer"></IconCopy>
            </CopyToClipboard>
          </p>
        </div>
      ) : (
        <div className="hidden"></div>
      )}
    </div>
  );
};

export default Blur;

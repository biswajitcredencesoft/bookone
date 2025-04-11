import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const HeroCarosal = () => {
  return (
    <div className="w-[1194px] h-[383px] flex items-center justify-between mx-auto">
    
      <div className="w-[187px] h-[383px] flex-shrink-0">
        <Image
          src={assets.MobileLogo}
          alt="Mobile App"
          width={187}
          height={383}
          className="w-[187px] h-[383px] object-contain"
        />
      </div>

    
      <div className="flex flex-col justify-center gap-6 max-w-[316px] mx-4">
        <div className="flex flex-col gap-1">
          <span className="text-[#146683] text-lg font-semibold leading-tight">
            On-the-go
          </span>
          <h1 className="text-[#146683] text-[40px] font-extrabold leading-[110%]">
            Mobile App
          </h1>
        </div>
        <p className="text-[#818181] text-[16px] font-normal leading-[110%] w-[316px] h-[36px]">
          Manage your entire property on-the-go with our sleek, all-in-one mobile app.
        </p>
        <div className="flex gap-4">
          <Image
            src={assets.AppStore}
            alt="App Store"
            width={111}
            height={33}
            className="w-[111px] h-[33px] object-contain"
          />
          <Image
            src={assets.GooglePlay}
            alt="Google Play"
            width={111}
            height={33}
            className="w-[111px] h-[33px] object-contain"
          />
        </div>
      </div>

      
      <div className="flex items-center gap-[10px] h-[220px]">
        <Image
          src={assets.AllInOne}
          alt="All in One"
          width={220}
          height={220}
          className="h-[220px] w-[220px] object-cover rounded-lg shadow"
        />
        <Image
          src={assets.BuiltToScale}
          alt="Built to Scale"
          width={220}
          height={220}
          className="h-[220px] w-[220px] object-cover rounded-lg shadow"
        />
        <Image
          src={assets.IntegrationExperts}
          alt="Integration Experts"
          width={220}
          height={220}
          className="h-[220px] w-[220px] object-cover rounded-lg shadow"
        />
      </div>
    </div>
  );
};

export default HeroCarosal;

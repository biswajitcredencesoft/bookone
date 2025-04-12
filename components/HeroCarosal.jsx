'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const leftData = [
  {
    logo: assets.MobileLogo,
    title: 'Mobile App',
    subtitle: 'On-the-go',
    description: 'Manage your entire property on-the-go with our sleek, all-in-one mobile app.',
  },  
];



const HeroCarosal = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % leftData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const currentData = leftData[current];

  return (
    <div className="bg-[#f3f3f3] py-8 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* LEFT SECTION */}
        <div className="flex flex-row items-center gap-6 transition-all duration-500 ease-in-out w-full lg:max-w-[55%]">
          <div className="w-[187px] h-[383px] relative flex-shrink-0">
            <Image
              src={currentData.logo}
              alt={currentData.title}
              fill
              className="object-contain"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-[#146683] text-lg font-semibold">{currentData.subtitle}</span>
              <h1 className="text-[#146683] text-2xl md:text-[32px] lg:text-[40px] font-extrabold leading-tight">
                {currentData.title}
              </h1>
            </div>
            <p className="text-[#818181] text-[16px] max-w-[316px]">{currentData.description}</p>

            {current === 0 && (
              <div className="flex gap-4 mt-2">
                <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src={assets.AppStore}
                    alt="App Store"
                    width={111}
                    height={33}
                    className="object-contain"
                  />
                </a>
                <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src={assets.PlayStore}
                    alt="Play Store"
                    width={111}
                    height={33}
                    className="object-contain"
                  />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full lg:w-[45%] flex justify-center overflow-x-auto lg:overflow-visible">
          <div className="flex flex-row  min-w-[750px] lg:min-w-full justify-center ">
           
              <div
                
                className="w-[550px] h-[250px] rounded-[20px]  relative overflow-hidden flex-shrink-0"
 
              >
                <Image
                  src={assets.Carosall}
                  alt="right section"
                  layout="fill"
                  className="object-cover rounded-[20px]"
                />
               
              </div>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroCarosal;

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
    <div className="bg-[#f3f3f3] py-0 lg:py-2 px-8 md:px-4 lg:px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* MOBILE VIEW ONLY */}
        <div className="flex sm:hidden flex-row items-center justify-between gap-4 w-full">
          {/* Mobile Image */}
          <div className="w-[120px] h-[240px] relative flex-shrink-0">
            <Image
              src={currentData.logo}
              alt={currentData.title}
              fill
              className="object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-2">
            <span className="text-[#146683] text-sm font-semibold">{currentData.subtitle}</span>
            <h1 className="text-[#146683] text-xl font-extrabold">{currentData.title}</h1>
            <p className="text-[#818181] text-xs leading-snug max-w-[180px]">
              {currentData.description}
            </p>

            {/* App Store Buttons */}
            <div className="flex gap-2 mt-1">
              <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer">
                <Image
                  src={assets.AppStore}
                  alt="App Store"
                  width={90}
                  height={30}
                  className="object-contain"
                />
              </a>
              <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer">
                <Image
                  src={assets.PlayStore}
                  alt="Play Store"
                  width={90}
                  height={30}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        {/* DEFAULT VIEW FOR TABLET & DESKTOP */}
        <div className="hidden sm:flex flex-col lg:flex-row items-center justify-between gap-10 w-full mt-10">
          {/* LEFT SECTION */}
          <div className="flex flex-row items-center gap-6 w-full lg:max-w-[55%]">
            <div className="w-[160px] md:w-[187px] h-[320px] md:h-[383px] relative flex-shrink-0">
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

              <div className="flex gap-4 mt-2 flex-wrap">
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
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="w-full hidden md:block lg:w-[45%] justify-center">
            <div className="w-full max-w-[550px] h-[250px] relative overflow-hidden rounded-[20px]">
              <Image
                src={assets.Carosall}
                alt="right section"
                fill
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

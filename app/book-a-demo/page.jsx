'use client';

import { FaBuilding } from 'react-icons/fa';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { PiBrowserLight } from 'react-icons/pi';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ExpectDemo from './expect-demo/page';
import ServicesGive from './services-give/page';
import KeepUp from './keep-up/page';

import { useEffect } from 'react';

const BookDemo = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Navbar />

      <div className="bg-[#0D6C80] text-white px-4 py-16">
        <div className="max-w-[87rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
          {/* Left Section */}
          <div className="flex flex-col justify-center gap-8">
            <h1 className="text-white font-bold text-[32px] md:text-[48px] leading-[150%] max-w-[476px]">
              Get A Personalised <br /> Product Demo
            </h1>

            <p className="text-white font-semibold text-[18px] md:text-[24px] leading-[150%] max-w-[631px]">
              Our suite is designed to offer 360-degree value <br className="hidden md:block" />
              across your entire property, simplifying processes and <br className="hidden md:block" />
              boosting profitability from day one.
            </p>

            {/* Feature Boxes */}
            <div className="flex flex-wrap gap-4 md:gap-6">
              {/* PMS Box */}
              <div className="w-[140px] h-[110px] md:w-[149px] md:h-[119px] bg-white rounded-[20px] flex flex-col items-center justify-center shadow-inner text-center opacity-90 hover:opacity-100 transition-all">
                <FaBuilding className="text-[#0D6C80] text-3xl mb-2" />
                <span className="text-[#0D6C80] text-sm font-semibold">PMS</span>
              </div>

              {/* Channel Manager */}
              <div className="w-[140px] h-[110px] md:w-[149px] md:h-[119px] bg-white rounded-[20px] flex flex-col items-center justify-center shadow-inner text-center opacity-90 hover:opacity-100 transition-all">
                <BsGrid3X3GapFill className="text-[#0D6C80] text-3xl mb-2" />
                <span className="text-[#0D6C80] text-sm font-semibold leading-tight">
                  Channel <br /> Manager
                </span>
              </div>

              {/* Website/Booking Engine */}
              <div className="w-[140px] h-[110px] md:w-[149px] md:h-[119px] bg-white rounded-[20px] flex flex-col items-center justify-center shadow-inner text-center opacity-90 hover:opacity-100 transition-all">
                <PiBrowserLight className="text-[#0D6C80] text-3xl mb-2" />
                <span className="text-[#0D6C80] text-sm font-semibold leading-tight">
                  Website <br /> Booking Engine
                </span>
              </div>
            </div>
          </div>

          {/* Right Form Section (Typeform) */}
          <div className="flex justify-center items-center py-6 px-4">
            <div className="w-full max-w-[500px] bg-white rounded-xl shadow-lg p-4 md:p-6 overflow-hidden">
              <div
                data-tf-live="01JRF9R3GQ5PXE6D40TM50PZVA"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <ExpectDemo />
      <ServicesGive />
      <KeepUp />
      <Footer />
    </>
  );
};

export default BookDemo;

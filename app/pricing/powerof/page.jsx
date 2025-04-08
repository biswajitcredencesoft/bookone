'use client';

import { FaArrowRight } from "react-icons/fa6";
import { FaGlobeAsia } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineManageSearch } from "react-icons/md";
import { PiStorefrontBold } from "react-icons/pi";
import { TbSeo } from "react-icons/tb";

const PowerOf = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-[#002244] mb-4">
            Add on & Power Up!
          </h2>
          <p className="text-[#4A4A4A] text-lg mb-6 max-w-md">
            Our add-on services are built to expand your capabilities and deliver
            360° value across your hotel.
          </p>
          <button className="flex items-center gap-2 bg-white border border-[#007BBD] text-[#007BBD] px-6 py-2.5 rounded-full shadow hover:bg-[#EAF6FF] transition-all">
            <FaArrowRight className="text-[#007BBD]" /> Explore more
          </button>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#005B7F] text-white rounded-xl px-5 py-6 flex items-start gap-3 min-h-[90px]">
            <FaGlobeAsia className="text-2xl mt-1" />
            <span className="font-medium leading-tight">OTA Setup & Optimisation</span>
          </div>
          <div className="bg-[#B2E0F7] text-[#002244] rounded-xl px-5 py-6 flex items-start gap-3 min-h-[90px]">
            <MdOutlineManageSearch className="text-2xl mt-1" />
            <span className="font-medium leading-tight">Online Reputation Management</span>
          </div>
          <div className="bg-[#CBEAF9] text-[#002244] rounded-xl px-5 py-6 flex items-start gap-3 min-h-[90px]">
            <BsGraphUpArrow className="text-2xl mt-1" />
            <span className="font-medium leading-tight">Digital Marketing</span>
          </div>
          <div className="bg-[#005B7F] text-white rounded-xl px-5 py-6 flex items-start gap-3 min-h-[90px]">
            <PiStorefrontBold className="text-2xl mt-1" />
            <span className="font-medium leading-tight">Google Business Listing</span>
          </div>
          <div className="bg-[#005B7F] text-white rounded-xl px-5 py-6 flex items-start gap-3 min-h-[90px]">
            <TbSeo className="text-2xl mt-1" />
            <span className="font-medium leading-tight">Web Search Optimisation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerOf;
"use client";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaSync } from "react-icons/fa";
import { BiBlock } from "react-icons/bi";
import { SiSimpleanalytics } from "react-icons/si";
import { SlGraph } from "react-icons/sl";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Link from "next/link";

const Connectivity = () => {
  return (
    <>
      <div className="bg-[#EDF6FA] px-4 sm:px-6 lg:px-8 py-12 font-['Inter']">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
            <h2 className="text-[#146683] text-[32px] sm:text-[40px] lg:text-[46px] font-bold leading-[150%]">
              Smarter Connectivity
              <br /> for More Bookings
            </h2>

            <p className="text-[#146683] mt-2 lg:mt-8 text-[18px] sm:text-[20px] lg:text-[24px] leading-[130%] max-w-xl">
              Distribute smarter. Automate the <br />
              updates, surface booking issues, and
              <br />
              keep inventory aligned—everywhere.
            </p>

            <div className="mt-4 lg:mt-8">
              <Link href="/pricing">
                <button className="w-[200px] h-[45px] rounded-[16px] border border-[#CEE6F0] bg-[#01677D] text-white font-semibold text-[16px]">
                  Get Pricing
                </button>
              </Link>
            </div>
          </div>

          <div className="mt-12 flex flex-col lg:flex-row gap-10 items-start">
            <div className="w-full lg:w-[493px] h-[323px] rounded-[20px] overflow-hidden flex-shrink-0">
              <Image
                src={assets.Manager4}
                alt="Efficiency"
                className="w-full h-full object-cover rounded-[20px]"
              />
            </div>

            <div className="flex-1 mt-10 lg:mt-16 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-center gap-4">
                    <div className="w-[80px] h-[77px] flex items-center justify-center bg-[rgba(191,233,255,0.20)] shadow-md rounded-[12px] flex-shrink-0">
                      <div className="w-[56px] h-[56px] aspect-square text-[#01677D] text-[28px] flex items-center justify-center">
                        {feature.icon}
                      </div>
                    </div>

                    <span className="text-[#171C1E] text-[18px] sm:text-[20px] leading-[130%]">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const features = [
  {
    title: "Real-time Updates",
    icon: <AiOutlineFieldTime />,
  },
  {
    title: "Auto OTA Sync",
    icon: <FaSync />,
  },
  {
    title: "Avoid Overbookings",
    icon: <BiBlock />,
  },
  {
    title: "Analytics & Reporting",
    icon: <SiSimpleanalytics />,
  },
  {
    title: "Integrate With Leading OTAs",
    icon: <SlGraph />,
  },
];

export default Connectivity;

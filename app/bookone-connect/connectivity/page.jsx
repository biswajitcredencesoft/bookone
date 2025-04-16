"use client";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaSync } from "react-icons/fa";
import { BiBlock } from "react-icons/bi";
import { SiSimpleanalytics } from "react-icons/si";
import { SlGraph } from "react-icons/sl";
import Image from "next/image";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useContentful } from "@/app/bookone-connect/contentfulBookoneConnect";
import { assets } from "@/assets/assets";

const Connectivity = () => {
  const contentful = useContentful();

  if (!contentful || !contentful.connectData) return <p>Loading ...</p>;

  const { connectData } = contentful;

  return (
    <div className="bg-[#EDF6FA] px-4 sm:px-6 lg:px-8 py-14 font-['Inter']">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
          <h2 className="text-[#146683] text-[23px] text-center sm:text-[40px] lg:text-[38px] font-bold leading-[150%] w-full md:w-[400px]">
            {connectData?.connectSecondHeading}
          </h2>

          <p className="text-[#146683] mt-2 lg:mt-8 text-[16px] sm:text-[18px] lg:text-[20px] leading-[130%] max-w-xl hidden md:block">
            {documentToReactComponents(connectData?.connectsecondParagrph)}
          </p>

          <div className="mt-4 lg:mt-8 hidden md:block">
            <Link href="/pricing">
              <button className="w-[200px] h-[45px] rounded-[16px] border border-[#CEE6F0] bg-[#01677D] text-white font-semibold text-[16px]">
                Get Pricing
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col lg:flex-row gap-10 items-start">
          <div className="w-full lg:w-[493px] h-[50%] rounded-[20px] overflow-hidden flex-shrink-0">
            <Image
              src={`https:${connectData?.connectSecondImage.fields.file.url}`}
              width={700}
              height={700}
              unoptimized 
              alt="Efficiency"
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>

          <div className="flex-1 mt-10 lg:mt-16 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex items-center gap-4 sm:gap-4 lg:gap-6 
                    ${
                      index === features.length - 1
                        ? "col-span-2 justify-center md:col-span-1 md:justify-start"
                        : "justify-start"
                    }
                  `}
                >
                  <div className="w-[60px] sm:w-[70px] lg:w-[80px] p-2 flex items-center justify-center bg-[rgba(191,233,255,0.20)] shadow-md rounded-[12px]">
                    <div className="w-[40px] sm:w-[50px] lg:w-[56px] flex items-center justify-center text-[#01677D] text-[24px] sm:text-[28px] lg:text-[30px]">
                      {feature.icon}
                    </div>
                  </div>

                  <span className="text-[#171C1E] text-[14px] sm:text-[16px] lg:text-[18px] leading-[130%] max-w-[150px] sm:max-w-[200px] lg:max-w-none">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Mobile 'Get Pricing' button */}
            <div className="mt-6 lg:mt-8 block sm:hidden text-center">
              <Link href="/pricing">
                <button className="w-[200px] h-[45px] rounded-[16px] border border-[#CEE6F0] bg-[#01677D] text-white font-semibold text-[16px]">
                  Get Pricing
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    title: "Real-time Updates",
    icon: (
      <Image
        src={assets.RealTime}
        alt="Real-time Updates"
        className="w-[2.5rem] h-[2.5rem]"
      />
    ),
  },
  {
    title: "Auto OTA Sync",
    icon: (
      <Image
        src={assets.WorldTimer}
        alt="Auto OTA Sync"
        className="w-[2.5rem] h-[2.5rem]"
      />
    ),
  },
  {
    title: "Avoid Overbookings",
    icon: (
      <Image
        src={assets.CancelImage}
        alt="Avoid Overbookings"
        className="w-[2.5rem] h-[2.5rem]"
      />
    ),
  },
  {
    title: "Analytics & Reporting",
    icon: (
      <Image
        src={assets.AnalyticsReport}
        alt="Analytics & Reporting"
        className="w-[2.5rem] h-[2.5rem]"
      />
    ),
  },
  {
    title: "Integrate With Leading OTAs",
    icon: (
      <Image
        src={assets.Graphics}
        alt="Integrate With Leading OTAs"
        className="w-[2.5rem] h-[2.5rem]"
      />
    ),
  },
];

export default Connectivity;

"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { assets } from "@/assets/assets";
import { useContentful } from "@/components/ContentfulContext";

const BookOneDetails = () => {
  const { heroData } = useContentful();
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  const hoverTimeout = useRef(null);

  const tabButtons = [
    { label: "OPERATIONS & MANAGEMENT" },
    { label: "MARKETING & CONNECTIVITY" },
    { label: "GUEST MANAGEMENT" },
    { label: "PRICING & AI AUTOMATION" },
  ];

  const tabContent = [
    [
      {
        icon: <Image alt="Operation1" src={assets.Operation1} />,
        title: "BookOne PMS",
        path: "/bookone-pms",
      },
      {
        icon: <Image alt="Operation2" src={assets.Operation2} />,
        title: "BookOne POS",
        path: "/bookone-pos",
      },
      {
        icon: <Image alt="Operation3" src={assets.Operation3} />,
        title: "Google Business Setup",
        path: "/google-business-setup",
      },
      {
        icon: <Image alt="Operation4" src={assets.Operation4} />,
        title: "OTA Setup",
        path: "/ota-setup",
      },
    ],
    [
      {
        icon: <Image alt="Marketing1" src={assets.Marketing1}/>,
        title: "Channel Manager",
        path: "/bookone-connect",
      },
      {
        icon: <Image alt="Marketing2" src={assets.Marketing2}/>,
        title: "Digital Marketing",
        path: "/digital-marketing",
      },
      {
        icon: <Image alt="Marketing3" src={assets.Marketing3}/>,
        title: "Online Reputation Management",
        path: "/online-repution-management",
      },
      {
        icon: <Image alt="Marketing4" src={assets.Marketing4}/>,
        title: "Online Menu",
        path: "/online-menu",
      },
    ],
    [
      {
        icon: <Image alt="Guest1" src={assets.Guest1}/>,
        title: "BookOne CRM",
        path: "/guest-app",
      },
      {
        icon: <Image alt="Guest2" src={assets.Guest2}/>,
        title: "BookOne Loyality",
        path: "/room-service",
      },
  
    ],
    [
      {
        icon: <Image alt="Automation" src={assets.Automation}/>,
        title: "BookOne VaRO",
        path: "/bookone-varo",
      },
    ],
  ];

  useEffect(() => {
    return () => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    };
  }, []);

  const handleHover = (index) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setActiveTab(index);
    }, 100);
  };

  if (!heroData) return <p>Loading hero section...</p>;

  return (
    <div className="bg-[#0E6B81] text-white py-12 px-4 md:px-16 font-Inter overflow-hidden">
      <h2 className="text-white text-center lg:text-left text-[32px] sm:text-[38px] md:text-[46px] font-bold leading-[150%] mb-6">
        {heroData?.secondHeading}
      </h2>

      <div className="flex justify-start gap-1 mb-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {tabButtons.map((tab, index) => (
          <div
            key={index}
            className={`group relative flex-shrink-0 text-center transition-all duration-300 ease-in-out 
        ${activeTab === index ? "border-none" : "border-b-2 border-transparent"}
      `}
            onMouseEnter={() => handleHover(index)}
            onClick={() => setActiveTab(index)}
          >
            {/* {activeTab === index && (
              <svg
                className="absolute top-full left-0 w-full h-[10px] z-0 pointer-events-none"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,10 Q50,0 100,10"
                  fill="white"
                  stroke="white"
                  strokeWidth="1"
                />
              </svg>
            )} */}
            <button
              className={`relative z-10 text-sm md:text-base font-semibold py-3 px-6 transition-all duration-300 ease-in-out 
          w-full
          ${activeTab === index ? "scale-x-105" : "scale-x-100"} 
          ${
            activeTab === index
              ? "bg-[#0E6B81] text-white border-2 border-white"
              : "bg-white text-[#0E6B81] border-2 border-white"
          }
          ${
            index === 0
              ? "rounded-tl-[10px] rounded-tr-[10px]"
              : "rounded-tr-[10px]"
          }
        `}
              style={{ minWidth: "347px" }}
            >
              {tab.label}
            </button>
          </div>
        ))}
      </div>

     
      <div className="flex flex-col lg:flex-row items-start gap-[13px] transition-all duration-700 ease-in-out">
        {/* Left Image */}
        <div
          className="rounded-[24px] overflow-hidden shadow-lg flex-shrink-0"
          style={{ width: "603px", height: "404px" }}
        >
          <Image
            src={assets.hero}
            alt="Reception"
            width={603}
            height={404}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[115px] gap-y-[50px] ml-12 mt-4">
          {tabContent[activeTab].map((item) => (
            <div
              key={item.title}
              className="relative bg-white border border-[#CEE6F0] rounded-[9px] p-3 flex items-center text-left shadow-md"
              style={{
                width: "222px",
                height: "140px",
                flexShrink: 0,
              }}
            >
              <div
                className="flex items-center justify-center rounded-[8px] mr-3"
                style={{
                  width: "88px",
                  height: "97px",
                }}
              >
                <div className="text-white text-3xl">{item.icon}</div>
              </div>

             
              <div>
                <h3
                  className="font-Inter font-bold"
                  style={{
                    color: "#146683",
                    fontSize: "22px",
                    lineHeight: "22px",
                  }}
                >
                  {item.title}
                </h3>
              </div>

            
              <button
                onClick={() => router.push(item.path)}
                className="absolute bottom-3 right-3 bg-[#8CCFF0] rounded-full flex items-center justify-center"
                style={{
                  width: "28px",
                  height: "28px",
                  flexShrink: 0,
                }}
              >
                <Image
                  alt="PlayIcon"
                  src={assets.PlayIcon}
                  width={16}
                  height={16}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default BookOneDetails;

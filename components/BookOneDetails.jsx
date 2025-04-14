"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { assets } from "@/assets/assets";
import { createClient } from "contentful";
const client = createClient({
  space: "wzmo4lmp2r9v",
  accessToken: "8byVN6ybNsGaYJ6FUTB0CB4mwuie5fIX-DxWy1GGi6E",
});
const BookOneDetails = () => {
    const [heroData, setHeroData] = useState(null);
  
    useEffect(() => {
      async function fetchContent() {
        try {
          const res = await client.getEntries({ content_type: "homePage" });
          setHeroData(res.items[0]?.fields);
        } catch (err) {
          console.error("Contentful fetch error:", err);
        }
      }
  
      fetchContent();
    }, []);
      console.log("heroData",heroData)
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  const hoverTimeout = useRef(null);

  const tabButtons = [
    { label: "OPERATIONS & MANAGEMENT", icon: assets.Picture14 },
    { label: "MARKETING & CONNECTIVITY", icon: assets.Picture11 },
    { label: "GUEST MANAGEMENT", icon: assets.Picture12 },
    { label: "PRICING & AI AUTOMATION", icon: assets.Picture13 },
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
        icon: <Image alt="Marketing1" src={assets.Marketing1} />,
        title: "Channel Manager",
        path: "/bookone-connect",
      },
      {
        icon: <Image alt="Marketing2" src={assets.Marketing2} />,
        title: "Digital Marketing",
        path: "/digital-marketing",
      },
      {
        icon: <Image alt="Marketing3" src={assets.Marketing3} />,
        title: "Online Reputation Management",
        path: "/online-repution-management",
      },
      {
        icon: <Image alt="Marketing4" src={assets.Marketing4} />,
        title: "Online Menu",
        path: "/online-menu",
      },
    ],
    [
      {
        icon: <Image alt="Guest1" src={assets.Guest1} />,
        title: "BookOne CRM",
        path: "/guest-app",
      },
      {
        icon: <Image alt="Guest2" src={assets.Guest2} />,
        title: "BookOne Loyalty",
        path: "/room-service",
      },
    ],
    [
      {
        icon: <Image alt="Automation" src={assets.Automation} />,
        title: "BookOne VaRO",
        path: "/bookone-varo",
      },
    ],
  ];

  const tabImages = [assets.hero, assets.Marketing, assets.Guest, assets.Price];

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

  if (!heroData) return <p>Loading...</p>;

  return (
    <div className="bg-[#0E6B81] text-white py-12 px-4 md:px-16 font-Inter overflow-hidden">
      <h2 className="text-white text-center lg:text-left text-[24px] sm:text-[32px] md:text-[38px] font-bold leading-[140%] mb-6">
        {heroData?.secondHeading}
      </h2>

      {/* Desktop Tabs */}
      <div className="hidden md:flex justify-start gap-1 mb-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {tabButtons.map((tab, index) => (
          <div
            key={index}
            className={`group relative flex-shrink-0 text-center transition-all duration-300 ease-in-out 
              ${
                activeTab === index
                  ? "border-none"
                  : "border-b-2 border-transparent"
              }`}
            onMouseEnter={() => handleHover(index)}
            onClick={() => setActiveTab(index)}
          >
            <button
              className={`relative z-10 text-sm md:text-base font-semibold py-3 px-6 transition-all duration-300 ease-in-out 
                w-full
                ${activeTab === index ? "scale-x-105" : "scale-x-100"} 
                ${
                  activeTab === index
                    ? "bg-[#0E6B81] text-white border-2 border-white"
                    : "bg-white text-[#0E6B81] border-2 border-white"
                }`}
              style={{ minWidth: "347px" }}
            >
              {tab.label}
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-start gap-[13px] transition-all duration-700 ease-in-out">
        {/*  MOBILE VIEW */}
        <div className="md:hidden flex flex-row gap-4">
          <div className="flex flex-col justify-start items-center gap-3">
            {tabButtons.map((tab, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                  activeTab === index ? "bg-white shadow-md" : "bg-[#ffffff22]"
                }`}
              >
                <Image
                  src={tab.icon}
                  alt={`Tab ${index + 1}`}
                  width={28}
                  height={28}
                  className="transition-all duration-300"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 w-full">
            <p className="text-sm font-medium text-white text-center">
              {tabButtons[activeTab].label}
            </p>

            <div className="rounded-[16px] overflow-hidden w-full shadow-lg">
              <Image
                src={tabImages[activeTab]}
                alt="Tab Image"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-[16px]"
              />
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-2">
              {tabContent[activeTab].map((item) => (
                <div
                  key={item.title}
                  className="relative bg-white border border-[#CEE6F0] rounded-[8px] p-2 flex flex-col items-start text-left shadow-md"
                  style={{ height: "100px" }}
                >
                  <div className="mb-1 w-8 h-8">{item.icon}</div>
                  <h3 className="font-semibold text-xs text-[#146683] leading-tight">
                    {item.title}
                  </h3>
                  <button
                    onClick={() => router.push(item.path)}
                    className="absolute bottom-2 right-2 bg-[#8CCFF0] rounded-full flex items-center justify-center"
                    style={{ width: "22px", height: "22px" }}
                  >
                    <Image
                      alt="PlayIcon"
                      src={assets.PlayIcon}
                      width={12}
                      height={12}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*  DESKTOP VIEW */}
        <div className="hidden md:block rounded-[24px] overflow-hidden shadow-lg flex-shrink-0 mx-auto md:mx-0 w-full max-w-[603px]">
          <Image
            src={tabImages[activeTab]}
            alt="Tab Image"
            width={603}
            height={404}
            className="object-cover w-full h-auto md:h-full"
          />
        </div>

        {/* Desktop Cards */}
        <div className="hidden md:grid grid-cols-2 gap-x-[60px] gap-y-[30px] ml-0 md:ml-12 mt-6 md:mt-4 w-full">
          {tabContent[activeTab].map((item) => (
            <div
              key={item.title}
              className="relative bg-white border border-[#CEE6F0] rounded-[9px] p-3 flex items-center text-left shadow-md w-[222px] h-[140px] flex-shrink-0"
            >
              <div className="flex items-center justify-center rounded-[8px] mr-3 w-[88px] h-[97px]">
                {item.icon}
              </div>

              <div>
                <h3 className="font-Inter font-bold text-[22px] leading-[22px] text-[#146683]">
                  {item.title}
                </h3>
              </div>

              <button
                onClick={() => router.push(item.path)}
                className="absolute bottom-3 right-3 bg-[#8CCFF0] rounded-full flex items-center justify-center w-[28px] h-[28px]"
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

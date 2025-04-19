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
        disabled: true,
      },
      {
        icon: <Image alt="Operation3" src={assets.Operation3} />,
        title: "Google Business Setup",
        path: "/google-business-setup",
        disabled: true,
      },
      {
        icon: <Image alt="Operation4" src={assets.Operation4} />,
        title: "OTA Setup",
        path: "/ota-setup",
        disabled: true,
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
        disabled: true,
      },
      {
        icon: <Image alt="Marketing3" src={assets.Marketing3} />,
        title: "Online Reputation Management",
        path: "/online-repution-management",
        disabled: true,
      },
      {
        icon: <Image alt="Marketing4" src={assets.Marketing4} />,
        title: "Online Menu",
        path: "/online-menu",
        disabled: true,
      },
    ],
    [
      {
        icon: <Image alt="Guest1" src={assets.Guest1} />,
        title: "BookOne CRM",
        path: "/guest-app",
        disabled: true,
      },
      {
        icon: <Image alt="Guest2" src={assets.Guest2} />,
        title: "BookOne Loyalty",
        path: "/room-service",
        disabled: true,
      },
    ],
    [
      {
        icon: <Image alt="Automation" src={assets.Automation} />,
        title: "BookOne VaRO",
        path: "/bookone-varo",
        disabled: true,
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth < 768) {
        setActiveTab((prevTab) => (prevTab + 1) % tabButtons.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (!heroData) return <p>Loading...</p>;

  return (
    <div className="bg-[rgba(130,179,195,0.2)] text-white py-12 px-4 md:px-16 font-Inter overflow-hidden">
      <h2 className="text-[#146683] text-center lg:text-left text-[24px] sm:text-[32px] md:text-[38px] font-bold leading-[140%] mb-6">
        {heroData?.secondHeading}
      </h2>

      {/* Desktop Tabs */}
      <div className="hidden md:flex justify-start gap-1 mb-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {tabButtons.map((tab, index) => (
          <div
            key={index}
            className={`group relative flex-shrink-0 text-center transition-all duration-300 ease-in-out ${
              activeTab === index ? "border-none" : "border-b-2 border-transparent"
            }`}
            onMouseEnter={() => handleHover(index)}
            onClick={() => setActiveTab(index)}
          >
            <button
              className={`relative z-10 text-sm md:text-base font-semibold py-3 px-6 transition-all duration-300 ease-in-out
                w-full rounded-t-[16px] border-t-4 border-l-4 border-r-4
                ${activeTab === index ? "scale-y-105" : "scale-y-100"}
                ${
                  activeTab === index
                    ? "bg-[rgba(130,179,195,0.2)]  text-[#146683]  border-[#82B3C3]"
                    : "bg-white text-[#0E6B81] border-white"
                }`}
              style={{ minWidth: "347px" }}
            >
              {tab.label}
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-start gap-[13px] transition-all duration-700 ease-in-out">
        {/* Mobile View */}
        <div className="md:hidden flex flex-row gap-4">
          <div className="flex flex-col justify-start items-center gap-3">
            {tabButtons.map((tab, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                  activeTab === index
                    ? "bg-[rgba(130,179,195,0.2)] border-[#82B3C3] border-2"
                    : "bg-[#ffffff]"
                }`}
              >
                <Image src={tab.icon} alt={`Tab ${index + 1}`} width={28} height={28} />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 w-full">
            <p className="text-sm font-medium text-[#0E6B81] text-center">
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

            <div className="grid grid-cols-2 gap-6">
              {tabContent[activeTab].map((item) => (
                <div
                  key={item.title}
                  className={`relative border rounded-[8px] p-2 flex flex-col items-start text-left shadow-md ${
                    item.disabled ? "bg-gray-200 border-gray-300" : "bg-white border-[#CEE6F0]"
                  }`}
                  style={{ height: "100px", opacity: item.disabled ? 0.6 : 1 }}
                >
                  <div className="mb-1 w-8 h-8">{item.icon}</div>
                  <h3 className="font-semibold text-xs text-[#146683] leading-tight">
                    {item.title}
                  </h3>

                  {item.disabled ? (
                    <span className="absolute bottom-2 right-2 text-[10px] px-2 py-[2px] bg-[#8CCFF0] text-[#146683] rounded-full">
                      Coming Soon
                    </span>
                  ) : (
                    <button
                      onClick={() => router.push(item.path)}
                      className="absolute bottom-2 right-2 bg-[#8CCFF0] rounded-full flex items-center justify-center"
                      style={{ width: "22px", height: "22px" }}
                    >
                      <Image alt="PlayIcon" src={assets.PlayIcon} width={12} height={12} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block rounded-[24px] overflow-hidden shadow-lg flex-shrink-0 mx-auto md:mx-0 w-full max-w-[603px]">
          <Image
            src={tabImages[activeTab]}
            alt="Tab Image"
            width={603}
            height={404}
            className="object-cover w-full h-auto md:h-full"
          />
        </div>

        <div className="hidden md:grid grid-cols-2 gap-x-[60px] gap-y-[30px] ml-0 md:ml-12 mt-6 md:mt-4 w-full">
          {tabContent[activeTab].map((item) => (
            <div
              key={item.title}
              className={`relative border rounded-[9px] p-3 flex items-center text-left shadow-md w-[270px] h-[160px] flex-shrink-0 ${
                item.disabled ? "bg-gray-200 border-gray-300" : "bg-white border-[#CEE6F0]"
              }`}
              style={{ opacity: item.disabled ? 0.6 : 1 }}
            >
              <div className="flex items-center justify-center rounded-[8px] mr-3 w-[88px] h-[97px]">
                {item.icon}
              </div>
              <div>
                <h3 className="font-Inter font-bold text-[22px] leading-[22px] text-[#146683]">
                  {item.title}
                </h3>
              </div>
              {item.disabled ? (
                <span className="absolute bottom-3 right-3 text-xs px-2 py-1 bg-[#8CCFF0] text-[#146683] rounded-full">
                  Coming Soon
                </span>
              ) : (
                <button
                  onClick={() => router.push(item.path)}
                  className="absolute bottom-3 right-3 bg-[#8CCFF0] rounded-full flex items-center justify-center w-[28px] h-[28px]"
                >
                  <Image alt="PlayIcon" src={assets.PlayIcon} width={16} height={16} />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookOneDetails;

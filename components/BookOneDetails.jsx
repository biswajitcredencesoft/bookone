"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FaMobileAlt,
  FaGoogle,
} from "react-icons/fa";
import {
  MdOutlineRestaurant,
  MdCloud,
  MdCampaign,
  MdReviews,
  MdOutlineDashboard,
} from "react-icons/md";
import { RiPriceTag2Fill } from "react-icons/ri";
import { BiNetworkChart } from "react-icons/bi";
import { assets } from "@/assets/assets";

const BookOneDetails = () => {
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
        icon: <MdOutlineDashboard className="text-3xl sm:text-4xl" />,
        title: "BookOne PMS",
        path: "/bookone-pms",
      },
      {
        icon: <MdOutlineRestaurant className="text-3xl sm:text-4xl" />,
        title: "BookOne POS",
        path: "/bookone-pos",
      },
      {
        icon: <FaGoogle className="text-3xl sm:text-4xl" />,
        title: "Google Business Setup",
        path: "/google-business-setup",
      },
      {
        icon: <FaMobileAlt className="text-3xl sm:text-4xl" />,
        title: "OTA Setup",
        path: "/ota-setup",
      },
    ],
    [
      {
        icon: <BiNetworkChart className="text-3xl sm:text-4xl" />,
        title: "Channel Manager",
        path: "/bookone-connect",
      },
      {
        icon: <MdCampaign className="text-3xl sm:text-4xl" />,
        title: "Digital Marketing",
        path: "/digital-marketing",
      },
      {
        icon: <MdReviews className="text-3xl sm:text-4xl" />,
        title: "Online Reputation Management",
        path: "/online-repution-management",
      },
      {
        icon: <MdOutlineRestaurant className="text-3xl sm:text-4xl" />,
        title: "Online Menu",
        path: "/online-menu",
      },
    ],
    [
      {
        icon: <FaMobileAlt className="text-3xl sm:text-4xl" />,
        title: "BookOne CRM",
        path: "/guest-app",
      },
      {
        icon: <MdOutlineRestaurant className="text-3xl sm:text-4xl" />,
        title: "Room Service",
        path: "/room-service",
      },
      {
        icon: <MdCloud className="text-3xl sm:text-4xl" />,
        title: "Digital Check-In",
        path: "/digital-check-in",
      },
      {
        icon: <FaGoogle className="text-3xl sm:text-4xl" />,
        title: "Reviews Manager",
        path: "/reviews-manager",
      },
    ],
    [
      {
        icon: <RiPriceTag2Fill className="text-3xl sm:text-4xl" />,
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

  return (
    <div className="bg-[#0E6B81] text-white py-12 px-4 md:px-16 font-Inter overflow-hidden">
      <h2 className="text-white text-center lg:text-left text-[32px] sm:text-[38px] md:text-[46px] font-bold leading-[150%] mb-6">
        BookOne Does It All!
      </h2>

      {/* Tab Buttons */}
      <div className="flex justify-start gap-4 mb-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {tabButtons.map((tab, index) => (
          <div
            key={index}
            className="relative min-w-[180px] text-center flex-shrink-0"
            onMouseEnter={() => handleHover(index)}
            onClick={() => setActiveTab(index)}
          >
            {activeTab === index && (
              <svg
                className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
                viewBox="0 0 200 60"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,60 Q100,0 200,60"
                  fill="#B2E4FA"
                  stroke="#B2E4FA"
                  strokeWidth="1"
                />
              </svg>
            )}
            <button
              className={`relative z-10 text-xs md:text-sm lg:text-base font-semibold py-3 px-6 sm:px-10 md:px-[65px] rounded-t-[30px] transition-all duration-300 ease-in-out w-full transform 
              ${
                activeTab === index
                  ? "bg-[#0E6B81] text-white border-2 border-[#B2E4FA] scale-105"
                  : "bg-white text-[#0E6B81] border-2 border-transparent hover:scale-105 hover:shadow-md"
              }`}
            >
              {tab.label}
            </button>
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-start gap-10 transition-all duration-700 ease-in-out">
        {/* Left Image */}
        <div className="w-full lg:w-5/12 rounded-2xl overflow-hidden shadow-lg transform transition-all duration-700 hover:scale-105">
          <Image
            src={assets.hero}
            alt="Reception"
            width={500}
            height={350}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full lg:w-7/12">
          {tabContent[activeTab].map((item, idx) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-5 flex flex-col items-center text-center shadow-md min-h-[180px] transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg animate-fadeInUp"
              style={{
                animationDelay: `${idx * 100}ms`,
                animationDuration: "500ms",
              }}
            >
              <div className="bg-[#D6F3FF] p-4 rounded-full flex items-center justify-center mb-3">
                <div className="text-[#0E6B81]">{item.icon}</div>
              </div>

              <h3 className="text-[#0E6B81] text-[16px] sm:text-[18px] font-semibold mb-3">
                {item.title}
              </h3>

              <button
                onClick={() => router.push(item.path)}
                className="mt-auto bg-[#B2E4FA] text-[#0E6B81] text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-[#94d9f8] transition-colors"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookOneDetails;

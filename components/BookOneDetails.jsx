"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaMobileAlt, FaGoogle } from "react-icons/fa";
import {
  MdOutlineRestaurant,
  MdCloud,
  MdCampaign,
  MdReviews,
  MdOutlineDashboard,
} from "react-icons/md";
import { FiChevronRight } from "react-icons/fi";
import { RiPriceTag2Fill } from "react-icons/ri";
import { BiNetworkChart } from "react-icons/bi";
import { assets } from "@/assets/assets";

const BookOneDetails = () => {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  const hoverTimeout = useRef(null);

  const tabButtons = [
    { label: "MARKETING & CONNECTIVITY" },
    { label: "OPERATIONS & MANAGEMENT" },
    { label: "GUEST MANAGEMENT" },
    { label: "PRICING & AI AUTOMATION" },
  ];

  const tabContent = [
    [
      {
        icon: <BiNetworkChart className="text-5xl sm:text-6xl text-[#0E6B81]" />,
        title: "Channel Manager",
        path: "/bookone-connect",
      },
      {
        icon: <MdCampaign className="text-5xl sm:text-6xl text-[#0E6B81]" />,
        title: "Digital Marketing",
        path: "/digital-marketing",
      },
      {
        icon: <MdReviews className="text-5xl sm:text-6xl text-[#0E6B81]" />,
        title: "Online Reputation Management",
        path: "/online-repution-management",
      },
      {
        icon: <MdOutlineRestaurant className="text-5xl sm:text-6xl text-[#0E6B81]" />,
        title: "Online Menu",
        path: "/online-menu",
      },
    ],
    [
      {
        icon: <MdOutlineDashboard className="text-5xl sm:text-6xl text-[#0E6B81]" />,
        title: "BookOne PMS",
        path: "/bookone-pms",
      },
      {
        icon: <MdOutlineRestaurant className="text-5xl sm:text-6xl text-[#0E6B81]" />,
        title: "BookOne POS",
        path: "/bookone-pos",
      },
      {
        icon: <FaGoogle className="text-5xl sm:text-6xl text-[#0E6B81]" />,
        title: "Google Business Setup",
        path: "/google-business-setup",
      },
      {
        icon: <FaMobileAlt className="text-5xl sm:text-6xl text-[#0E6B81]" />,
        title: "OTA Setup",
        path: "/ota-setup",
      },
    ],
    [
      {
        icon: <FaMobileAlt className="text-5xl sm:text-6xl text-[#0E6B81]" />,
        title: "BookOne CRM ",
        path: "/guest-app",
      },
      {
        icon: <MdOutlineRestaurant className="text-5xl sm:text-6xl text-[#0E6B81]" />,
        title: "Room Service",
        path: "/room-service",
      },
      {
        icon: <MdCloud className="text-5xl sm:text-6xl text-[#0E6B81]" />,
        title: "Digital Check-In",
        path: "/digital-check-in",
      },
      {
        icon: <FaGoogle className="text-5xl sm:text-6xl text-[#0E6B81]" />,
        title: "Reviews Manager",
        path: "/reviews-manager",
      },
    ],
    [
      {
        icon: <RiPriceTag2Fill className="text-5xl sm:text-6xl text-[#0E6B81]" />,
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
    <div className="bg-[#0E6B81] text-white py-12 px-4 md:px-16 font-Inter">
      <h2 className="text-white text-center lg:text-left font-inter text-[32px] sm:text-[38px] md:text-[46px] font-bold leading-[150%] mb-6">
        BookOne Does It All!
      </h2>

      {/* Tab Buttons with Wave Border */}
      <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
        {tabButtons.map((tab, index) => (
          <div
            key={index}
            className={`relative min-w-[180px] text-center`}
            onMouseEnter={() => handleHover(index)}
            onClick={() => setActiveTab(index)}
          >
            {activeTab === index && (
              <svg
                className="absolute top-0 left-0 w-full h-full z-0"
                viewBox="0 0 200 60"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,60 Q100,0 200,60"
                  fill="none"
                  stroke="#B2E4FA"
                  strokeWidth="5"
                />
              </svg>
            )}
            <button
              className={`relative z-10 text-xs md:text-sm lg:text-base font-semibold py-3 px-6 sm:px-10 md:px-[65px] rounded-t-[30px] transition-all duration-300 ease-in-out border-2 w-full transform
              ${
                activeTab === index
                  ? "bg-[#0E6B81] text-white border-[#B2E4FA] scale-y-[1.12]"
                  : "bg-white text-[#0E6B81] border-[#B2E4FA] hover:bg-[#E8F3F5] hover:scale-[1.01]"
              }`}
              style={{
                borderBottom: activeTab === index ? "none" : "2px solid #0E6B81",
              }}
            >
              {tab.label}
            </button>
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-start gap-10">
        {/* Left Image */}
        <div className="w-full lg:w-5/12 rounded-xl overflow-hidden">
          <Image
            src={assets.hero}
            alt="Reception"
            width={500}
            height={350}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-7/12 transition-all duration-300">
          {tabContent[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="relative bg-white border border-[#0E6B81] rounded-xl p-5 min-h-[180px] flex flex-col justify-between transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-[#0E6B81] text-5xl flex items-center gap-2">
                {item.icon}
              </div>
              <h3 className="mt-4 text-base sm:text-lg font-bold text-[#0E6B81]">
                {item.title}
              </h3>
              <button
                onClick={() => router.push(item.path)}
                className="absolute bottom-4 right-4 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-[#B2E4FA] hover:bg-[#94d9f8] transition"
              >
                <FiChevronRight className="text-[#0E6B81] text-sm sm:text-base" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookOneDetails;

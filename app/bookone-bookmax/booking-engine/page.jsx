"use client";
import { useEffect, useRef, useState } from "react";
import { FaTag, FaLayerGroup, FaLock } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/assets";

const BookingEngine = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`bg-[#EDF6FA] px-4 sm:px-6 lg:px-10 py-20 font-['Inter'] transition-opacity duration-1000 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        {/* RIGHT SIDE (Text, Image, Button) */}
        <div
          className={`w-full lg:w-[40%] flex flex-col items-start gap-6 order-1 lg:order-2 transform transition-all duration-1000 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}
        >
          <div className="text-left space-y-2 sm:space-y-3">
            <p className="text-[#8CCFF0] text-center md:text-left lg:text-left text-sm sm:text-[14px] font-bold uppercase tracking-wider">
              Booking Engine
            </p>
            <div className="w-full text-center md:text-left">
              <h2 className="text-[#146683] text-[20px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-extrabold leading-tight sm:leading-[130%] max-w-full sm:max-w-[400px] md:max-w-[480px] mx-auto md:mx-0">
                <span className="block">The Last Click</span>
                <span className="block pl-10 md:pl-0 lg:pl-0">
                  Before They Check In
                </span>
              </h2>
            </div>
          </div>

          <div className="w-full max-w-[493px] aspect-[3/2] rounded-[20px] overflow-hidden shadow-md">
            <Image
              src={assets.Engine}
              alt="Efficiency"
              className="w-full h-full object-cover rounded-[20px] transition-transform duration-1000 hover:scale-[1.02]"
              width={493}
              height={323}
            />
          </div>
        </div>

        <div
          className={`w-full lg:w-[50%] flex flex-col justify-between mt-10 lg:mt-28 space-y-10 order-2 lg:order-1 transform transition-all duration-1000 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          }`}
        >
          {/* ---- DESKTOP BUTTON ---- */}
          <div className="hidden lg:block">
            <Link href="/pricing">
              <button className="bg-[#01677D] border border-[#CEE6F0] text-white w-full sm:w-[200px] h-[48px] rounded-[14px] text-sm font-semibold shadow hover:bg-[#125a74] transition-all">
                Get Pricing
              </button>
            </Link>
          </div>

          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 sm:gap-5 transition-all duration-1000 ease-out delay-${
                  index * 100
                } ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-5"
                }`}
              >
                <div className="w-[56px] h-[56px] sm:w-[70px] sm:h-[70px] flex items-center justify-center bg-white shadow-md rounded-[12px] text-[#01677D] text-[26px] sm:text-[32px] flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-[#146683] text-[16px] sm:text-[20px] font-semibold mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-[#535353] text-[14px] sm:text-[15px] font-normal leading-[140%] max-w-[500px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---- MOBILE BUTTON ---- */}
      <div className="block lg:hidden w-full mt-6">
        <Link href="/pricing">
          <button className="bg-[#01677D] border border-[#CEE6F0] text-white w-full h-[48px] rounded-[14px] text-sm font-semibold shadow hover:bg-[#125a74] transition-all">
            Get Pricing
          </button>
        </Link>
      </div>
    </div>
  );
};

const features = [
  {
    title: "Promotions Made Simple",
    description:
      "Create irresistible offers and seasonal deals in just a few clicks.",
    icon: <FaTag />,
  },
  {
    title: "Multiple Rates & Plans",
    description:
      "Run multiple pricing models to match every guest and booking need.",
    icon: <FaLayerGroup />,
  },
  {
    title: "Secure & Trustworthy",
    description:
      "End-to-end encryption ensures every transaction is protected.",
    icon: <FaLock />,
  },
];

export default BookingEngine;

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaGlobe } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineManageSearch } from "react-icons/md";
import { PiStorefrontBold } from "react-icons/pi";
import { FaSearchDollar } from "react-icons/fa";
import { assets } from "@/assets/assets";
import { useContentful } from "../contentfulPricingContext";

const services = [
  {
    icon: <FaGlobe className="text-4xl mb-3" />,
    title: "OTA Setup & Optimisation",
    bg: "bg-[#146683]",
    text: "text-white",
  },
  {
    icon: <MdOutlineManageSearch className="text-4xl mb-3" />,
    title: "Online Reputation Management",
    bg: "bg-[#B2E0F7]",
    text: "text-[#002244]",
  },
  {
    icon: <BsGraphUpArrow className="text-4xl mb-3" />,
    title: "Digital Marketing",
    bg: "bg-[#CBEAF9]",
    text: "text-[#002244]",
  },
  {
    icon: <PiStorefrontBold className="text-4xl mb-3" />,
    title: "Google Business Listing",
    bg: "bg-[#146683]",
    text: "text-white",
  },
  {
    icon: <FaSearchDollar className="text-4xl mb-3" />,
    title: "Web Search Optimisation",
    bg: "bg-[#146683]",
    text: "text-white",
  },
];

// Animate each word separately
const splitWords = (text, delayOffset = 0) =>
  text.split(" ").map((word, i) => (
    <span
      key={i}
      className="inline-block opacity-0 animate-wordFlyIn"
      style={{
        animationDelay: `${delayOffset + i * 0.1}s`,
        marginRight: "8px",
      }}
    >
      {word}
    </span>
  ));

const PowerOf = () => {
  const { pricingData } = useContentful();

  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  if (!pricingData) return <p>Loading ...</p>;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-12 md:px-12"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={assets.Power_Of}
          alt="Background"
          fill
          className="object-cover opacity-50"
        />
      </div>

      <div className="relative max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
      
        <div className="lg:max-w-[635px] w-full">
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#146683] leading-snug font-['Inter'] mb-4">
            {splitWords("Add on & Power Up!", inView ? 0 : 10)}
          </h2>

          <p className="text-[#146683] text-base sm:text-xl font-normal leading-relaxed mt-6 mb-6 hidden md:block">
            {splitWords(
              "Our add-on services are built to expand your capabilities and deliver 360° value across your hotel.",
              inView ? 0.6 : 10
            )}
          </p>

          <button
            title="Explore more"
            className="group flex items-center h-10 bg-[#146683] text-white rounded-full overflow-hidden transition-all duration-300 ease-in-out w-[40px] hover:w-[150px] sm:hover:w-[160px] hover:bg-[#BFE9FF] px-3 ml-36 md:ml-0 lg:ml-0"
          >
            <div className="flex items-center justify-center w-6 min-w-[24px] h-6 bg-[#0E5B6F] rounded-full -ml-1">
              <FaArrowRight className="text-sm -rotate-45 transition-transform duration-300 group-hover:translate-x-1 text-white" />
            </div>
            <span className="ml-4 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 text-sm whitespace-nowrap text-[#146683]">
              Explore more
            </span>
          </button>
        </div>

        {/* Right Section - Responsive Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`w-full ${service.bg} ${service.text} border border-[#CEE6F0] rounded-[24px] px-5 py-6 flex flex-col items-center justify-center text-center shadow-md`}
            >
              {service.icon}
              <span className="font-semibold text-lg leading-snug mt-2">
                {service.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PowerOf;

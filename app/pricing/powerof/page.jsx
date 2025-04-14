"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { assets } from "@/assets/assets";
import { useContentful } from "../contentfulPricingContext";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const services = [
  {
    icon: (
      <Image src={assets.Power1} alt="OTA Setup" className="w-10 h-10 mb-3" />
    ),
    title: "OTA Setup & Optimisation",
    bg: "bg-[#146683]",
    text: "text-white",
  },
  {
    icon: (
      <Image
        src={assets.Power4}
        alt="Online Reputation"
        className="w-10 h-10 mb-3"
      />
    ),
    title: "Online Reputation Management",
    bg: "bg-[#B2E0F7]",
    text: "text-[#002244]",
  },
  {
    icon: (
      <Image
        src={assets.Power2}
        alt="Digital Marketing"
        className="w-10 h-10 mb-3"
      />
    ),
    title: "Digital Marketing",
    bg: "bg-[#CBEAF9]",
    text: "text-[#002244]",
  },
  {
    icon: (
      <Image
        src={assets.Power5}
        alt="Google Listing"
        className="w-10 h-10 mb-3"
      />
    ),
    title: "Google Business Listing",
    bg: "bg-[#146683]",
    text: "text-white",
  },
  {
    icon: <Image src={assets.Power3} alt="SEO" className="w-10 h-10 mb-3" />,
    title: "Web Search Optimisation",
    bg: "bg-[#146683]",
    text: "text-white",
  },
];

const PowerOf = () => {
  const { pricingData } = useContentful() || {};
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
        <div className="lg:max-w-[468px] w-full">
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#146683] leading-snug font-['Inter'] mb-4 text-center md:text-left">
            {pricingData?.pricingSecondParagrph}
          </h2>

          <p className="text-[#146683] text-base sm:text-xl font-normal leading-relaxed mt-6 mb-6 hidden md:block">
            {documentToReactComponents(pricingData?.pricingSecondDescription)}
          </p>

          <div className="hidden md:block">
            <button
              title="Explore more"
              className="group  items-center h-10 bg-[#146683] text-white rounded-full overflow-hidden transition-all duration-300 ease-in-out w-[40px] hover:w-[150px] sm:hover:w-[160px] hover:bg-[#BFE9FF] px-3 ml-48 md:ml-0 lg:ml-0 flex
            "
            >
              <div className="flex items-center justify-center w-6 min-w-[24px] h-6 bg-[#0E5B6F] rounded-full -ml-1">
                <FaArrowRight className="text-sm -rotate-45 transition-transform duration-300 group-hover:translate-x-1 text-white" />
              </div>
              <span className="ml-4 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 text-sm whitespace-nowrap text-[#146683]">
                Explore more
              </span>
            </button>
          </div>
        </div>

        {/* Right Section - Responsive Cards */}
        <div className="w-[60%] ml-20 md:ml-0 lg:ml-0 md:w-full lg:w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6">
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

      <div className="block md:hidden mt-4">
        <button
          title="Explore more"
          className="group  items-center h-10 bg-[#146683] text-white rounded-full overflow-hidden transition-all duration-300 ease-in-out w-[40px] hover:w-[150px] sm:hover:w-[160px] hover:bg-[#BFE9FF] px-3 ml-48 md:ml-0 lg:ml-0 flex
            "
        >
          <div className="flex items-center justify-center w-6 min-w-[24px] h-6 bg-[#0E5B6F] rounded-full -ml-1">
            <FaArrowRight className="text-sm -rotate-45 transition-transform duration-300 group-hover:translate-x-1 text-white" />
          </div>
          <span className="ml-4 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 text-sm whitespace-nowrap text-[#146683]">
            Explore more
          </span>
        </button>
      </div>
    </section>
  );
};

export default PowerOf;

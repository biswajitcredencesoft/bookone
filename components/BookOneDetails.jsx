import React from "react";
import Image from "next/image";

import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineRestaurant } from "react-icons/md";
import { MdCloud } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { assets } from "@/assets/assets";

const BookOneDetails = () => {
  const features = [
    {
      icon: <MdCloud className="text-3xl md:text-4xl mb-1" />,
      title: "Cloud PMS",
      desc: "Property management made easy.",
    },
    {
      icon: <MdOutlineRestaurant className="text-3xl md:text-4xl mb-1" />,
      title: "Restaurant POS",
      desc: "Streamline food and beverage orders.",
    },
    {
      icon: <FaGoogle className="text-3xl md:text-4xl mb-1" />,
      title: "Google Listing",
      desc: "Improve your online presence.",
    },
    {
      icon: <FaMobileAlt className="text-3xl md:text-4xl mb-1" />,
      title: "Mobile App",
      desc: "Manage on the go anytime.",
    },
  ];

  return (
    <div className="bg-[#0E6B81] text-white py-12 px-4 md:px-16">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center lg:text-left font-Inter">
        BookOne Does It All!
      </h2>

      <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
        {[
          "OPERATIONS & MANAGEMENT",
          "MARKETING & CONNECTIVITY",
          "AI AUTOMATION & PRICING",
          "GUEST MANAGEMENT",
        ].map((label, index) => (
          <button
            key={index}
            className={`border border-white rounded-full px-4 py-2 text-sm md:text-base hover:bg-white hover:text-[#0E6B81] transition-all duration-300 ${
              (index === 0 || index === 1) ? "bg-white text-[#0E6B81]" : ""
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 rounded-xl overflow-hidden">
          <Image
            src={assets.hero}
            alt="Reception"
            width={600}
            height={400}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between gap-6">
          <p className="text-sm md:text-base mt-6">
            Manage bookings, restaurant orders, and your Google presence—all from
            one easy system. Stay organized, save time, and keep things running
            smoothly, whether you're at the front desk or on the go.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
            {features.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                {/* Box with icon and title */}
                <div className="bg-white text-[#0E6B81] flex flex-col items-center justify-center p-4 rounded-xl w-full h-24">
                  {item.icon}
                  <p className="text-sm font-semibold text-center">{item.title}</p>
                </div>
                {/* Paragraph outside the box */}
                <p className="text-xs text-center mt-2 max-w-[120px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookOneDetails;

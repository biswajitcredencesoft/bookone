
"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Badge2 from "../assets/Badge-2.png";
import Badge1 from "../assets/Badge-1.png";

const Hero = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center">
        
        {/* Content & Video Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
          
          {/* Left Section - Text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-[56px] font-bold leading-tight md:leading-[1.2] text-[#27282C] font-sans mb-6 md:mb-8 lg:mb-12">
              A Unified Platform <br className="hidden md:block" /> For All Your Hotel Needs
            </h1>
            <p className="text-gray-600 text-base md:text-lg lg:text-xl">
              Designed to help hoteliers manage{" "}
              <strong className="text-[#141B34]">
                Front office, Food & Beverages, Room service, Increase
                Distributions, Accounts and Credits
              </strong>, and enhance Guest communication and <strong>Satisfaction.</strong>
            </p>
            <div className="mt-6 md:mt-8">
              <button className="bg-gray-900 text-white flex items-center justify-center px-5 md:px-6 py-3 rounded-md font-semibold hover:bg-gray-700 transition">
                Request personalized demo <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>

          {/* Right Section - Responsive Video */}
          <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0 w-full">
          
        <div className="w-full max-w-[600px] rounded-3xl overflow-hidden">
          <video
            src="https://testbookone.bookone.io/wp-content/uploads/2025/02/BookOne-Hero-Section-Video-1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-3xl border-none"
          >
            Your browser does not support the video tag.
          </video>
        </div>
    
          </div>
        </div>

        {/* App Download Section */}
        <div className="w-full text-center mt-12 md:mt-16">
          <h2 className="text-xl md:text-2xl lg:text-xl font-semibold text-gray-800">
            Get Our App on the App Store & Google Play – Anytime, Anywhere!
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <Image
              src={Badge2}
              alt="Download on the App Store"
              width={160}
              height={50}
              className="cursor-pointer"
            />
            <Image
              src={Badge1}
              alt="Get it on Google Play"
              width={160}
              height={50}
              className="cursor-pointer"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;

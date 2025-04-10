"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Badge2 from "../assets/Badge-2.png";
import Badge1 from "../assets/Badge-1.png";

const Hero = () => {
  return (
    <section className="bg-[#F5F5F5] py-12 sm:py-16 md:py-20 lg:py-24  overflow-hidden">
      <div className="max-w-[1400px] xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-16 flex flex-col items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12">
          {/* Left: Text Content */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[48px] font-bold leading-tight text-[#1E1E1E] font-sans mb-6">
              A Unified Platform For All <br />
              <span className="block mt-4 text-[#006D77]">
                Your Hotel’s Needs
              </span>
            </h1>

            
            <p className="text-[#171C1E] font-inter text-[24px] font-normal leading-[150%] mb-6 px-2 sm:px-0">
              Designed to help hoteliers manage front office, food & beverages,
              room service, increase distributions, handle accounts and credits,
              and enhance guest communication and satisfaction.
            </p>

            <div>
              <button className="bg-[#006D77] text-white px-10 py-3 rounded-lg font-semibold text-base shadow-md hover:bg-[#005962] transition">
                Try BookOne Now
              </button>
            </div>
          </div>

          {/* Right: Responsive Video */}
          <div className="lg:w-1/2 w-full flex justify-center mt-10 lg:mt-0">
            <div className="w-full max-w-[720px] aspect-video rounded-3xl overflow-hidden">
              <video
                src="https://testbookone.bookone.io/wp-content/uploads/2025/04/Copy-of-BookOne-Hero-Section-Video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

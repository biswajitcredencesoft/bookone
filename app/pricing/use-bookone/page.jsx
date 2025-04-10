import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { assets } from "@/assets/assets";

const UseBookone = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,#5E5B7D,#146683,#000000)] text-white px-4 py-24 md:py-32 lg:py-28 md:px-20 font-Inter">
      <div className="max-w-10xl mx-auto flex flex-col gap-20 md:gap-28">
        <div className="flex flex-col md:flex-row gap-16 md:gap-20">
          <div className="flex-1 flex flex-col justify-center gap-8">
            <div>
              <h2 className="text-[#D0E6F3] text-[40px] md:text-[48px] font-bold leading-tight">
                4000<span className="text-[#fffffF]">+ 
                  </span> Hotels
              </h2>
              <h3 className="text-[#D0E6F3] text-[26px] md:text-[32px] font-bold leading-snug mt-4">
                Use BookOne
              </h3>
            </div>
            <p className="text-white text-[16px] md:text-[18px] font-bold leading-relaxed max-w-sm shadow-text">
              BookOne is built to grow with you{" "}
              <br className="hidden sm:block" />
              —no matter your size or stage.
            </p>
          </div>

          <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-10 shadow-xl">
            <div className="flex items-start gap-6">
              <div className="w-[70px] h-[70px] rounded-full bg-[#5E5B7D] border border-[#8C89AB] shrink-0" />

              <div className="text-white">
                <FaQuoteLeft className="text-[#CEE6F0] text-xl mb-2" />
                <p className="text-[15px] leading-relaxed mb-4">
                  <span className="font-semibold text-white">
                    As we scaled to multiple properties, BookOne
                  </span>{" "}
                  remained the one solution that could keep up—simple, powerful,
                  and built for growth.
                </p>
                <p className="text-sm font-medium text-white">Jane Doe</p>
                <p className="text-sm text-white/80">
                  Managing Director, Hotel One
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-12 flex flex-col md:flex-row items-center gap-12 md:gap-16 shadow-xl">
          <div className="relative w-[220px] md:w-[280px] -mt-16 md:-mt-24">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={assets.banner}
                alt="Smiling professionals"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Don’t Just Keep Up —<br className="hidden md:block" />
                  Level Up!
                </h3>
                <p className="text-lg mb-0 max-w-xl mx-auto md:mx-0">
                  BookOne isn’t just hotel software — it’s your all-in-one
                  growth partner.
                </p>
              </div>

              <div className="shrink-0">
                <button className="bg-[#01677D] hover:bg-[#0f4b5c] text-[#CEE6F0] px-6 py-3 rounded-md shadow-md transition duration-300 whitespace-nowrap">
                  See What BookOne Can Do For You
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default UseBookone;

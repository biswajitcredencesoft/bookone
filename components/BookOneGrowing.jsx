import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const BookOneGrowing = () => {
  const stats = [
    { number: "100+", label: "Cities where BookOne is active" },
    { number: "4000+", label: "Hotels worldwide and growing" },
    { number: "1M", label: "Bookings Managed" },
    { number: "80+", label: "Exciting features in BookOne" },
  ];

  return (
    <div className="bg-[linear-gradient(to_bottom,_#5E5B7D,_#146683,_#000000)] text-white px-4 lg:py-16  md:py-16 py-8  md:px-20 font-Inter">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Title Block for Mobile */}
        <div className="md:hidden text-center space-y-4">
          <h2 className="text-2xl font-bold leading-snug">
            BookOne is Growing, So Are Our Hotels
          </h2>
        </div>

        {/* Stats & Text Block */}
        <div className="flex flex-col md:flex-row md:items-center gap-12">
          {/* Stat Cards */}
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 md:grid-cols-2 md:gap-y-12">
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-white text-[#1F2937] rounded-3xl text-center shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-1
                    w-[90%] sm:w-[120px] lg:w-[260px] h-[190px] flex-shrink-0 mx-auto ${
                      idx >= 2 ? "sm:ml-6 md:ml-14" : ""
                    }`}
                >
                  <div className="px-5 py-8 flex flex-col justify-center h-full">
                    <p className="text-3xl md:text-5xl font-extrabold">
                      {item.number.includes("M") ? (
                        <>
                          1
                          <span className="text-[#146683] text-2xl md:text-5xl align-top">
                            M
                          </span>
                        </>
                      ) : (
                        <>
                          {item.number.replace("+", "")}
                          {item.number.includes("+") && (
                            <span className="text-[#01677D] text-4xl md:text-5xl align-top">
                              +
                            </span>
                          )}
                        </>
                      )}
                    </p>
                    <p className="mt-2 text-sm md:text-base font-medium text-gray-700">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6 hidden md:block">
            <h2 className="text-3xl font-bold leading-snug ">
              BookOne is Growing, So Are Our Hotels
            </h2>
            <p className="text-lg leading-relaxed">
              Join the global network of hotels that trust BookOne to simplify,
              scale, and succeed.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-12 flex flex-col md:flex-row items-center gap-10 md:gap-16 shadow-xl">
          <div className="relative w-[220px] md:w-[280px] -mt-20 md:-mt-28">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={assets.banner}
                alt="Smiling professionals"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Don’t Just Keep Up — Level Up!
                  <br className="hidden md:block" />
                </h3>
                <p className="text-lg mb-0 max-w-xl mx-auto md:mx-0 hidden md:block ">
                  BookOne isn’t just hotel software — it’s your <br />
                  all-in-one growth partner.
                </p>
              </div>

              <div className="shrink-0">
                <button className="bg-[#01677D] hover:bg-[#0f4b5c] text-[#CEE6F0] px-0  lg:px-6 py-2 md:px-6 md:py-3 rounded-md shadow-md transition duration-300 whitespace-nowrap  text-xs md:text-base ">
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

export default BookOneGrowing;

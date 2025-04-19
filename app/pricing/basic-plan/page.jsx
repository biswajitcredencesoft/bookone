"use client";

import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
const BasicPlan = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-30 px-4 lg:px-6 py-10 bg-white">
      {/* Left Promo Section */}
      <div className="w-full max-w-md text-center lg:text-left hidden md:block ml-12">
        <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] text-[#146683] font-bold leading-[150%] mb-0">
          Sick of Systems
        </h2>
        <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] text-[#146683] font-bold leading-[150%] mb-4">
          That Drain Your Time?
        </h3>
        <p className="text-[#535353] font-semibold text-[16px] sm:text-[18px] lg:text-[20px] leading-[150%] mb-6">
          With BookOne, you’re free to explore—
          <br />
          no long-term commitment, just results.
        </p>
        <Link href="/book-a-demo">
        <button className="hidden md:block w-full max-w-[322px] h-[45px] text-[16px] bg-[#01677D] hover:bg-[#014d5d] text-white font-semibold rounded-[16px] border border-[#CEE6F0] transition">
          Start A Free, 3-Month Trial
        </button>
        </Link>
      </div>

      {/* Right Card Section */}
      <div className="flex justify-center items-center w-full px-2 sm:px-4 lg:ml-40">
        <div className="relative w-full max-w-[664px] bg-[#D8A353] rounded-[20px] p-4 sm:p-6 lg:p-10 text-black">
          <div className="absolute top-0 right-0 w-[180px] sm:w-[220px] md:w-[273px] h-[50px] sm:h-[64px] bg-white text-black font-semibold px-4 sm:px-6 py-2 sm:py-4 rounded-bl-[20px] shadow-md text-center text-sm sm:text-lg flex items-center justify-center">
            ₹ 0 /monthly
          </div>
          <h3 className="mt-8 block md:hidden text-[22px] sm:text-2xl font-bold">
            <span className="text-black">BookOne</span>{" "}
            <span className="text-white">Basic</span>
          </h3>
          <div className="flex flex-col lg:flex-row gap-8 mt-16">
            {/* Included Features */}
            <div className="flex-1">
              <p className="font-semibold text-sm mb-4">What’s included</p>
              <ul className="space-y-3 sm:space-y-4 text-sm">
                {[
                  "Front office module",
                  "Rate & availability update",
                  "Room management",
                  "Booking management",
                  "Self-guided onboarding with online support",
                  "Single-user access",
                  "Channel Manager available at one-time setup fee",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white text-[#146683] ">
                      <FaCheckCircle className="text-xs " />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Plan Info & Add-ons */}
            <div className="flex-1">
              <h3 className=" hidden md:block text-xl sm:text-2xl font-bold">
                <span className="text-black">BookOne</span>{" "}
                <span className="text-white">Basic</span>
              </h3>

              <p className="text-white text-sm font-semibold mt-2 mb-4 sm:mb-6 hidden md:block">
                No Commitments, No Credit Card. <br />
                Free Cancellation. <br />
                Easy Upgrade– any time you want!
              </p>

              <p className="font-semibold text-sm mb-4">Optional Add-ons</p>
              <ul className="space-y-3 sm:space-y-4 text-sm">
                {[
                  "Auto Email & WhatsApp CRM",
                  "Reports & Analytics Dashboard",
                  "Multi-user Access (up to 3 users)",
                  "AI Revenue Suggestion Engine",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white text-[#146683]">
                      <FaCheckCircle className="text-xs" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link href="/book-a-demo">
          <button className="block md:hidden w-[226px] h-[38.153px] flex-shrink-0 text-center font-inter text-[16px] font-bold leading-[16px] tracking-[0.4px] bg-[#01677D] hover:bg-[#014d5d] text-white rounded-[16px] border border-[#CEE6F0] transition mt-4 ml-12">
            Get A 3-Month Free Trial
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BasicPlan;

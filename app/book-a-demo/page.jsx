"use client";

import { useEffect } from "react";
import { FaBuilding } from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { PiBrowserLight } from "react-icons/pi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExpectDemo from "./expect-demo/page";
import ServicesGive from "./services-give/page";
import KeepUp from "./keep-up/page";
import Image from "next/image";
import { assets } from "@/assets/assets";

const BookDemo = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Navbar />

      <div className="bg-[#0D6C80] text-white px-4 py-10 md:py-16">
        {/* Mobile View */}
        <div className="md:hidden flex flex-col items-center gap-6">
          <h1 className="text-white text-2xl font-bold text-center leading-tight">
            Get A Personalised <br /> Product Demo
          </h1>

          {/* Form Box */}
          <div className="w-[95%] max-w-sm bg-white rounded-2xl shadow-lg p-4">
            <div
              data-tf-live="01JRF9R3GQ5PXE6D40TM50PZVA"
              className="w-full md:h-[400px] h-[490px] "
            />
          </div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-3 gap-3 mt-6">
            <div className="bg-white bg-opacity-20 rounded-xl shadow-md p-3 flex flex-col items-center justify-center text-center">
              <Image src={assets.Form} alt="Form" className="text-[#0D6C80] text-lg mb-1" />
              <span className="text-[12px] text-white font-medium ">PMS</span>
            </div>
            <div className="bg-white bg-opacity-20 rounded-xl shadow-md p-3 flex flex-col items-center justify-center text-center">
              <Image src={assets.Form1} alt="Form1" c className="text-[#0D6C80] text-lg mb-1" />
              <span className="text-[12px] font-medium text-white leading-tight text-center">
                Channel <br /> Manager
              </span>
            </div>
            <div className="bg-white bg-opacity-20 rounded-xl shadow-md p-3 flex flex-col items-center justify-center text-center">
              <Image src={assets.Form2} alt="Form2" className="text-[#0D6C80] text-lg mb-1" />
              <span className="text-[12px] font-medium text-white leading-tight text-center">
                Website/ <br /> Booking Engine
              </span>
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-2 max-w-[87rem] mx-auto gap-10 items-center">
          <div className="flex flex-col justify-center items-start text-left gap-8">
            <h1 className="text-white  font-bold text-[48px] leading-[150%] max-w-[476px]">
              Get A Personalised <br /> Product Demo
            </h1>
            <p className="text-white font-semibold text-[24px] leading-[150%]">
              Our suite is designed to offer 360-degree value <br />
              across your entire property, simplifying processes and <br />
              boosting profitability from day one.
            </p>
            <div className="flex gap-6">
              <div className="w-[149px] h-[119px] bg-white bg-opacity-20 rounded-[20px] flex flex-col items-center justify-center shadow-md">
                <Image src={assets.Form} alt="Form"  className="text-[#0D6C80] text-3xl mb-2" />
                <span className="text-white text-sm font-semibold">PMS</span>
              </div>
              <div className="w-[149px] h-[119px] bg-white bg-opacity-20 rounded-[20px] flex flex-col items-center justify-center shadow-md">
                <Image src={assets.Form1} alt="Form1" className="text-[#0D6C80] text-3xl mb-2" />
                <span className="text-white text-sm font-semibold leading-tight">
                  Channel <br /> Manager
                </span>
              </div>
              <div className="w-[149px] h-[119px] bg-white bg-opacity-20 rounded-[20px] flex flex-col items-center justify-center shadow-md">
                <Image src={assets.Form2} alt="Form2" className="text-[#0D6C80] text-3xl mb-2" />
                <span className="text-white text-sm font-semibold leading-tight">
                  Website/ <br /> Booking Engine
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center py-6 px-4">
            <div className="w-full max-w-[500px] bg-white rounded-xl shadow-lg p-6">
              <div data-tf-live="01JRF9R3GQ5PXE6D40TM50PZVA" className="w-full h-[500px]" />
            </div>
          </div>
        </div>
      </div>

      <ExpectDemo />
      <ServicesGive />
      <KeepUp />
      <Footer />
    </>
  );
};

export default BookDemo;

"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";
import BuildToDO from "./build-to-do/page";

const BookOnePms = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />

      <div className="relative h-[620px] md:h-[680px] overflow-hidden">
        <Image
          src={assets.hero}
          alt="Hotel Background"
          fill
          className="object-cover z-0"
          priority
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#146683]/70 via-[#146683]/60 to-[#5E5B7D]/60" />

        <button
          onClick={() => router.push("/")}
          className="absolute top-4 left-4 sm:top-6 sm:left-16 z-30 bg-white/20 backdrop-blur-md text-white flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/30 transition w-fit"
        >
          <IoArrowBack className="text-xl" />
          <span className="text-sm font-medium">Back</span>
        </button>

        {/* Main Content */}
        <div className="relative z-20 h-full flex flex-col justify-center px-4 sm:px-6 md:px-16">
          <div className="text-white max-w-full md:max-w-2xl">
            <div className="mb-3">
              <span className="text-xs md:text-sm text-[#C2E4FF] font-semibold tracking-wide border border-[#C2E4FF] rounded-full px-4 py-1 inline-block bg-white/10 backdrop-blur-sm">
                PROPERTY MANAGEMENT SYSTEM
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-snug md:leading-[1.2] tracking-tight mb-5 drop-shadow-md">
              A Better Way To <br />
              <span className="text-[#C2E4FF]">Manage Your Hotel</span>
            </h1>

            <button className="bg-[#0D91C3] hover:bg-[#0b7cab] text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-md transition duration-300 shadow-lg text-base md:text-lg">
              Try BookOne Now
            </button>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 right-6 flex gap-4 sm:gap-6 justify-center z-20">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl h-24 w-32 sm:w-36 md:h-28 md:w-48 shadow-lg"></div>
          <div className="bg-white/20 backdrop-blur-md rounded-2xl h-24 w-32 sm:w-36 md:h-28 md:w-48 shadow-lg"></div>
          <div className="bg-white/20 backdrop-blur-md rounded-2xl h-24 w-32 sm:w-36 md:h-28 md:w-48 shadow-lg"></div>
        </div>
      </div>

      <BuildToDO />
      <Footer />
    </>
  );
};

export default BookOnePms;

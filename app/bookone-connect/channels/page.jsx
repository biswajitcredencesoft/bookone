"use client";

import Image from "next/image";
import { assets } from "@/assets/assets";

const Channels = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 py-10">
      <div className="w-full max-w-[1329px] flex flex-col items-center justify-center">
        <h2 className="text-[#146683] text-3xl sm:text-4xl lg:text-[46px] font-bold leading-tight text-center font-['Inter']">
          Connect to 100+ Channels
        </h2>

        <p className="text-[#146683] text-base sm:text-lg lg:text-[24px] leading-snug text-center mt-2 font-['Inter']">
          Seamless integrations that expand your reach—without extra effort.
        </p>

        <div className="w-full mt-8">
          <Image
            src={assets.Manager5}
            alt="Channel integrations"
            width={1329}
            height={652}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Channels;

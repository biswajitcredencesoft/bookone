"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useContentful } from "@/app/bookone-pms/contentfulPmsContext";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
const LevelUP = () => {
  const { pmsData } = useContentful();
  
  if (!pmsData) return <p>Loading hero section...</p>;
  return (
    <div className="bg-[linear-gradient(to_bottom,#5E5B7D,#146683,#000000)] px-4 md:px-12 py-12 md:py-20 font-Inter text-white">
      <div className="max-w-7xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 px-6 py-10 md:px-12 md:py-16">
        <div className="w-full md:w-[30%] -mt-16 md:-mt-24">
          <div className="rounded-xl overflow-hidden shadow-lg w-full">
            <Image
              src={`https:${pmsData.pmsLastImage.fields.file.url}`}
              alt="Smiling professionals"
              width={700}
              height={700}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="flex-1 w-full text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight ">
            {/* Don’t Just Keep Up –<br className="hidden md:block" />
            Level Up! */}
            {pmsData?.pmsLastHeading}
          </h3>
          <p className="text-base sm:text-lg md:text-xl mb-6 text-white/90 hidden md:block">
          {documentToReactComponents(pmsData?.pmsLastParagarph)}
          </p>
          <button className="bg-[#0071BC] hover:bg-[#005b99] text-white text-sm sm:text-base font-medium lg:px-6 py-2 md:px-6 md:py-3 rounded-md shadow-md transition duration-300">
            See What BookOne Can Do For You
          </button>
        </div>
      </div>
    </div>
  );
};

export default LevelUP;

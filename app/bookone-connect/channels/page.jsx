"use client";

import Image from "next/image";
import { assets } from "@/assets/assets";
import { FaArrowRight } from "react-icons/fa";
import { useContentful } from "@/app/bookone-connect/contentfulBookoneConnect";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
const Channels = () => {

    const contentful = useContentful();
  
    if (!contentful || !contentful.connectData) return <p>Loading ...</p>;
  
    const { connectData } = contentful;
    

  return (
    <div className="w-full flex flex-col items-center px-4 py-10">
      <div className="w-full max-w-[1329px] flex flex-col items-center justify-center">
        <h2 className="text-[#146683] text-xl sm:text-4xl lg:text-[46px] font-bold leading-tight text-center font-['Inter']">
          {connectData?.connectThridHeading}
        </h2>

        <p className="text-[#146683] text-base sm:text-lg lg:text-[24px] leading-snug text-center mt-2 font-['Inter'] hidden md:flex items-center gap-1">
          {documentToReactComponents(connectData?.connectThridParagraph)} 
          <span>
          <button
            title="Explore more"
            className="group  items-center h-10 bg-[#146683] text-white rounded-full overflow-hidden transition-all duration-300 ease-in-out w-[40px] hover:w-[150px] sm:hover:w-[160px] hover:bg-[#BFE9FF] px-3 ml-48 md:ml-0 lg:ml-0 flex
            "
          >
            <div className="flex items-center justify-center w-6 min-w-[24px] h-6 bg-[#0E5B6F] rounded-full -ml-1">
              <FaArrowRight className="text-sm -rotate-45 transition-transform duration-300 group-hover:translate-x-1 text-white" />
            </div>
            <span className="ml-4 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 text-sm whitespace-nowrap text-[#146683]">
              Explore more
            </span>
          </button>
          </span>
          
        </p>

        <div className="w-full mt-8">
          <Image
           src={`https:${connectData?.connectChannels.fields.file.url}`}
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

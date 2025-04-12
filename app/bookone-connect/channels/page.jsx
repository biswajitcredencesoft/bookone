"use client";

import Image from "next/image";
import { assets } from "@/assets/assets";
import { useContentful } from "@/app/bookone-connect/contentfulBookoneConnect";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
const Channels = () => {
  const { connectData } = useContentful();
    
  if (!connectData) return <p>Loading connect section...</p>;
  return (
    <div className="w-full flex flex-col items-center px-4 py-10">
      <div className="w-full max-w-[1329px] flex flex-col items-center justify-center">
        <h2 className="text-[#146683] text-3xl sm:text-4xl lg:text-[46px] font-bold leading-tight text-center font-['Inter']">
          {connectData?.connectThridHeading}
        </h2>

        <p className="text-[#146683] text-base sm:text-lg lg:text-[24px] leading-snug text-center mt-2 font-['Inter']">
          {documentToReactComponents(connectData?.connectThridParagraph)}
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

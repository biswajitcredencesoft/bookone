"use client";
import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { assets } from "@/assets/assets";
import { useContentful } from "../contentfulPricingContext";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const client = createClient({
  space: "wzmo4lmp2r9v",
  accessToken: "8byVN6ybNsGaYJ6FUTB0CB4mwuie5fIX-DxWy1GGi6E",
});

const UseBookone = () => {
  const { pricingData } = useContentful() || {};
  
    const [pmsData, setpmsData] = useState(null);
    const router = useRouter();
  
    useEffect(() => {
      async function fetchHeroContent() {
        try {
          const res = await client.getEntries({ content_type: "bookOnePms" }); // Replace with your actual content type ID
          setpmsData(res.items[0]?.fields);
          console.log("bookOnePms", res.items);
        } catch (err) {
          console.error("Contentful fetch error:", err);
        }
      }
  
      fetchHeroContent();
    }, []);

  if (!pricingData) return <p>Loading ...</p>;

  return (
    <div className="bg-[linear-gradient(to_bottom,#5E5B7D,#146683,#000000)] text-white px-4 py-24 md:py-32 lg:py-28 md:px-20 font-Inter">
      <div className="max-w-10xl mx-auto flex flex-col gap-20 md:gap-28">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-20">
          {/* Left Text Content */}
          <div className="flex-1 flex flex-col justify-center gap-6">
            <div>
              <h2 className="text-[#D0E6F3] text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-tight">
                {pricingData?.pricingThirdHeading?.split(" ").slice(0, 3).join(" ")}
                <br className="hidden md:block" />
                {pricingData?.pricingThirdHeading?.split(" ").slice(3).join(" ")}
              </h2>
            </div>
            <p className="text-white text-[16px] md:text-[18px] font-medium leading-relaxed max-w-sm shadow-text hidden md:block">
              {documentToReactComponents(pricingData?.pricingThirdParagrph)}
            </p>
          </div>

          {/* Right Testimonial Card */}
          <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 md:p-10 shadow-xl">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full bg-[#5E5B7D] border border-[#8C89AB] shrink-0" />
              <div className="text-white text-sm md:text-base">
                <FaQuoteLeft className="text-[#CEE6F0] text-lg md:text-xl mb-2" />
                <p className="leading-relaxed mb-3">
                  <span className="font-semibold text-white">
                    As we scaled to multiple properties, BookOne
                  </span>{" "}
                  remained the one solution that could keep up—simple, powerful,
                  and built for growth.
                </p>
                <p className="font-medium">Jane Doe</p>
                <p className="text-white/80">Managing Director, Hotel One</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-12 flex flex-col md:flex-row items-center gap-12 md:gap-16 shadow-xl">
          <div className="relative w-[220px] md:w-[280px] -mt-16 md:-mt-24">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={`https:${pmsData.pmsLastImage.fields.file.url}`}
                alt="Smiling professionals"
                unoptimized 
                width={700}
              height={700}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {pmsData?.pmsLastHeading}
                </h3>
                <p className="text-lg mb-0 max-w-xl mx-auto md:mx-0 hidden md:block">
                {documentToReactComponents(pmsData?.pmsLastParagarph)}
                </p>
              </div>

              <div className="shrink-0">
                <button className="bg-[#01677D] hover:bg-[#0f4b5c] text-[#CEE6F0]px-0  lg:px-6 py-2 md:px-6 md:py-3 rounded-md shadow-md transition duration-300 whitespace-nowrap">
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

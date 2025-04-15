"use client";
import { FaSyncAlt, FaKeyboard, FaCommentDots } from "react-icons/fa";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Link from "next/link";
import {  useEffect, useState } from "react";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
const client = createClient({
  space: "wzmo4lmp2r9v",
  accessToken: "8byVN6ybNsGaYJ6FUTB0CB4mwuie5fIX-DxWy1GGi6E",
});
const features = [
  {
    title: "Customisable to Your Brand",
    description:
      "Design freedom that reflects your identity — without the tech headaches.",
    icon: <FaSyncAlt />,
  },
  {
    title: "Accessibility & SEO-Ready",
    description: "Ease in navigation & optimised for search engine visibility.",
    icon: <FaKeyboard />,
  },
  {
    title: "Seamlessly Responsive",
    description:
      "Looks flawless and works perfectly on mobile, tablet, or desktop.",
    icon: <FaCommentDots />,
  },
];

const BeautifulBranded = () => {
      const [bookMaxData, setbookMaxData] = useState(null);
  
      useEffect(() => {
        async function fetchHeroContent() {
          try {
            const res = await client.getEntries({ content_type: "bookOneBookMax" }); // Replace with your actual content type ID
            setbookMaxData(res.items[0]?.fields);
  
    
          } catch (err) {
            console.error("Contentful fetch error:", err);
          }
        }
    
        fetchHeroContent();
      }, []);

      if (!bookMaxData) return <p>Loading...</p>;
  return (
    <div className="bg-[#EDF6FA] px-4 sm:px-6 lg:px-10 py-10 font-['Inter']">
      <div className="max-w-[1320px] mx-auto">
        {/* Header + Button */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 md:gap-8 mb-12 md:mb-16 slide-in-bottom">
          <div className="flex-1 text-center lg:text-left">
            <div className="text-[#8CCFF0] text-[14px] sm:text-[15px] font-bold uppercase tracking-[1px] mb-2">
              website builder 
            </div>
            <h2 className="text-[#146683] text-[22px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[130%]">
             {bookMaxData?.secondHeading}
              <br className="hidden sm:block" />
              {bookMaxData?.secondSubHeading}
            </h2>
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <Link href="/pricing">
              <button className="bg-[#01677D] border border-[#CEE6F0] text-white w-[226px] h-[48px] rounded-[16px] text-sm font-semibold shadow hover:bg-[#125a74] transition-all">
                Get Pricing
              </button>
            </Link>
          </div>
        </div>

      
        <div className="flex flex-col lg:flex-row gap-10 md:gap-12 lg:gap-20 slide-in-bottom">
          
          <div className="w-full lg:w-[520px] h-auto rounded-[20px] overflow-hidden shadow-lg mx-auto lg:mx-0">
            <Image
              src={`https:${bookMaxData?.secondSectionImg?.fields.file.url}`}
              alt="Efficiency"
              width={520}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

     
          <div className="flex-1 mt-6 lg:mt-0">
            <div className="space-y-6 sm:space-y-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 sm:p-0  rounded-[16px]  sm:bg-transparent"
                >
                  {/* Icon */}
                  <div className="min-w-[48px] min-h-[48px] sm:min-w-[70px] sm:min-h-[70px] flex items-center justify-center bg-[#F5FAFC] shadow-md rounded-[14px]">
                    <div className="text-[#01677D] text-[15px] sm:text-[32px] md:text-[36px]">
                      {feature.icon}
                    </div>
                  </div>

               
                  <div>
                    <h4 className="text-[#146683] text-[16px] sm:text-[20px] md:text-[24px] font-semibold leading-[130%] mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-[#535353] text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-[140%] max-w-[500px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Button */}
        <div className="block lg:hidden mt-10">
          <Link href="/pricing">
            <button className="bg-[#01677D] border border-[#CEE6F0] text-white w-[70%]  ml-[52px] h-[48px] rounded-[25px] text-sm font-semibold shadow hover:bg-[#125a74] transition-all ">
              Get Pricing
            </button>
          </Link>
        </div>
      </div>

      {/* Animation */}
      <style jsx global>{`
        @keyframes slideInBottom {
          0% {
            transform: translateY(50%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .slide-in-bottom {
          animation: slideInBottom 1.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default BeautifulBranded;

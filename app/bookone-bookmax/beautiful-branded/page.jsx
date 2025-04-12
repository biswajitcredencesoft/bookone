"use client";
import { FaSyncAlt, FaKeyboard, FaCommentDots } from "react-icons/fa";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Link from "next/link";

const BeautifulBranded = () => {
  const slideInBottom = {
    animation: "slideInBottom 1.5s ease-out",
  };

  return (
    <div className="bg-[#EDF6FA] px-4 sm:px-6 lg:px-8 py-20 font-['Inter']">
      <div className="max-w-[1440px] mx-auto lg:ml-20">
        <div
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12"
          style={slideInBottom}
        >
          <div className="flex-1">
            <p className="text-[#8CCFF0] ml-1 mb-4 text-[15px] font-bold uppercase tracking-[1px] leading-[100%]">
              Website Builder
            </p>
            <h2 className="text-[#146683] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[46px] font-bold leading-[130%]">
              Beautifully Branded,
              <br className="hidden sm:block" />
              Fully Optimized.
            </h2>
          </div>

          <div className="lg:mb-8 mb-4 lg:pr-[550px] w-full lg:w-auto">
            <Link href="/pricing">
              <button className="bg-[#01677D] border border-[#CEE6F0] text-white w-full sm:w-[226px] h-[45px] rounded-[16px] text-sm font-semibold shadow hover:bg-[#125a74] transition-all">
                Get Pricing
              </button>
            </Link>
          </div>
        </div>

        <div
          className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start"
          style={slideInBottom}
        >
          <div className="w-full lg:w-[493px] h-auto lg:h-[323px] rounded-[20px] overflow-hidden">
            <Image
              src={assets.Efficiency}
              alt="Efficiency"
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>

          <div className="flex-1 w-full lg:ml-16">
            <div className="space-y-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                  style={slideInBottom}
                >
                  <div className="w-[70px] h-[70px] sm:w-[80px] sm:h-[77px] flex items-center justify-center bg-white shadow-md rounded-[12px] flex-shrink-0">
                    <div className="text-[#01677D] text-[32px] sm:text-[41px] aspect-square">
                      {feature.icon}
                    </div>
                  </div>

                  <div className="ml-4 sm:ml-8">
                    <h4 className="text-[#146683] text-[20px] sm:text-[24px] font-medium leading-[130%] mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-[#535353] text-[15px] sm:text-[16px] font-medium leading-[130%] max-w-full sm:max-w-[331px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

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
      `}</style>
    </div>
  );
};

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

export default BeautifulBranded;

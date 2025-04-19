"use client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useContentful } from "@/components/ContentfulContext";
// import Image from "next/image";
// import { FaArrowRight } from "react-icons/fa";
// import Badge2 from "../assets/Badge-2.png";
// import Badge1 from "../assets/Badge-1.png";
import { assets } from "@/assets/assets";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const { heroData } = useContentful();

  if (!heroData) return <p>Loading...</p>;

  return (
    <section className="bg-[#ffffff] py-12 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-16 flex flex-col items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12">
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h1 className="text-[20px] md:text-[32px] lg:text-[41px] xl:text-[41px] 2xl:text-[47px] font-bold leading-tight text-[#1E1E1E] font-sans mb-6">
              {heroData?.mainheading}
              <span className="block mt-1 md:mt-4 lg:mt-4 text-[20px] md:text-[28px] lg:text-[48px] text-[#1E1E1E]">
                {heroData?.secondMainHeading}
              </span>
            </h1>

            <div className="hidden sm:block text-[#171C1E] font-inter text-[14px] md:text-[16px] lg:text-[18px] leading-[150%] font-normal mb-6 px-4 sm:px-0">
              {documentToReactComponents(heroData.heroParagraph)}
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start mt-4 md:mt-6">
              <Link href="/book-a-demo">
                <button className="w-[274px] h-[45px] bg-[#006D77] text-white px-4 py-2 rounded-[8px] font-semibold text-[16px] shadow-md hover:bg-[#005962] transition flex items-center justify-center">
                  {heroData?.buttonText || "Try BookOne Now"}
                </button>
              </Link>

              <Link href="/book-a-demo">
                <button className="w-[274px] h-[45px] bg-[#D8A353] text-[#171C1E] font-bold text-[16px] rounded-[8px] flex items-center justify-center transition-all duration-200">
                  <span className="w-6 h-6 mr-2 flex items-center justify-center">
                    <Image
                      src={assets.Laptop}
                      alt="Unlock A Free Trial"
                      width={24}
                      height={24}
                    />
                  </span>
                  Unlock A Free Trial
                </button>
              </Link>
            </div>
          </div>

          {/* Video Section */}
          <div className="lg:w-[60%] w-full  flex justify-center mt-0 md:mt-8 lg:mt-12 ">
            <div className="w-full max-w-[720px]  aspect-video rounded-3xl overflow-hidden">
              <video
                src={
                  heroData?.heroImage?.fields?.file?.url
                    ? `https:${heroData.heroImage.fields.file.url}`
                    : ""
                }
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

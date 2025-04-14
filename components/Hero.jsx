"use client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useContentful } from "@/components/ContentfulContext";
// import Image from "next/image";
// import { FaArrowRight } from "react-icons/fa";
// import Badge2 from "../assets/Badge-2.png";
// import Badge1 from "../assets/Badge-1.png";
import Link from "next/link";

const Hero = () => {
  const { heroData } = useContentful();

  if (!heroData) return <p>Loading hero section...</p>;

  return (
    <section className="bg-[#F5F5F5] py-12 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-16 flex flex-col items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12">
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h1 className="text-[20px] md:text-[32px] lg:text-[41px] xl:text-[41px] 2xl:text-[47px] font-bold leading-tight text-[#1E1E1E] font-sans mb-6">
              {heroData?.mainheading}
              <span className="block mt-1 md:mt-4 lg:mt-4 text-[20px] md:text-[28px] lg:text-[48px] text-[#006D77]">
                {heroData?.secondMainHeading}
              </span>
            </h1>

            <p className="hidden sm:block text-[#171C1E] font-inter text-[14px] md:text-[16px] lg:text-[18px] leading-[150%] font-normal mb-6 px-4 sm:px-0">
              {documentToReactComponents(heroData.heroParagraph)}
            </p>

            <div>
              <Link href="/book-a-demo">
                <button className="bg-[#006D77] text-white px-14 py-1 md:px-10 md:py-3 lg:px-10 lg:py-3 rounded-lg font-semibold text-base shadow-md hover:bg-[#005962] transition">
                  {heroData?.buttonText || "Try BookOne Now"}
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

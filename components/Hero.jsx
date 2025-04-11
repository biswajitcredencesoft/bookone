"use client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useContentful } from "@/components/ContentfulContext";

const Hero = () => {
  const { heroData } = useContentful();

  if (!heroData) return <p>Loading hero section...</p>;

  return (
    <section className="bg-[#F5F5F5] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1400px] xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-16 flex flex-col items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12">
          {/* Left: Text Content */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[48px] font-bold leading-tight text-[#1E1E1E] font-sans mb-6">
              {heroData?.mainheading} <br />
              <span className="block mt-4 text-[#006D77]">
                {heroData?.secondMainHeading}
              </span>
            </h1>

            <p className="text-[#171C1E] font-inter text-[24px] font-normal leading-[150%] mb-6 px-2 sm:px-0">
              {documentToReactComponents(heroData.heroParagraph)}
            </p>

            <div>
              <button className="bg-[#006D77] text-white px-10 py-3 rounded-lg font-semibold text-base shadow-md hover:bg-[#005962] transition">
                {heroData?.buttonText || "Try BookOne Now"}
              </button>
            </div>
          </div>

          {/* Right: Video */}
          <div className="lg:w-1/2 w-full flex justify-center mt-10 lg:mt-0">
            <div className="w-full max-w-[720px] aspect-video rounded-3xl overflow-hidden">
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

"use client";

import { FaQuoteLeft } from "react-icons/fa";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useContentful } from "@/app/bookone-pms/contentfulPmsContext";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Transformative = () => {
  const contentful = useContentful();

  if (!contentful || !contentful.pmsData) return <p>Loading ...</p>;

  const { pmsData } = contentful;

  return (
    <section className="bg-[#e5f3f7] px-4 py-16 flex flex-col items-center font-['Inter']">
      <h2 className="text-[22px] sm:text-[36px] md:text-[46px] font-bold text-[#146683] leading-[150%] text-center mb-12">
        {pmsData?.pmsReviewsHeading}
      </h2>

      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-6 mb-16">
        {[
          {
            percent: "30%",
            title: "Faster Check-ins.",
            desc: "Quicker front desk operations and less guest wait times.",
          },
          {
            percent: "50%",
            title: "Fewer Manual Errors.",
            desc: "Accurate data handling, reduces slip-ups and inconsistencies.",
          },
          {
            percent: "70%",
            title: "Less Training Time.",
            desc: "An intuitive interface lets your team hit the ground running.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="w-[70%] ml-16 md:ml-0 lg:ml-0 sm:w-[344px] h-[180px] md:h-[227px] bg-white rounded-[40px] shadow-inner flex flex-col items-center justify-center text-center px-6"
            style={{ boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="flex items-center gap-2 justify-center">
              <p className="text-[32px] font-bold text-[#146683]">
                {item.percent}
              </p>
              <p className="text-[16px] font-semibold text-[#146683]">
                {item.title}
              </p>
            </div>
            <p className="text-[14px] text-[#666] mt-2">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Testimonial Section */}
      <div
        className="w-full max-w-[1274px] rounded-[40px] px-6 sm:px-10 py-8 flex flex-col lg:flex-row justify-between items-center gap-8"
        style={{
          background: "#daeeee",
          boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="flex items-start gap-4 text-[#146683] max-w-full lg:max-w-[858px]">
          <Image src={assets.Quote} alt="Quote" className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] lg:w-[30px] lg:h-[30px] flex-shrink-0 text-[#146683]" />
          <p className="text-[14px] sm:text-[22px] lg:text-[20px] font-semibold leading-[22px] sm:leading-[36px] lg:leading-[40px]">
            {documentToReactComponents(pmsData?.pmsreviewsCta)}
          </p>
        </div>

        {/* Logo + Button */}
        <div className="flex flex-col items-center gap-4">
          <Image
            src={assets.Yogiraj}
            alt="Yogiraj Logo"
            className="w-[160px] sm:w-[180px] lg:w-[207px] h-auto object-contain flex-shrink-0"
          />
          <button className="w-[200px] sm:w-[190px] h-[42px] px-[12px] py-[10px] gap-[8px] rounded-[24px] border border-[#146683] bg-transparent text-[#146683] font-medium text-[12px] sm:text-[14px] lg:text-[16px] tracking-[0.48px] font-['Inter'] hover:bg-[#f0fafa] transition">
            Read Case Study
          </button>
        </div>
      </div>
    </section>
  );
};

export default Transformative;

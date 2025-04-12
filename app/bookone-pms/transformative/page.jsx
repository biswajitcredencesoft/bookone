"use client";

import { FaQuoteLeft } from "react-icons/fa";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useContentful } from "@/app/bookone-pms/contentfulPmsContext";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
const Transformative = () => {
  const { pmsData } = useContentful();
  
  if (!pmsData) return <p>Loading hero section...</p>;
  return (
    <section className="bg-[#e5f3f7] px-4 py-16 flex flex-col items-center font-['Inter']">
      <h2 className="text-[46px] font-bold text-[#146683] leading-[150%] text-center mb-12">
        {pmsData?.pmsReviewsHeading}
      </h2>

      <div className="flex flex-wrap justify-center gap-6 mb-16">
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
            className="w-[344px] h-[227px] bg-white rounded-[40px] shadow-inner flex flex-col items-center justify-center text-center px-6"
            style={{ boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <p className="text-[32px] font-bold text-[#146683]">
              {item.percent}
            </p>
            <p className="text-[16px] font-semibold text-[#146683] mt-1">
              {item.title}
            </p>
            <p className="text-[14px] text-[#666] mt-2">{item.desc}</p>
          </div>
        ))}
      </div>

      <div
        className="w-full max-w-[1274px] h-[292px] rounded-[40px] px-10 py-8 flex justify-between items-center flex-wrap gap-6"
        style={{
          background: "#daeeee",
          boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="flex items-start gap-4 text-[#146683] max-w-[858px]">
          <FaQuoteLeft className="w-[73px] h-[71px] flex-shrink-0 text-[#146683]" />
          <p className="text-[28px] font-semibold leading-[40px]">
          {documentToReactComponents(pmsData?.pmsreviewsCta)}
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Image
            src={assets.Yogiraj}
            alt="Yogiraj Logo"
            className="w-[207px] h-[121px] object-contain flex-shrink-0"
          />
          <button className="flex items-start justify-center w-[233px] h-[42px] px-[12px] py-[20px] gap-[8px] flex-shrink-0 rounded-[24px] border border-[#146683] bg-transparent text-[#146683] font-medium text-[24px] leading-[6px] tracking-[0.48px] font-['Inter'] hover:bg-[#f0fafa] transition">
            Read Case Study
          </button>
        </div>
      </div>
    </section>
  );
};

export default Transformative;

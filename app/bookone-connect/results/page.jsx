"use client";

import { FaQuoteLeft } from "react-icons/fa";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
const client = createClient({
  space: "wzmo4lmp2r9v",
  accessToken: "8byVN6ybNsGaYJ6FUTB0CB4mwuie5fIX-DxWy1GGi6E",
});
const Results = () => {

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

  if (!pmsData) return <p>Loading...</p>;

  return (
    <section className="bg-[#e5f3f7] px-4 py-16 flex flex-col items-center font-['Inter']">
      <h2 className="text-[22px] sm:text-[36px] md:text-[46px] font-bold text-[#146683] leading-[150%] text-center mb-12">
        {pmsData?.pmsReviewsHeading}
      </h2>

      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-6 mb-16">
        {[
          {
            percent: "99%",
            title: "Sync Accuracy.",
            desc: "Eliminate overbookings and rate mismatches.",
          },
          {
            percent: "50%",
            title: "Less Manual Work.",
            desc: "Save hours with automatic rate and availability syncs.",
          },
          {
            percent: "22%",
            title: "Increase In OTA Revenue.",
            desc: "Maximize visibility and bookings with better reach.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="w-full sm:w-[344px] h-[180px] md:h-[227px] bg-white rounded-[40px] shadow-inner flex flex-col items-center justify-center text-center px-6"
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

      {/* Testimonial Section */}
      <div
        className="w-full max-w-[1274px] rounded-[40px] px-6 sm:px-10 py-8 flex flex-col lg:flex-row justify-between items-center gap-8"
        style={{
          background: "#daeeee",
          boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="flex items-start gap-4 text-[#146683] max-w-full lg:max-w-[858px]">
          <FaQuoteLeft className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] lg:w-[73px] lg:h-[71px] flex-shrink-0 text-[#146683]" />
          <p className="text-[14px] sm:text-[22px] lg:text-[28px] font-semibold leading-[22px] sm:leading-[36px] lg:leading-[40px]">
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
          <button className="w-[200px] sm:w-[233px] h-[42px] px-[12px] py-[10px] gap-[8px] rounded-[24px] border border-[#146683] bg-transparent text-[#146683] font-medium text-[18px] sm:text-[20px] lg:text-[24px] tracking-[0.48px] font-['Inter'] hover:bg-[#f0fafa] transition">
            Read Case Study
          </button>
        </div>
      </div>
    </section>
  );
};

export default Results;

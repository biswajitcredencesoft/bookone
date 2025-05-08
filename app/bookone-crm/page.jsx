"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LevelUP from "../bookone-pms/level-up/page";
import { ContentfulProviderBookone } from "./contentfulBookOneCrm";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { assets } from "@/assets/assets";
import Link from "next/link";
import CrmBuild from "./crm-build/page";

const client = createClient({
  space: "wzmo4lmp2r9v",
  accessToken: "8byVN6ybNsGaYJ6FUTB0CB4mwuie5fIX-DxWy1GGi6E",
});

const BookOneCrm = () => {
  const [crmData, setcrmData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchHeroContent() {
      try {
        const res = await client.getEntries({ content_type: "bookOneCrm" }); // Replace with your actual content type ID
        setcrmData(res.items[0]?.fields);
        console.log("bookOneCrm", res.items);
      } catch (err) {
        console.error("Contentful fetch error:", err);
      }
    }

    fetchHeroContent();
  }, []);

  if (!crmData) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <ContentfulProviderBookone>
        <section className="flex flex-col-reverse lg:flex-row items-center justify-between  px-6 lg:pl-[5rem] lg:pr-[12rem] py-12 md:py-16 bg-white gap-0 md:gap-6 lg:gap-12">
          <div className="flex w-full lg:w-[600px] h-auto lg:h-[464px] gap-4 items-start shrink-0">
            <div className="flex pt-20 items-start gap-2 flex-[1_0_0]">
              <div className="relative w-full h-[204px] md:h-[384px] lg:h-[430px] rounded-[20px] overflow-hidden">
                <Image
                  src={`https:${crmData.heroImage.fields.file.url}`}
                  alt="Image 1"
                  layout="fill"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="w-full max-w-xl text-center lg:text-left">
            <p className="text-[#8CCFF0] font-medium uppercase tracking-[1px] text-[10px] md:text-[15px] leading-[15px]">
              CUSTOMER RELATIONSHIP MANAGEMENT
            </p>
            <h1 className="text-[22px] sm:text-[40px] lg:text-[48px] font-bold leading-[110%] text-[#171C1E] mt-3">
              {crmData?.crmheading} <br />
              <span className="text-[#146683]">{crmData?.heading2}</span>
            </h1>

            <p className="mt-6 text-[#171C1E] text-center  md:text-left  text-[15px] sm:text-[20px] lg:text-[24px] font-medium leading-[130%]">
              {documentToReactComponents(crmData?.subHeading)}
            </p>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start mt-4 md:mt-6">
              <Link href="/book-a-demo">
                <button className="w-[260px] h-[50px] rounded-[12px] border border-[#CEE6F0] bg-[#01677D] text-white font-medium text-base hover:bg-[#005965] transition-all">
                  Book A Demo
                </button>
              </Link>

              <Link href="/book-a-demo">
                <button className="w-[260px] h-[50px] bg-[#D8A353] text-[#171C1E] font-bold text-base rounded-[12px] flex items-center justify-center hover:bg-[#c89247] transition-all">
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
        </section>
      
      <CrmBuild/>
      </ContentfulProviderBookone>
      <LevelUP />
      <Footer />
    </>
  );
};

export default BookOneCrm;

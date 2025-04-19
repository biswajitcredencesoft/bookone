"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { assets } from "@/assets/assets";

import { useEffect, useState } from "react";
import Link from "next/link";
import Connectivity from "./connectivity/page";
import Channels from "./channels/page";
import Results from "./results/page";
import LevelUP from "../bookone-pms/level-up/page";
import { ContentfulProviderPMS } from "../bookone-pms/contentfulPmsContext";
import { ContentfulProviderBookone } from "./contentfulBookoneConnect";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";
const client = createClient({
  space: "wzmo4lmp2r9v",
  accessToken: "8byVN6ybNsGaYJ6FUTB0CB4mwuie5fIX-DxWy1GGi6E",
});
const BookOneConnect = () => {
  const router = useRouter();
  const [connectData, setconnectData] = useState(null);

  useEffect(() => {
    async function fetchHeroContent() {
      try {
        const res = await client.getEntries({ content_type: "bookOneConnect" }); // Replace with your actual content type ID
        setconnectData(res.items[0]?.fields);
        console.log("connectData", res.items);
      } catch (err) {
        console.error("Contentful fetch error:", err);
      }
    }

    fetchHeroContent();
  }, []);

  if (!connectData) return <p>Loading...</p>;
  return (
    <>
      <ContentfulProviderBookone>
        <Navbar />
      </ContentfulProviderBookone>
      <section className="flex flex-col-reverse lg:flex-row items-center justify-around  px-6 lg:pl-[5rem] lg:pr-[12rem] py-12 md:py-16 bg-white gap-0 md:gap-6 lg:gap-12">
        <div className="flex w-full lg:w-[600px] xl:w-[50%] xxl:w-[50%] h-auto  gap-4 items-start shrink-0">
          <div className="flex pt-20 items-start gap-2 flex-[1_0_0]">
            <div className="relative w-full h-[204px] md:h-[384px] lg:h-[60vh] rounded-[20px] overflow-hidden ">
              <Image
                src={`https:${connectData?.connectHeroImg.fields.file.url}`}
                alt="Image 1"
                fill
                className=" w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[600px] xl:w-[50%] xxl:w-[50%] max-w-xl text-center lg:text-left">
          <p className="text-[#8CCFF0] font-medium uppercase tracking-[1px] text-[10px] md:text-[15px] leading-[15px]">
            channel manager
          </p>
          <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[110%] text-[#171C1E] mt-3">
            {connectData?.connectheading} <br />
            <span className="text-[#146683]"> {connectData?.subheading}</span>
          </h1>
          <p className="mt-6 text-[#171C1E] text-center  md:text-left  text-[15px] sm:text-[20px] lg:text-[24px] font-medium leading-[130%]">
            {documentToReactComponents(connectData?.connectHeroParagrph)}
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
      <ContentfulProviderBookone>
        <Connectivity />
        <Channels />
      </ContentfulProviderBookone>

      <ContentfulProviderPMS>
        <Results />
        <LevelUP />
      </ContentfulProviderPMS>

      <Footer />
    </>
  );
};

export default BookOneConnect;

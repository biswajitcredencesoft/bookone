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

  
  if (!connectData) return <p>Loading content section...</p>;
  return (
    <>
    <ContentfulProviderBookone>
    <Navbar />
    </ContentfulProviderBookone>
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:pl-[5rem] lg:pr-[12rem] py-16 bg-white gap-6 lg:gap-12">
        <div className="flex w-full lg:w-[600px] h-auto lg:h-[464px] gap-4 items-start shrink-0">
          <div className="flex pt-20 items-start gap-2 flex-[1_0_0]">
            <div className="relative w-full h-[384px] rounded-[20px] overflow-hidden ">
              <Image
                src={`https:${connectData?.connectHeroImg.fields.file.url}`}
                alt="Image 1"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>

        <div className="w-full max-w-xl text-center lg:text-left">
          <p className="text-[#8CCFF0] font-medium uppercase tracking-[1px] text-[15px] leading-[15px]">
            channel manager
          </p>
          <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[110%] text-[#171C1E] mt-3">
            {connectData?.connectheading}{" "}
            <span className="text-[#146683]"> {connectData?.subheading}</span>
          </h1>
          <p className="mt-6 text-[#171C1E] text-[18px] sm:text-[20px] lg:text-[24px] font-medium leading-[130%]">
            {documentToReactComponents(connectData?.connectHeroParagrph)}
          </p>
          <Link href="/book-a-demo">
            <button
              onClick={() => router.push("/book-demo")}
              className="mt-8 w-[226px] h-[45px] rounded-[16px] border border-[#CEE6F0] bg-[#01677D] text-white font-medium text-base hover:bg-[#005965] transition-all"
            >
              Book A Demo
            </button>
          </Link>
        </div>
      </section>
      <ContentfulProviderBookone>
      <Connectivity />
      <Channels/>
    </ContentfulProviderBookone>

      <ContentfulProviderPMS>
      <Results/>
      <LevelUP/>
      </ContentfulProviderPMS>

      <Footer />
    </>
  );
};

export default BookOneConnect;

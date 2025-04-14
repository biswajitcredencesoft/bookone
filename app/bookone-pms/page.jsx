"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { assets } from "@/assets/assets";
import BuildOfEfficiency from "./build-efficiency/page";
import Transformative from "./transformative/page";
import LevelUP from "./level-up/page";
import { createClient } from "contentful";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ContentfulProviderPMS } from "./contentfulPmsContext";

const client = createClient({
  space: "wzmo4lmp2r9v",
  accessToken: "8byVN6ybNsGaYJ6FUTB0CB4mwuie5fIX-DxWy1GGi6E",
});

const BookOnePms = () => {
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
    <>
        <Navbar />
      <ContentfulProviderPMS>
        <section className="flex flex-col-reverse lg:flex-row items-center justify-between  px-6 lg:pl-[5rem] lg:pr-[12rem] py-12 md:py-16 bg-white gap-0 md:gap-6 lg:gap-12">
          <div className="flex w-full lg:w-[600px] h-auto lg:h-[464px] gap-4 items-start shrink-0">
            <div className="flex pt-20 items-start gap-2 flex-[1_0_0]">
              <div className="relative w-full h-[204px] md:h-[384px] lg:h-[430px] rounded-[20px] overflow-hidden">
                <Image
                  src={`https:${pmsData.pmsHeroImage.fields.file.url}`}
                  alt="Image 1"
                  layout="fill"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="w-full max-w-xl text-center lg:text-left">
            <p className="text-[#8CCFF0] font-medium uppercase tracking-[1px] text-[10px] md:text-[15px] leading-[15px]">
              Property Management System
            </p>
            <h1 className="text-[22px] sm:text-[40px] lg:text-[48px] font-bold leading-[110%] text-[#171C1E] mt-3">
              {pmsData?.pmstitle}{" "}
              <br />
              <span className="text-[#146683]">{pmsData?.pmsSubHeading}</span>
            </h1>
            <p className="mt-6 text-[#171C1E] text-center  md:text-left  text-[15px] sm:text-[20px] lg:text-[24px] font-medium leading-[130%]">
              {documentToReactComponents(pmsData?.pmsheroParagaroph)}
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
        <BuildOfEfficiency />
        <Transformative />
        <LevelUP />
      </ContentfulProviderPMS>
      
      <Footer />
    </>
  );
};

export default BookOnePms;

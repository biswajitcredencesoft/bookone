'use client'

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import BeautifulBranded from "./beautiful-branded/page";
import BookingEngine from "./booking-engine/page";
import LevelUP from "../bookone-pms/level-up/page";
import PaymentGateWays from "./payment-gateway/page";
import { ContentfulProviderPMS } from "../bookone-pms/contentfulPmsContext";
import { useEffect, useState } from "react";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
  space: "wzmo4lmp2r9v",
  accessToken: "8byVN6ybNsGaYJ6FUTB0CB4mwuie5fIX-DxWy1GGi6E",
});

const BookOneBookMax = () => {
  const [bookMaxData, setbookMaxData] = useState(null);

  useEffect(() => {
    async function fetchHeroContent() {
      try {
        const res = await client.getEntries({ content_type: "bookOneBookMax" }); // Replace with your actual content type ID
        setbookMaxData(res.items[0]?.fields);
      } catch (err) {
        console.error("Contentful fetch error:", err);
      }
    }

    fetchHeroContent();
  }, []);

  if (!bookMaxData) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:pl-[5rem] lg:pr-[15rem] py-16 bg-white gap-3 lg:gap-12">
        <div className="flex w-full lg:w-[600px] h-auto lg:h-[464px] gap-4 items-start shrink-0">
          <div className="flex md:pt-16 items-start gap-2 flex-[1_0_0]">
            <div className="relative w-full h-[250px] md:h-[384px] rounded-[20px] overflow-hidden">
              <Image
                src={`https:${bookMaxData?.heroImage?.fields.file.url}`}
                alt="Image 1"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full max-w-xl text-center lg:text-left">
          <p className="text-[#8CCFF0] font-medium uppercase tracking-[1px] text-[13px] md:text-[15px] leading-[15px]">
            WEBSITE & BOOKING ENGINE
          </p>
          <h1 className="text-[24px] sm:text-[40px] lg:text-[48px] font-bold leading-[110%] text-[#171C1E] mt-3">
            {bookMaxData?.bookmaxheading}{" "}
            <br />
            <span className="text-[#146683]">{bookMaxData?.subHeading}</span>
          </h1>
          <div className="mt-6 text-[#171C1E] text-[18px] sm:text-[20px] lg:text-[24px] font-medium leading-[130%] hidden md:block">
            {documentToReactComponents(bookMaxData?.mainparagraph)}
          </div>
          <Link href="/book-a-demo">
            <button
              onClick={() => router.push("/book-demo")}
              className="mt-8 w-[226px] h-[35px] md:h-[45px] ma:w-[226px] rounded-[16px] border border-[#CEE6F0] bg-[#01677D] text-white font-medium text-base hover:bg-[#005965] transition-all"
            >
              Book A Demo
            </button>
          </Link>
        </div>
      </section>

      <BeautifulBranded />
      <BookingEngine />
      <PaymentGateWays />
      <ContentfulProviderPMS>
        <LevelUP />
      </ContentfulProviderPMS>

      <Footer />
    </>
  );
};

export default BookOneBookMax;

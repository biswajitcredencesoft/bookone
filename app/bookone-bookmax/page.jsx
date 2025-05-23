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

const BookOneBookMax = () => {

    return (
        <>
            <Navbar />
             <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:pl-[5rem] lg:pr-[12rem] py-16 bg-white gap-6 lg:gap-12">
                    <div className="flex w-full lg:w-[600px] h-auto lg:h-[464px] gap-4 items-start shrink-0">
                      <div className="flex pt-10 md:pt-16  items-start gap-2 flex-[1_0_0]">
                        <div className="relative w-full h-[250px]  md:h-[384px] rounded-[20px] overflow-hidden ">
                          <Image
                            src={assets.Manager1}
                            alt="Image 1"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
            
                      <div className="flex h-[384px] justify-center items-center gap-2 flex-[1_0_0]">
                        <div className="relative w-full h-[250px] md:h-full rounded-[20px] overflow-hidden ">
                          <Image
                            src={assets.Manager2}
                            alt="Image 2"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
            
                      <div className="flex pt-10 items-start gap-2 flex-[1_0_0]">
                        <div className="relative w-full h-[250px] md:h-[384px] rounded-[20px] overflow-hidden ">
                          <Image
                            src={assets.Manager3}
                            alt="Image 3"
                            fill
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
                          Power Your{" "} <br />
                        <span className="text-[#146683]">Digital Presence</span>
                      </h1>
                      <p className="mt-6 text-[#171C1E] text-[18px] sm:text-[20px] lg:text-[24px] font-medium leading-[130%] hidden md:block">
                      BookOne BookMax builds high-converting hotel 
                      websites with real-time booking, secure payments, 
                      and seamless customization.
                      </p>
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

                  <BeautifulBranded/>
                  <BookingEngine/>
                  <PaymentGateWays/>
                  <ContentfulProviderPMS>
                  <LevelUP/>
                  </ContentfulProviderPMS>
                 
            <Footer />
        </>
    );
};

export default BookOneBookMax;

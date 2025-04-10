"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { assets } from "@/assets/assets";
import BuildOfEfficiency from "./build-efficiency/page";
import Transformative from "./transformative/page";
import LevelUP from "./level-up/page";
import Link from "next/link";
const BookOnePms = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:pl-[5rem] lg:pr-[12rem] py-16 bg-white gap-6 lg:gap-12">
        <div className="flex w-full lg:w-[600px] h-auto lg:h-[464px] gap-4 items-start shrink-0">
          <div className="flex pt-20 items-start gap-2 flex-[1_0_0]">
            <div className="relative w-full h-[384px] rounded-[20px] overflow-hidden ">
              <Image
                src={assets.Product1}
                alt="Image 1"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex h-[384px] justify-center items-center gap-2 flex-[1_0_0]">
            <div className="relative w-full h-full rounded-[20px] overflow-hidden ">
              <Image
                src={assets.Product2}
                alt="Image 2"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex pt-10 items-start gap-2 flex-[1_0_0]">
            <div className="relative w-full h-[384px] rounded-[20px] overflow-hidden ">
              <Image
                src={assets.Product3}
                alt="Image 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full max-w-xl text-center lg:text-left">
          <p className="text-[#8CCFF0] font-medium uppercase tracking-[1px] text-[15px] leading-[15px]">
            Property Management System
          </p>
          <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[110%] text-[#171C1E] mt-3">
            One System,{" "}
            <span className="text-[#146683]">Complete Management.</span>
          </h1>
          <p className="mt-6 text-[#171C1E] text-[18px] sm:text-[20px] lg:text-[24px] font-medium leading-[130%]">
            From first impression to final checkout, orchestrate every detail of
            your guest experience, operational flow, and brand presence—fluidly,
            intelligently, and from anywhere.
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
      <Footer />
    </>
  );
};

export default BookOnePms;

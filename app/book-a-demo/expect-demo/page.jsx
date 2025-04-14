"use client";

import Image from "next/image";
import { assets } from "@/assets/assets";

const ExpectDemo = () => {
  return (
    <section className="py-10 px-4 sm:px-6 md:px-10 lg:px-16 bg-white">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10 lg:gap-6">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <h2 className="mt-2 text-[22px] sm:text-[26px] md:text-[30px] text-[#146683] font-bold leading-snug font-['Inter'] text-center lg:hidden px-2 sm:px-4">
            What Can You Expect In The Demo?
          </h2>

          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px] mb-4">
            <Image
              src={assets.ELeft}
              alt="Demo Logo"
              layout="fill"
              objectFit="contain"
              className="rounded-xl"
            />
          </div>

          {/* Text list under heading (mobile-only, shown under image) */}
          <ul className="mt-4 space-y-4 sm:space-y-5 text-[#729DAB] text-[15px] sm:text-[17px] md:text-[18px] leading-relaxed font-['Inter'] text-left px-4 max-w-[95%] mx-auto block lg:hidden">
            <li>
              <span className="font-bold">1.</span> Every property is different
              — we start by{" "}
              <span className="font-bold">
                understanding your day-to-day challenges
              </span>
              , growth goals, and guest experience priorities.
            </li>
            <li>
              <span className="font-bold">2.</span> See exactly how our
              all-in-one hotel platform fits into your workflow.{" "}
              <span className="font-bold">Real-time walkthrough.</span>
            </li>
            <li>
              <span className="font-bold">3.</span> Have questions about{" "}
              <span className="font-bold">
                setup, integrations, or switching over
              </span>
              ? We’ll break it all down — no jargon, just clear answers.
            </li>
          </ul>
        </div>

        {/* Desktop version of text (hidden on mobile) */}
        <div className="w-full lg:w-1/2 hidden lg:block text-left">
          <h2 className="text-[40px] text-[#146683] font-bold leading-snug font-['Inter'] mb-6">
            What Can You Expect In The Demo?
          </h2>

          <ul className="space-y-5 text-[#729DAB] text-[22px] leading-relaxed font-['Inter'] max-w-2xl">
            <li>
              <span className="font-bold">1.</span> Every property is different
              — we start by{" "}
              <span className="font-bold">
                understanding your day-to-day challenges
              </span>
              , growth goals, and guest experience priorities.
            </li>
            <li>
              <span className="font-bold">2.</span> See exactly how our
              all-in-one hotel platform fits into your workflow.{" "}
              <span className="font-bold">Real-time walkthrough.</span>
            </li>
            <li>
              <span className="font-bold">3.</span> Have questions about{" "}
              <span className="font-bold">
                setup, integrations, or switching over
              </span>
              ? We’ll break it all down — no jargon, just clear answers.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExpectDemo;

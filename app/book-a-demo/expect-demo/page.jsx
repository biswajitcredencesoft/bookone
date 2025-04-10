'use client';

import Image from 'next/image';
import { assets } from '@/assets/assets';

const ExpectDemo = () => {
  return (
    <section className="py-10 px-4 sm:px-6 md:px-10 lg:px-16 bg-white">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10 lg:gap-6">
        
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px]">
            <Image
              src={assets.ELeft}
              alt="Demo Logo"
              layout="fill"
              objectFit="contain"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-[#146683] font-bold leading-snug font-['Inter'] mb-6">
            What Can You Expect In The Demo?
          </h2>

          <ul className="space-y-5 sm:space-y-6 text-[#729DAB] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-relaxed font-['Inter'] max-w-2xl mx-auto lg:mx-0">
            <li>
              <span className="font-bold">1.</span> Every property is different — we start by{' '}
              <span className="font-bold">understanding your day-to-day challenges</span>, growth goals, and guest experience priorities.
            </li>
            <li>
              <span className="font-bold">2.</span> See exactly how our all-in-one hotel platform fits into your workflow.{' '}
              <span className="font-bold">Real-time walkthrough.</span>
            </li>
            <li>
              <span className="font-bold">3.</span> Have questions about{' '}
              <span className="font-bold">setup, integrations, or switching over</span>? We’ll break it all down — no jargon, just clear answers.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExpectDemo;

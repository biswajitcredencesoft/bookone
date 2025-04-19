'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useContentful } from "@/app/bookone-pms/contentfulPmsContext";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { assets } from '@/assets/assets';

const BuildOfEfficiency = () => {
  const contentful = useContentful();

  if (!contentful || !contentful.pmsData) return <p>Loading ...</p>;

  const { pmsData } = contentful;

  return (
    <div className="bg-[#EDF6FA] px-4 sm:px-6 lg:px-8 py-10 md:py-12 font-['Inter']">
      <div className="max-w-[1440px] mx-auto">

     
        <div className="flex flex-col lg:flex-row justify-between items-center md:items-start gap-6">
          <h2 className="text-[#146683] text-[26px] sm:text-[36px] md:text-[40px] lg:text-[46px] font-bold leading-[140%] mt-0 md:mt-4 lg:mt-4">
            {pmsData?.pmsSecondsectionheading} <br /> {pmsData?.pmsSecondsectionheadingOne}
          </h2>

          <p className="text-[#146683] mt-2 md:mt-4 lg:mt-8 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[130%] max-w-xl hidden md:block">
            {documentToReactComponents(pmsData?.pmsSecondsectionParagarph)}
          </p>

      
          <div className="mt-4 lg:mt-8 hidden lg:block">
            <Link href="/pricing">
              <button className="w-[180px] h-[42px] rounded-[14px] border border-[#CEE6F0] bg-[#01677D] text-white font-semibold text-[15px]">
                Get Pricing
              </button>
            </Link>
          </div>
        </div>

       
        <div className="mt-10 md:mt-12 flex flex-col lg:flex-row gap-10 items-start">

       
          <div className="w-full lg:w-[493px] h-[220px] sm:h-[260px] md:h-[300px] lg:h-[323px] rounded-[20px] overflow-hidden flex-shrink-0">
            <Image
              src={`https:${pmsData.pmsSecondSectionImage.fields.file.url}`}
              alt="Efficiency"
              width={493}
              height={323}
              unoptimized 
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>

          {/* Right Features */}
          <div className="flex-1 mt-10 lg:mt-16 w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 sm:gap-x-6 sm:gap-y-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4"
                >
                  
                  <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex items-center justify-center bg-[rgba(191,233,255,0.20)] shadow rounded-[12px] flex-shrink-0">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={48}
                      height={48}
                      className="w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] md:w-[48px] md:h-[48px] object-contain"
                    />
                  </div>

                 
                  <span className="text-[#171C1E] text-[14px] sm:text-[18px] md:text-[20px] mt-4 font-medium leading-snug">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>

      
            <div className="mt-10 block lg:hidden">
              <Link href="/pricing">
                <button className="w-full sm:w-[200px] h-[42px] rounded-[14px] border border-[#CEE6F0] bg-[#01677D] text-white font-semibold text-[15px] mx-auto">
                  Get Pricing
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Feature List using custom images
const features = [
  { title: 'Front Office & Housekeeping', image: assets.Resturant},
  { title: 'Food & Beverages', image: assets.Resturant1 },
  { title: 'HRMs & Payroll Management', image: assets.Resturant2 },
  { title: 'Booking Management', image: assets.Resturant3 },
  { title: 'Venue & Event Scheduling', image: assets.Resturant4 },
  { title: 'Finance & Billing', image: assets.Resturant5 }
]

export default BuildOfEfficiency

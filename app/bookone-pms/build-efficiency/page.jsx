'use client'
import {
  FaUtensils,
  FaChartBar,
  FaBookOpen,
  FaUserTie,
  FaConciergeBell,
  FaFileInvoice
} from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { useContentful } from "@/app/bookone-pms/contentfulPmsContext";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const BuildOfEfficiency = () => {
  const { pmsData } = useContentful();

  if (!pmsData) return <p>Loading hero section...</p>;

  return (
    <div className="bg-[#EDF6FA] px-4 sm:px-6 lg:px-8 py-10 md:py-12 font-['Inter']">
      <div className="max-w-[1440px] mx-auto">

        {/* Heading Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center md:items-start gap-6">
          <h2 className="text-[#146683] text-[26px] sm:text-[36px] md:text-[40px] lg:text-[46px] font-bold leading-[140%]">
            {pmsData?.pmsSecondsectionheading} <br /> {pmsData?.pmsSecondsectionheadingOne}
          </h2>

          <p className="text-[#146683] mt-2 md:mt-4 lg:mt-8 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[130%] max-w-xl hidden md:block">
            {documentToReactComponents(pmsData?.pmsSecondsectionParagarph)}
          </p>

          {/* Desktop Only Button */}
          <div className="mt-4 lg:mt-8 hidden lg:block">
            <Link href="/pricing">
              <button className="w-[180px] h-[42px] rounded-[14px] border border-[#CEE6F0] bg-[#01677D] text-white font-semibold text-[15px]">
                Get Pricing
              </button>
            </Link>
          </div>
        </div>

        {/* Image + Features Section */}
        <div className="mt-10 md:mt-12 flex flex-col lg:flex-row gap-10 items-start">

          {/* Left Image */}
          <div className="w-full lg:w-[493px] h-[220px] sm:h-[260px] md:h-[300px] lg:h-[323px] rounded-[20px] overflow-hidden flex-shrink-0">
            <Image
              src={`https:${pmsData.pmsSecondSectionImage.fields.file.url}`}
              alt="Efficiency"
              width={493}
              height={323}
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>

          {/* Right Features */}
          <div className="flex-1 mt-10 lg:mt-16 w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 sm:gap-x-6 sm:gap-y-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  {/* Icon Box */}
                  <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] flex items-center justify-center bg-[rgba(191,233,255,0.20)] shadow rounded-[10px] flex-shrink-0">
                    <div className="text-[#01677D] text-[18px] sm:text-[20px] md:text-[24px]">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <span className="text-[#171C1E] text-[14px] sm:text-[16px] md:text-[18px] font-medium leading-snug">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Mobile & Tablet Button */}
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

const features = [
  { title: 'Food & Beverages', icon: <FaUtensils /> },
  { title: 'Analytics & Reporting', icon: <FaChartBar /> },
  { title: 'Booking Management', icon: <FaBookOpen /> },
  { title: 'HRMs & Payroll Management', icon: <FaUserTie /> },
  { title: 'Front Office & Housekeeping', icon: <FaConciergeBell /> },
  { title: 'Finance & Billing', icon: <FaFileInvoice /> }
]

export default BuildOfEfficiency

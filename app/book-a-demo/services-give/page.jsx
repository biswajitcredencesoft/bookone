'use client';

import {
  FaHeadphones,
  FaFileAlt,
  FaMobileAlt,
  FaUserCheck
} from 'react-icons/fa';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const services = [
  {
    icon: <Image src={assets.Support1} alt="Suport"  className="text-[#146683]" />,
    title: '24/7 Support',
    description: 'Talk to people who speak hotel, not tech.',
    button: 'Contact Us'
  },
  {
    icon: <Image src={assets.Support2} alt="Suport" className="text-[#146683]" />,
    title: 'Flexible Pricing',
    description: 'All the features you need, none of the bloated costs.',
    button: 'Pricing'
  },
  {
    icon: <Image src={assets.Support3} alt="Suport" className="text-[#146683]" />,
    title: 'All-in-one Mobile App',
    description: 'Your hotel, fully managed from your phone.',
    button: 'Download App'
  },
  {
    icon: <Image src={assets.Support4} alt="Suport" className="text-[#146683]" />,
    title: 'Domain Experts',
    description: 'More than software — it’s hospitality intelligence.',
    button: 'About Us'
  }
];

const ServicesGive = () => {
  return (
    <div className="w-full bg-[#ddeef3] py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1546px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-4"
          >
            <div className="text-[64px] sm:text-[72px] md:text-[50px] lg:text-[60px]">
              {service.icon}
            </div>
            <h3 className="text-[#171C1E] text-[20px] sm:text-[22px] md:text-[24px] font-semibold leading-tight">
              {service.title}
            </h3>
            <p className="text-[#171C1E] text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-[250px]">
              {service.description}
            </p>
            <button className="px-6 py-2 sm:px-8 sm:py-2.5 border-2 border-[#CEE6F0] bg-[#F5F5F5] rounded-[16px] text-[14px] sm:text-[15px] md:text-[16px]">
              {service.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGive;

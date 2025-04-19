'use client';

import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';

const hotelLogos = [
  { src: assets.Hotel10, alt: 'BSG Hotel' },
  { src: assets.Hotel11, alt: 'Flora Ecostay' },
  { src: assets.Hotel12, alt: 'Yogiraj' },
  { src: assets.Hotel13, alt: 'Greenstar Inn' },
];

const TrustBookOne = () => {
  return (
    <section className="w-full bg-gradient-to-b to-white via-white bg-opacity-10 py-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-6">

        <div className="text-[#146683] text-center md:text-left">
          <h2 className="font-bold text-[27px] md:text-[36px] leading-[150%] font-['Inter'] hidden md:block">
            400+ Hotels <br className="md:hidden" />
            Trust BookOne
          </h2>
          <h2 className="font-bold text-[20px] md:text-[36px] leading-[150%] font-['Inter'] block md:hidden">
            400+ Hotels Trust BookOne
          </h2>
        </div>

        
        <div className="relative w-full md:w-auto overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: 'linear',
            }}
          >
           
            {[...hotelLogos, ...hotelLogos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center aspect-square 
                  w-[96px] h-[96px] sm:w-[112px] sm:h-[112px] md:w-[128px] md:h-[128px] lg:w-[144px] lg:h-[144px]"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={144}
                  height={144}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default TrustBookOne;

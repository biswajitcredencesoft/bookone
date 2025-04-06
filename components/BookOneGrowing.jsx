import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const BookOneGrowing = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,_#5E5B7D,_#146683,_#000000)] text-white px-4 py-16 md:px-20 font-sans">
      <div className="max-w-6xl mx-auto space-y-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: "100+", label: "Cities where BookOne is active" },
              { number: "4000+", label: "Hotels worldwide and growing" },
              { number: "1M", label: "Bookings Managed" },
              { number: "80+", label: "Exciting features in BookOne" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                custom={idx * 0.2}
                className="bg-white/90 text-[#1F2937] rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition duration-300"
              >
                <p className="text-3xl font-bold">{item.number}</p>
                <p className="mt-2 text-sm">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.2}
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-snug text-center md:text-left">
              BookOne is Growing,
              <br className="hidden md:block" /> So Are Our Hotels
            </h2>
            <p className="text-lg leading-relaxed text-center md:text-left">
              Join the global network of hotels that trust BookOne to simplify,
              scale, and succeed.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0.3}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-12 flex flex-col md:flex-row items-center gap-10 md:gap-16 shadow-xl">
            <div className="relative w-[220px] md:w-[280px] -mt-20 md:-mt-28">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={assets.banner}
                  alt="Smiling professionals"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Don’t Just Keep Up —<br className="hidden md:block" /> Level Up!
              </h3>
              <p className="text-lg mb-6 max-w-xl mx-auto md:mx-0">
                BookOne isn’t just hotel software — it’s your all-in-one growth
                partner.
              </p>
              <button className="bg-[#01677D] hover:bg-[#0f4b5c] text-[#CEE6F0] px-6 py-3 rounded-md shadow-md transition duration-300">
                See What BookOne Can Do For You
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookOneGrowing;

'use client'
import Image from "next/image";
import { assets } from "@/assets/assets";

const KeepUp = () => {
    return (
        <div className="bg-[linear-gradient(to_bottom,_#5E5B7D,_#146683,_#000000)] text-white px-6 md:px-16  py-20 md:py-32 font-Inter">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-12 flex flex-col md:flex-row items-center gap-10 md:gap-16 shadow-xl">

           
                <div className="relative w-40 sm:w-52 md:w-64 -mt-20 md:-mt-28">
                    <div className="rounded-xl overflow-hidden shadow-lg w-full">
                        <Image
                            src={assets.banner}
                            alt="Smiling professionals"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

               
                <div className="flex-1 w-full">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
                        
                        {/* Text */}
                        <div className="text-center md:text-left max-w-xl">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 leading-snug">
                                Don’t Just Keep Up —<br className="hidden md:block" />
                                Level Up!
                            </h3>
                            <p className="text-base sm:text-lg hidden md:block">
                                BookOne isn’t just hotel software — it’s your all-in-one growth partner.
                            </p>
                        </div>

                        {/* Button */}
                        <div className="mt-4 md:mt-0">
                            <button className="bg-[#01677D] border-[#CEE6F0] border-[1px] hover:bg-[#0f4b5c] text-[#CEE6F0] px-0  lg:px-6 py-2 md:px-6 md:py-3 rounded-md shadow-md transition duration-300 whitespace-nowrap text-sm sm:text-base border p-[10px]">
                                See What BookOne Can Do For You
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default KeepUp;

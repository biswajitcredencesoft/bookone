"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const PaymentGateWays = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById("payment-gateway-section");
    if (section && window.scrollY + window.innerHeight > section.offsetTop) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionStyle = {
    transition: "opacity 2s ease, transform 2s ease",
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
  };

  return (
    <section
      id="payment-gateway-section"
      className="w-full bg-white px-4 py-12 sm:py-16"
    >
      <div
        className="max-w-[1440px] mx-auto px-2 sm:px-4"
        style={sectionStyle}
      >
        <h2 className="text-[20px] sm:text-[36px] md:text-[46px] font-bold leading-snug text-[#146683] text-center font-['Inter'] mb-6">
          Integrate With Trusted  <br />
          Payment Gateways
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-14 text-center sm:text-left ">
          <p className="text-[16px] sm:text-[18px] md:text-[22px] font-medium leading-[150%] text-[#146683] font-['Inter'] max-w-[500px] hidden md:block">
            Easily integrate with multiple gateways to offer a seamless payment
            experience.
          </p>

          <div className="mt-2 sm:mt-0">
            <button
              title="Talk to Sales"
              className="group flex items-center h-10 bg-[#146683] text-white rounded-full overflow-hidden transition-all duration-300 ease-in-out w-[40px] hover:w-[150px] sm:h-10 sm:hover:w-[160px] hover:bg-[#BFE9FF] px-3 mx-auto sm:mx-0"
            >
              <div className="flex items-center justify-center w-6 min-w-[24px] h-6 bg-[#0E5B6F] rounded-full -ml-1">
                <FaArrowRight className="text-sm -rotate-45 transition-transform duration-300 group-hover:translate-x-1 text-white" />
              </div>
              <span className="ml-4 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 text-sm whitespace-nowrap text-[#146683]">
                Explore more
              </span>
            </button>
          </div>
        </div>

        <div className="flex justify-center px-2">
          <div
            className="w-full max-w-[900px]"
            style={{
              transition: "opacity 2s ease, transform 2s ease",
            }}
          >
            <Image
              src={assets.UPI}
              alt="UPI Gateways"
              width={1055}
              height={296}
              className="w-full h-auto object-contain rounded-xl shadow-sm"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "scale(1)" : "scale(0.95)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentGateWays;

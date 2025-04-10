import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { assets } from "@/assets/assets";

// Integration data
const integrationData = [
  {
    title: "Get Connected On Top OTA’s!",
    logos: [
      assets.MakeMyTrip,
      assets.Expedia,
      assets.Agoda,
      assets.Booking_Com,
    ],
  },
  {
    title: "Payment Gateways For Fast & Secure Payments.",
    logos: [assets.Paytm, assets.PhonePay, assets.Paypal, assets.Razorpay],
  },
  {
    title: "Sync Your Inventory With Trusted Channel Managers.",
    logos: [
      assets.BookingJini,
      assets.SiteMinder,
      assets.Channex,
      assets.Eglobe,
    ],
  },
];

const rightBoxes = [
  {
    title: "Stay Discoverable On Meta Search Engine.",
    logos: [
      assets.TripAdvisor,
      assets.SkyScanner,
      assets.Google_Hotels,
      assets.Wego,
    ],
  },
  {
    title: "Connect With Powerful B2B Partners For Bigger Reach.",
    logos: [assets.HyperGuest, assets.Tbo_com],
  },
];

// Hook to check if in viewport
const useInView = (options) => {
  const ref = useRef(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIntersecting(true);
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return [ref, isIntersecting];
};

// Reusable card component
const IntegrationCard = ({ title, logos }) => {
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between min-h-[190px] transition-all duration-700 ease-out shadow-md hover:shadow-lg transform ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <p className="font-semibold text-[#146683] text-[16px] sm:text-[20px] mb-4 leading-snug">
        {title}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4 items-center">
        {logos.map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center h-[48px] sm:h-[56px]"
          >
            <Image
              src={logo}
              alt={`Logo ${i}`}
              height={40}
              width={100}
              className="object-contain max-h-[40px] w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Main section
const OtaIntegration = () => {
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <div className="w-full px-4 py-12 sm:py-16 bg-gradient-to-br from-[#e6f0f5] to-[#dbe7ef]">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
        {/* Left column */}
        <div className="flex flex-col gap-6">
          {integrationData.map((data, index) => (
            <IntegrationCard
              key={index}
              title={data.title}
              logos={data.logos}
            />
          ))}
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6 mb-2">
          {/* Section heading */}
          <div
            ref={ref}
            className={`transition-all duration-700 ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10 pointer-events-none"
            }`}
          >
            <h2 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] font-bold text-[#146683] leading-snug">
              The Right Integrations Make
              <br />
              <span> All The Difference</span>
            </h2>
            <div className="text-gray-700 text-sm sm:text-base">
              <p className="mb-1">
                From bookings to billing, BookOne connects with
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <p>the platforms that power your property.</p>
                <button
                  title="Explore more"
                  className="group flex items-center h-10 bg-[#146683] text-white rounded-full overflow-hidden transition-all duration-300 ease-in-out w-[40px] hover:w-[150px] sm:h-10 sm:hover:w-[160px] hover:bg-[#BFE9FF] px-3"
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
          </div>

          {/* Right side cards */}
          {rightBoxes.map((box, i) => (
            <IntegrationCard key={i} title={box.title} logos={box.logos} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtaIntegration;

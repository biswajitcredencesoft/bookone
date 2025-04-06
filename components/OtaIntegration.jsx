import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const integrationData = [
  {
    title: "Get Listed On Top OTA’s!",
    logos: [
      // "/assets/mmt.png",
      // "/assets/expedia.png",
      // "/logos/agoda.png",
      // "/logos/booking.png",
    ],
  },
  {
    title: "Payment Gateways For Fast & Secure Payments.",
    logos: [
      // "/logos/paytm.png",
      // "/logos/phonepe.png",
      // "/logos/paypal.png",
      // "/logos/razorpay.png",
    ],
  },
  {
    title: "Sync Your Inventory With Trusted Channel Managers.",
    logos: [
      // "/logos/bookingjini.png",
      // "/logos/siteminder.png",
      // "/logos/channex.png",
      // "/logos/ezee.png",
    ],
  },
];

const rightBoxes = [
  {
    title: "Stay Discoverable On Meta Search Engine.",
    logos: [
      // "/logos/tripadvisor.png",
      // "/logos/skyscanner.png",
      // "/logos/google.png",
      // "/logos/wego.png",
    ],
  },
  {
    title: "Connect With Powerful B2B Partners For Bigger Reach.",
    logos: [
      // "/logos/hyperguest.png",
      // "/logos/tbo.png",
    ],
  },
];

const IntegrationCard = ({ title, logos }) => (
  <div className="bg-white shadow-md hover:shadow-lg rounded-2xl p-5 flex flex-col justify-between transition-all duration-200">
    <p className="font-semibold text-[#146683] text-[15px] mb-4">{title}</p>

    <div className="flex flex-wrap gap-4 items-center mb-6">
      {logos.map((logo, i) => (
        <div key={i} className="relative h-6 w-auto">
          <Image
            src={logo}
            alt={`Logo ${i}`}
            height={24}
            width={70}
            className="object-contain h-12 w-auto"
          />
        </div>
      ))}
    </div>

    {/* Explore more button UI */}
    <div className="flex justify-end">
      <button className="flex items-center gap-2 bg-[#c1ebfd] text-[#146683] px-4 py-2 rounded-full hover:bg-[#b3e4fc] transition group">
        <span className="flex items-center justify-center w-7 h-7 bg-[#146683] rounded-full transition-transform group-hover:translate-x-1">
          <FaArrowRight className="text-white text-xs" />
        </span>
        <span className="text-sm font-medium">Explore more</span>
      </button>
    </div>
  </div>
);

const OtaIntegration = () => {
  return (
    <div className="w-full px-4 py-12 bg-gradient-to-br from-[#e6f0f5] to-[#dbe7ef]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Left side cards */}
        <div className="space-y-6">
          {integrationData.map((data, index) => (
            <IntegrationCard key={index} title={data.title} logos={data.logos} />
          ))}
        </div>

        {/* Right side content and cards */}
        <div className="space-y-6">
          <div>
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#146683] leading-snug mb-3">
              The Right Integrations <br />
              <span className="text-[#146683]">Make All The Difference</span>
            </h2>
            <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed">
              From bookings to billing, BookOne connects with the platforms that power your property.
            </p>
          </div>

          {rightBoxes.map((box, i) => (
            <IntegrationCard key={i} title={box.title} logos={box.logos} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtaIntegration;

'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaCheck } from 'react-icons/fa';
import PowerOf from './powerof/page';
import UseBookone from './use-bookone/page';
import { ContentfulProviderpricing} from './contentfulPricingContext';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";
const client = createClient({
  space: "wzmo4lmp2r9v",
  accessToken: "8byVN6ybNsGaYJ6FUTB0CB4mwuie5fIX-DxWy1GGi6E",
});

const Pricing = () => {
  const [currency, setCurrency] = useState("INR");
    const [pricingData, setpricingData] = useState(null);

    useEffect(() => {
      async function fetchHeroContent() {
        try {
          const res = await client.getEntries({ content_type: "pricing" }); // Replace with your actual content type ID
          setpricingData(res.items[0]?.fields);
          console.log("pricing", res.items);
  
        } catch (err) {
          console.error("Contentful fetch error:", err);
        }
      }
  
      fetchHeroContent();
    }, []);
  const pricingMap = {
    INR: ["₹1199", "₹1499", "₹2099"],
    USD: ["$99", "$129", "$179"],
  };

  const cards = [
    {
      icon: "🏠",
      title: "Ideal for",
      subtitle: "Guest Houses, Homestays, Budget Hotels",
      plan: "BookOne Starter",
      features: [
        "Custom website & booking engine (with integrated payments)",
        "Accommodation Dashboard – Simplified check-ins, check-outs & stay tracking",
        "Reservation & Front Desk Management",
        "Channel Manager – OTA Integration on MMT, Yatra, Agoda, Travelguru & EaseMyTrip",
        "Single-user access",
        "Online setup & training included",
      ],
      highlight: false,
    },
    {
      icon: "🏨",
      title: "Ideal for",
      subtitle: "Growing Hotels & Boutique Stays",
      plan: "BookOne Essential",
      features: [
        "All features of 'Starter' plan",
        "Room Management – Real-time availability & reservation management",
        "Advanced payment handling & automated invoicing",
        "Channel manager – OTA integration on Booking.com, Trip.com, Airbnb and Expedia",
        "Mobile app for on-the-go hotel management",
        "Reporting – Night audit, Cashier, GST & Police Check-in reports",
        "Multi-user access (Up to 5 users)",
        "Online setup & training included",
      ],
      highlight: true,
    },
    {
      icon: "🏢",
      title: "Ideal for",
      subtitle: "Resorts, Luxury Hotels, Multi-Property Groups",
      plan: "BookOne Premium",
      features: [
        "All features of 'Essential' plan",
        "Multi-department automation: housekeeping, guest services & add-on services",
        "HRMS for payroll, attendance & staff management",
        "Channel Manager – Full OTA integration for F&B room inventory & rate management",
        "Inventory & recipe management for F&B control",
        "POS & QR-based ordering for faster service",
        "All reports & complete analytics dashboards",
        "Multi-user access (Up to 20 users)",
        "Online setup & training included",
      ],
      highlight: false,
    },
  ];

  return (
    <>
      <Navbar />

      <ContentfulProviderpricing>
      <div className="bg-[#f6f7fb] px-4 py-16 sm:px-8 md:px-20 mt-5">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            {pricingData?.pricingheading}
          </h2>
          <p className="text-gray-600 mt-4 hidden md:block">
            {documentToReactComponents(pricingData?.pricingParagraph)}
          </p>

          <div className="mt-6">
            <label className="text-sm font-medium mr-2">Choose Currency:</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="border border-gray-300 rounded-md font-bold text-black px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#146683]"
            >
              <option value="INR">INR</option>
              <option value="USD">USD</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-10xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-md p-6 md:p-8 flex flex-col h-full transition-all hover:scale-[1.02] duration-300 ${
                card.highlight ? 'bg-[#014669] text-white' : 'bg-white text-gray-900'
              }`}
            >
              <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#8CCFF0] text-lg">
                    {card.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-500">{card.title}</div>
                    <div
                      className={`text-sm font-semibold ${
                        card.highlight ? 'text-white' : 'text-gray-700'
                      }`}
                    >
                      {card.subtitle}
                    </div>
                  </div>
                </div>

                {/* Plan Title */}
                <h3 className="text-xl font-bold mb-1">
                  {card.plan.split(" ").map((word, idx) => {
                    let colorClass = "";
                    if (card.plan === "BookOne Starter") {
                      colorClass = idx === 0 ? "text-[#146683]" : "text-[#8CCFF0]";
                    } else if (card.plan === "BookOne Essential") {
                      colorClass = idx === 0 ? "text-[#8CCFF0]" : "text-white";
                    } else if (card.plan === "BookOne Premium") {
                      colorClass = idx === 0 ? "text-[#146683]" : "text-[#8CCFF0]";
                    }
                    return (
                      <span key={idx} className={`${colorClass} mr-1`}>
                        {word}
                      </span>
                    );
                  })}
                </h3>

                <div className="text-3xl font-bold mb-4">
                  {pricingMap[currency][index]}{' '}
                  <span className="text-base font-medium">/monthly</span>
                </div>

                <button
                  className={`w-[50%] ml-4 py-2 rounded-xl font-medium transition-all duration-200 mb-6 ${
                    card.highlight
                      ? 'bg-white text-[#014669] hover:bg-gray-200'
                      : 'bg-[#014669] text-white hover:bg-[#013851]'
                  }`}
                >
                  Get Started
                </button>

                <div className="font-semibold text-sm">What’s included</div>
                <ul className="mt-4 space-y-2 text-[15px]">
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="min-w-[1.4rem] h-[1.4rem] flex items-center justify-center rounded-full bg-[#146683] mt-1">
                        <FaCheck className="text-white text-[10px]" />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
          </ContentfulProviderpricing>
         <ContentfulProviderpricing>
         <PowerOf />
         <UseBookone />
         </ContentfulProviderpricing>
      
       
      <Footer />
    </>
  );
};

export default Pricing;

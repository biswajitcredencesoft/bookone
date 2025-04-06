import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const HoteliarTrust = () => {
  return (
    <div className="bg-[#F6FAFE] py-12 px-4 sm:px-6 lg:px-20">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#146683] leading-snug text-left mb-12">
        Hoteliers Who Trust BookOne <br className="hidden md:block" />
        – And Keep Thriving
      </h2>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {[
          {
            quote:
              "Bookone has revolutionized the way we manage our hotel. Their software is intuitive, reliable, and customizable to our specific needs.",
            name: "Sujit Dash",
            title: "Owner, Greenstar Inn",
          },
          {
            quote:
              "Our room and bill order queries were looked after and successfully solved, with continuous efforts from Fatma Ma'am and the Owner.",
            name: "Sachin Patil",
            title: "Manager, Hotel Yogiraj",
          },
          {
            quote:
              "We've seen increased guest satisfaction and significantly reduced manual workload since adopting BookOne. Truly a game-changer.",
            name: "Anita Sharma",
            title: "GM, Royal Nest Resort",
          },
        ].map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-6 sm:p-8 flex flex-col justify-between"
          >
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              “{testimonial.quote}”
            </p>
            <div>
              <p className="font-bold text-lg text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
            </div>
            <div className="absolute right-[-24px] top-1/2 transform -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 bg-[#1E6E6E] rounded-full border-4 border-white shadow-lg"></div>
          </div>
        ))}
      </div>

      {/* Quotation Box */}
      <div className="bg-[#D9E7F1] rounded-2xl px-6 py-8 sm:px-10 sm:py-12 max-w-6xl mx-auto relative overflow-hidden">
        <FaQuoteLeft className="text-3xl sm:text-4xl md:text-5xl text-[#03506F] absolute top-5 left-5 sm:top-6 sm:left-6 opacity-20" />
        <p className="text-[#03506F] text-base sm:text-lg md:text-xl font-semibold pl-10 sm:pl-14">
          After moving to BookOne, our OTA bookings jumped by 47%, payment errors dropped by 70%, and we saved over 20 hours a week on manual tasks.
          Guest satisfaction scores also rose by 1.3 stars in just 90 days.
        </p>
        <div className="mt-6 flex justify-end">
          <button className="border border-[#03506F] text-[#03506F] px-5 sm:px-6 py-2 rounded-full text-sm sm:text-base hover:bg-[#03506F] hover:text-white transition-all duration-300">
            Read Case Study
          </button>
        </div>
      </div>
    </div>
  );
};

export default HoteliarTrust;

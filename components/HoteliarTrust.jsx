import React, { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
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
      "Bookone has revolutionized the way we manage our hotel. Their software is intuitive, reliable, and customizable to our specific needs.",
    name: "Sujit Dash",
    title: "Owner, Greenstar Inn",
  },
];

const getCardsPerSlide = () => {
  if (typeof window !== "undefined") {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
  }
  return 1;
};

const HoteliarTrust = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(getCardsPerSlide());

  useEffect(() => {
    const handleResize = () => {
      setCardsPerSlide(getCardsPerSlide());
      setCurrentSlide(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [cardsPerSlide, totalSlides]);

  const visibleTestimonials = testimonials.slice(
    currentSlide * cardsPerSlide,
    currentSlide * cardsPerSlide + cardsPerSlide
  );

  return (
    <div className="bg-[#F6FAFE] py-12 px-4 sm:px-6 lg:px-[60px] transition-all">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#146683] mb-12 text-center lg:text-left">
        Hoteliers Who Trust BookOne <br className="hidden md:block" />
        – And Keep Thriving
      </h2>

      {/* Carousel Section */}
      <div className="mb-10">
        <div
          className={`grid gap-6 sm:gap-8 grid-cols-1 ${
            cardsPerSlide === 2
              ? "md:grid-cols-2"
              : cardsPerSlide === 3
              ? "lg:grid-cols-3"
              : ""
          } transition duration-500 ease-in-out`}
        >
          {visibleTestimonials.map((testimonial, index) => {
            const middleIndex = Math.floor(cardsPerSlide / 2);
            const isCenterCard = index === middleIndex;

            return (
              <div
                key={index}
                className={`bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-md relative flex flex-col justify-between transition-transform duration-500 ${
                  isCenterCard ? "scale-105 shadow-xl z-10" : "scale-95 opacity-90"
                }`}
              >
                <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
                  “{testimonial.quote}”
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#146683] flex items-center justify-center text-white font-semibold text-lg shadow">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentSlide === index ? "bg-[#146683]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Highlight Section */}
      <div className="bg-[#D9E7F1] rounded-2xl px-6 py-10 sm:px-10 max-w-7xl mx-auto relative overflow-hidden">
        <FaQuoteLeft className="text-5xl text-[#03506F] absolute top-4 left-4 opacity-20" />
        <p className="text-[#03506F] text-lg md:text-xl font-semibold pl-10 sm:pl-16 leading-relaxed">
          After moving to BookOne, our OTA bookings jumped by 47%, payment
          errors dropped by 70%, and we saved over 20 hours a week on manual
          tasks. Guest satisfaction scores also rose by 1.3 stars in just 90
          days.
        </p>
        <div className="mt-6 flex justify-end">
          <button className="border border-[#03506F] text-[#03506F] px-6 py-2 rounded-full text-sm sm:text-base hover:bg-[#03506F] hover:text-white transition duration-300">
            Read Case Study
          </button>
        </div>
      </div>
    </div>
  );
};

export default HoteliarTrust;

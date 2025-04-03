"use client";
import React from "react";
import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import FeaturedProduct from "@/components/FeaturedProduct";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-heading text-primary mb-4">
          Welcome to BookOne Hospitality Suite
        </h1>
        <p className="text-lg text-textSecondary max-w-2xl mx-auto">
          Manage your property, connect with OTAs, and maximize your bookings –
          all in one place.
        </p>
        <div className="mt-8 space-x-4">
          <a
            href="/pms"
            className="bg-primary text-white px-6 py-3 rounded-xl font-bold"
          >
            Explore PMS
          </a>
          <a
            href="/get-started"
            className="bg-accent text-white px-6 py-3 rounded-xl font-bold"
          >
            Get Started
          </a>
        </div>
      </section>

      <div className="px-6 md:px-16 lg:px-32">
        <HeaderSlider />
        <HomeProducts />
        <FeaturedProduct />
        <Banner />
        <NewsLetter />
      </div>
      <Footer />
    </>
  );
};

export default Home;

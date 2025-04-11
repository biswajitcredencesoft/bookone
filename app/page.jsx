"use client";
import React from "react";

// import HomeProducts from "@/components/HomeProducts";
// import Banner from "@/components/Banner";
// import NewsLetter from "@/components/NewsLetter";
// import FeaturedProduct from "@/components/FeaturedProduct";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import BookOneDetails from "@/components/BookOneDetails";
import OtaIntegration from "@/components/OtaIntegration";
import HoteliarTrust from "@/components/HoteliarTrust";
import BookOneGrowing from "@/components/BookOneGrowing";
import HeroCarosal from "@/components/HeroCarosal";

const Home = () => {
  return (
    <>
      <Navbar />
      
        <Hero/>
        <HeroCarosal/>
        <BookOneDetails/>
        <OtaIntegration/>
        <HoteliarTrust/>
        <BookOneGrowing/>
        {/* <HomeProducts />
        <FeaturedProduct />
        <Banner />
        <NewsLetter /> */}
    
      <Footer />
    </>
  );
};

export default Home;

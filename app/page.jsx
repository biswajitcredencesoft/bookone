"use client";
import React from "react";

// import HomeProducts from "@/components/HomeProducts";
// import Banner from "@/components/Banner";
// import NewsLetter from "@/components/NewsLetter";
// import FeaturedProduct from "@/components/FeaturedProduct";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <>
      <Navbar />
      
        <Hero/>
        {/* <HomeProducts />
        <FeaturedProduct />
        <Banner />
        <NewsLetter /> */}
    
      <Footer />
    </>
  );
};

export default Home;

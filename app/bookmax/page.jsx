'use client'
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppContext } from "@/context/AppContext";

const Bookmax = () => {

    const { products } = useAppContext();

    return (
        <>
            <Navbar />
           
            <Footer />
        </>
    );
};

export default Bookmax;

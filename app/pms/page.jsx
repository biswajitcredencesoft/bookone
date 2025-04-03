'use client'
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppContext } from "@/context/AppContext";

const Pms = () => {
    const { products } = useAppContext();

    return (
        <>
            <Navbar />

            <section className="max-w-7xl mx-auto px-4 py-20">
                <h1 className="text-4xl font-heading text-primary mb-6">BookOne PMS</h1>
                <p className="text-textSecondary mb-6">
                    Powerful property management tools to simplify daily operations.
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>Real-time Booking Management</li>
                    <li>Guest Profiles and Messaging</li>
                    <li>Advanced Reporting & Analytics</li>
                    <li>Multi-property Support</li>
                </ul>
            </section>

            <Footer />
        </>
    );
};

export default Pms;

'use client'
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppContext } from "@/context/AppContext";

const Pricing = () => {


    return (
        <>
            <Navbar />
            <section className="max-w-5xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-heading text-center text-primary mb-10">Pricing Plans</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {['Starter', 'Essential', 'Premium'].map((plan, i) => (
          <div key={i} className="bg-white shadow p-6 rounded-xl">
            <h3 className="text-xl font-bold text-center mb-4">{plan}</h3>
            <ul className="space-y-2 text-sm">
              <li>{plan !== 'Starter' && 'Channel Integration' || 'Basic Property Management'}</li>
              <li>{plan === 'Premium' && 'Custom Website'}</li>
              <li>Reporting & Analytics</li>
            </ul>
            <div className="text-center mt-6">
              <button className="bg-accent text-white px-6 py-2 rounded-lg">Choose Plan</button>
            </div>
          </div>
        ))}
      </div>
    </section>

            <Footer />
        </>
    );
};

export default Pricing;

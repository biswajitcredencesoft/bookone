'use client'

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppContext } from "@/context/AppContext";

const GetStarted = () => {

  

    return (
        <>
            <Navbar />
            <section className="max-w-xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-heading text-primary mb-6 text-center">Get Started</h2>
      <form
        action="https://forms.hubspot.com/uploads/form/v2/YOUR_PORTAL_ID/YOUR_FORM_GUID"
        method="POST"
        className="bg-white shadow p-6 rounded-xl space-y-4"
      >
        <input name="property" placeholder="Property Name" className="w-full p-2 border rounded" required />
        <input name="rooms" placeholder="Number of Rooms" className="w-full p-2 border rounded" required />
        <input name="email" type="email" placeholder="Email Address" className="w-full p-2 border rounded" required />
        <textarea name="message" placeholder="Your Message" className="w-full p-2 border rounded" />
        <button className="bg-primary text-white px-4 py-2 rounded">Submit</button>
      </form>
    </section>

            <Footer />
        </>
    );
};

export default GetStarted;

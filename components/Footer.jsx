import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { assets } from "@/assets/assets";

const Footer = () => {
  return (
    <footer className="text-white bg-black">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-12 md:py-14 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-y-10 md:gap-y-12 gap-x-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-16">
        {/* Logo + Contact + Social */}
        <div>
          <Image
            src={assets.Foooter}
            alt="BookOne Logo"
            className="w-40 mb-4"
          />

          <div className="flex gap-4 text-xl mt-6">
            <a
              href="https://www.linkedin.com/showcase/bookone-pms/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="hover:text-skyCustom transition" />
            </a>
            <a
              href="https://www.facebook.com/bookonepms/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-skyCustom transition" />
            </a>
            <a
              href="https://www.instagram.com/bookonepms/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-skyCustom transition" />
            </a>
          </div>



          <div className="mt-6 text-sm space-y-3">
  <div>
    <a
      href="tel:+919004146024"
      className="flex items-center gap-2 font-light "
    >
      <FaPhoneAlt className="text-skyCustom" />
      +91-90041 46024
    </a>
  </div>
  <div>
    <a
      href="mailto:Info@Bookonepms.Com"
      className="flex items-center gap-2 font-light"
    >
      <FaEnvelope className="text-skyCustom" />
      info@bookonepms.com
    </a>
  </div>
</div>


          

        </div>

        {/* Office Locations */}
        <div className="text-sm space-y-6">
          {[
            {
              title: "New Zealand Office",
              address:
                "2 Khyber Pass Road, Eden Terrace, Auckland 1010, New Zealand.",
            },
            {
              title: "USA Office",
              address: "29 Yates DR, Hillsborough, NJ 08844",
            },
            {
              title: "Mumbai Office",
              address:
                "Office No 10, Bhoomi Tower, Sector 4, Kharghar, Navi Mumbai, Maharashtra, India-410210.",
            },
            {
              title: "Bhubaneswar Office",
              address:
                "DCB 711, DLF CYBER CITY, Chandka Industrial Estate, Chandrasekharpur, Bhubaneswar, Odisha, India-751024",
            },
          ].map((office, index) => (
            <div key={index}>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-skyCustom shrink-0" />
                <div>
                  <p className="font-medium">{office.title}</p>
                  <p className="mt-1 text-[13px] leading-relaxed">
                    {office.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Products */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Products</h2>
          <ul className="space-y-2 text-sm">
            {[
              { label: "BookOne PMS", href: "/bookone-pms" },
              { label: "BookOne Connect", href: "/bookone-connect" },
              { label: "BookOne BookMax", href: "/bookone-bookmax" },
              { label: "BookOne POS", href: "/bookone-pos" },
              { label: "BookOne CRM", href: "/bookone-crm" },
              { label: "BookOne Loyalty", href: "/bookone-loyalty" },
              { label: "BookOne VaRO", href: "/bookone-varo" },
            ].map((product, idx) => (
              <li key={idx}>
                <Link
                  href={product.href}
                  className="hover:text-skyCustom transition"
                >
                  {product.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Services</h2>
          <ul className="space-y-2 text-sm">
            {[
              {
                label: "Google Business Listing",
                href: "/services/google-business-listing",
              },
              {
                label: "Digital Marketing",
                href: "/services/digital-marketing",
              },
              {
                label: "Search Engine Optimisation",
                href: "/services/seo",
              },
              {
                label: "OTA Setup & Optimisation",
                href: "/services/ota-setup",
              },
              {
                label: "Metasearch Optimisation",
                href: "/services/metasearch",
              },
              {
                label: "Google Hotel Ads",
                href: "/services/google-hotel-ads",
              },
              {
                label: "Online Reputation Management",
                href: "/services/online-reputation",
              },
            ].map((service, idx) => (
              <li key={idx}>
                <Link
                  href={service.href}
                  className="hover:text-skyCustom transition"
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-4 text-sm border-t border-white/20 mt-6">
        © 2025 BookOne. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer; 

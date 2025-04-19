import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { assets } from "@/assets/assets";

const Footer = () => {
  return (
    <footer className="text-white bg-black text-[13.5px] leading-[1.6]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-12 md:py-14 lg:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-y-8 md:gap-y-10 gap-x-6 sm:gap-x-6 md:gap-x-8 lg:gap-x-10">
        {/* Logo + Contact + Social */}
        <div>
          <Image
            src={assets.Foooter}
            alt="BookOne Logo"
            className="w-36 mb-3"
          />

          <div className="flex gap-3 text-lg mt-5">
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
              <Image
                src={assets.Instagram}
                alt="Instagram Icon"
                className="hover:text-skyCustom transition h-[18px] w-[20px]"
              />
            </a>
          </div>

          <div className="mt-5 text-[13px] space-y-3">
            <div className="">
              <a
                href="tel:+919004146024"
                className="flex items-center gap-2 font-light"
              >
                <Image
                  src={assets.Phone_Icon}
                  alt="Phone Icon"
                  className="text-skyCustom h-[18px] w-[18px]"
                />
                +91-90041 46024
              </a>
            </div>
            <div className="">
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
        <div className="text-[13px] space-y-5">
          {[
            {
              title: "New Zealand Office",
              address:
                "2 Khyber Pass Road, Eden   Terrace, Auckland 1010, New Zealand.",
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
              <div className="flex items-start gap-2.5  md:w-[72%] ">
                <FaMapMarkerAlt className="mt-1 text-skyCustom shrink-0" />
                <div className="">
                  <p className="font-medium">{office.title}</p>
                  <p className="mt-0.5 leading-relaxed">
                    {office.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Products & Services in 2-column grid on mobile */}
        <div className="col-span-full sm:col-span-2 lg:col-span-2 grid grid-cols-2 gap-6">
          {/* Products */}
          <div>
            <h2 className="text-[15px] font-semibold mb-3">Products</h2>
            <ul className="space-y-1.5 text-[13px]">
              {[
                { label: "BookOne PMS", href: "/bookone-pms" },
                { label: "BookOne Connect", href: "/bookone-connect" },
                { label: "BookOne BookMax", href: "/bookone-bookmax" },
                { label: "BookOne POS", href: "/bookone-pos" },
                { label: "BookOne CRM", href: "/bookone-crm" },
                { label: "BookOne Loyalty", href: "/bookone-loyality" },
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
            <h2 className="text-[15px] font-semibold mb-3">Services</h2>
            <ul className="space-y-1.5 text-[13px]">
              {[
                {
                  label: "Google Business Listing",
                  href: "/google-business-listing",
                },
                {
                  label: "Digital Marketing",
                  href: "/digital-marketing",
                },
                {
                  label: "Search Engine Optimisation",
                  href: "/seo",
                },
                {
                  label: "OTA Setup & Optimisation",
                  href: "/ota-setup",
                },
                {
                  label: "Metasearch Optimisation",
                  href: "/metasearch",
                },
                {
                  label: "Google Hotel Ads",
                  href: "/google-hotel-ads",
                },
                {
                  label: "Online Reputation Management",
                  href: "/online-reputation",
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
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-4 text-[12.5px] border-t border-white/20 mt-4">
        © 2025 BookOne. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

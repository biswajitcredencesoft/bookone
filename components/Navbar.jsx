"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import { assets } from "@/assets/assets";
import {
  FaAngleDown,
  FaAngleUp,
  FaHome,
  FaNetworkWired,
  FaStore,
  FaUsers,
  FaChartLine,
  FaBookOpen,
  FaLaptopCode,
} from "react-icons/fa";

const DropdownMenu = ({ title, items, isOpen, toggleOpen, width }) => (
  <div className="relative">
    <button
      onClick={toggleOpen}
      className="flex items-center gap-1 hover:text-gray-900"
    >
      {title} {isOpen ? <FaAngleUp /> : <FaAngleDown />}
    </button>

    {isOpen && (
      <div
        className={`absolute left-[-380px] top-full mt-[28px] ${width} max-w-8xl bg-white shadow-lg border rounded-lg p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24 z-50`}
      >
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-start gap-4 hover:bg-gray-50 p-2 rounded-lg transition"
          >
            <div className="text-cyan-600 text-xl">{item.icon}</div>
            <div>
              <h3 className="text-sm font-semibold text-black">{item.name}</h3>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    )}
  </div>
);

const productItems = [
  {
    href: "/bookone-pms",
    icon: <FaHome />,
    name: "BookOne PMS",
    desc: "BookOne PMS automates operations, reduces errors, and ensures seamless management.",
  },
  {
    href: "/bookone-connect",
    icon: <FaNetworkWired />,
    name: "BookOne Connect",
    desc: "BookOne Connect syncs inventory across OTAs, reducing overbookings and improving guest satisfaction.",
  },
  {
    href: "/bookone-pos",
    icon: <FaStore />,
    name: "BookOne POS",
    desc: "BookOne POS syncs orders, tracks inventory, and speeds up billing.",
  },
  {
    href: "/bookone-loyality",
    icon: <FaHome />,
    name: "BookOne Loyalty",
    desc: "Boost direct bookings with automation, personalized offers, and seamless communication.",
  },
  {
    href: "/bookone-crm",
    icon: <FaNetworkWired />,
    name: "BookOne CRM",
    desc: "BookOne CRM centralizes guest data to boost loyalty and personalized engagement.",
  },
  {
    href: "/bookone-bookmax",
    icon: <FaStore />,
    name: "BookOne BookMax",
    desc: "BookOne BookMax drives direct bookings with integrated payments and Google Hotel Ads.",
  },
  {
    href: "/bookone-varo",
    icon: <FaStore />,
    name: "BookOne VARO (Revenue Management)",
    desc: "Vacant Room Optimizer maximizes revenue with real-time, demand-based pricing.",
  },
];

const serviceItems = [
  {
    href: "/digital-marketing",
    icon: <FaNetworkWired />,
    name: "Digital Marketing",
    desc: "Boost your hotel's online presence with expert SEO, social media, ads, and content strategies.",
  },
  {
    href: "/online-repution-management",
    icon: <FaChartLine />,
    name: "Online Reputation Management",
    desc: "Maintain guest trust and boost visibility with proactive monitoring and response management.",
  },
  {
    href: "/google-business-listing",
    icon: <FaNetworkWired />,
    name: "Google Business Listing",
    desc: "Optimize your Google Business Profile to attract more direct bookings and local guests.",
  },
  {
    href: "/ota-setup",
    icon: <FaChartLine />,
    name: "OTA Setup",
    desc: "Seamless OTA setup with optimized profiles and strategic pricing to maximize bookings.",
  },
];

const resourceItems = [
  {
    href: "/our-story",
    icon: <FaBookOpen />,
    name: "Our Story",
    desc: "We innovate to be hospitality’s most trusted tech partne",
  },
  {
    href: "/faq",
    icon: <FaLaptopCode />,
    name: "FAQ’s",
    desc: "Find answers to common questions about our solutions.",
  },
  {
    href: "/partners",
    icon: <FaBookOpen />,
    name: "Partners",
    desc: "Discover how partnering with us benefits your business!",
  },
  {
    href: "/blogs",
    icon: <FaLaptopCode />,
    name: "Blogs",
    desc: "Insights and trends to elevate your hotel’s success.",
  },
];

const contactItems = [
  {
    href: "/add-listing",
    icon: <FaLaptopCode />,
    name: "Add Listing",
    desc: "Reliable support to keep your hotel running smoothly.",
  },
  {
    href: "/custom-support",
    icon: <FaBookOpen />,
    name: "Customer Support",
    desc: "Get expert guidance to find the right solutions for your hotel.",
  },
  {
    href: "/sales-enquiry",
    icon: <FaLaptopCode />,
    name: "Sales Enquiry",
    desc: "Get Listed & Transform Your Hotel!",
  },
];

const Navbar = () => {
  const { router } = useAppContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const toggleDropdown = (menuName) => {
    setOpenDropdown((prev) => (prev === menuName ? "" : menuName));
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 z-50 font-inter">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <Image
          src={assets.logo}
          alt="Logo"
          className="w-20 cursor-pointer"
          onClick={() => router.push("/")}
        />

        {/* Desktop View */}
        <div className="hidden md:flex items-center gap-8">
          <DropdownMenu
            title="Products"
            items={productItems}
            isOpen={openDropdown === "products"}
            toggleOpen={() => toggleDropdown("products")}
            width="w-[90vw]"
          />
          <DropdownMenu
            title="Services"
            items={serviceItems}
            isOpen={openDropdown === "services"}
            toggleOpen={() => toggleDropdown("services")}
            width="w-[80vw]"
          />
          <Link href="/pricing" className="hover:text-gray-900">
            Pricing
          </Link>
          <DropdownMenu
            title="Resources"
            items={resourceItems}
            isOpen={openDropdown === "resources"}
            toggleOpen={() => toggleDropdown("resources")}
            width="w-[70vw]"
          />
          <DropdownMenu
            title="Contact Us"
            items={contactItems}
            isOpen={openDropdown === "contact"}
            toggleOpen={() => toggleDropdown("contact")}
            width="w-[60vw]"
            className="mr-12"
          />
        </div>

        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-[#27668C] to-[#27668C] text-white text-[15.62px] leading-[26.76px] tracking-[0.08px] font-[400] px-[32px] py-[12px] rounded-[30px] font-['Inter'] transition duration-300 ease-in-out hover:shadow-[0_0_0_5px_rgba(209,213,219,1)]">
            Request A Demo
          </button>
        </div>

        {/* Mobile View */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-700"
        >
          {menuOpen ? <FaAngleUp /> : <FaAngleDown />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4">
          {[
            { title: "Products", items: productItems, key: "products" },
            { title: "Services", items: serviceItems, key: "services" },
            { title: "Resources", items: resourceItems, key: "resources" },
            { title: "Contact Us", items: contactItems, key: "contact" },
          ].map(({ title, items, key }) => (
            <div key={key}>
              <button
                onClick={() => toggleDropdown(key)}
                className="flex items-center justify-between w-full text-left hover:text-gray-900"
              >
                {title} {openDropdown === key ? <FaAngleUp /> : <FaAngleDown />}
              </button>
              {openDropdown === key && (
                <div className="mt-2 ml-4 flex flex-col gap-2">
                  {items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-sm text-gray-700 hover:text-gray-900"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/pricing"
            className="text-sm text-gray-700 hover:text-gray-900"
          >
            Pricing
          </Link>
          <button className="mt-4 px-4 py-8 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition">
            Request A Demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

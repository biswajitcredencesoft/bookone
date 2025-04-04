"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import { assets } from "@/assets/assets";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import {
  productItems,
  serviceItems,
  resourceItems,
  contactItems,
} from "@/static/navItems";
import MobileNavItems from "./seller/MobileNavItems";

const DropdownMenu = ({ title, isOpen, setOpenDropdown, menuKey }) => {
  return (
    <div
      className="relative h-full px-4 py-2"
      onMouseEnter={() => setOpenDropdown(menuKey)}
    >
      <button className="flex items-center gap-2 text-[16px] font-sans text-gray-600">
        {title} {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </button>
    </div>
  );
};

const Navbar = () => {
  const { router } = useAppContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  useEffect(() => {
    if (openDropdown === "products") setItems(productItems);
    else if (openDropdown === "services") setItems(serviceItems);
    else if (openDropdown === "resources") setItems(resourceItems);
    else if (openDropdown === "contact") setItems(contactItems);
    else setItems([]);
  }, [openDropdown]);

  return (
    <nav className="relative w-full px-6 py-3 bg-white shadow-md z-50 font-inter">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between ml-12">
        {/* Logo */}
        <div className="w-44 cursor-pointer" onClick={() => router.push("/")}>
          <Image
            src={assets.logo}
            alt="Logo"
            layout="responsive"
            width={180}
            height={50}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 font-sans">
          <DropdownMenu
            title="Products"
            menuKey="products"
            isOpen={openDropdown === "products"}
            setOpenDropdown={setOpenDropdown}
          />
          <DropdownMenu
            title="Services"
            menuKey="services"
            isOpen={openDropdown === "services"}
            setOpenDropdown={setOpenDropdown}
          />
          <Link
            href="/pricing"
            className="text-[16px] font-sans  text-gray-700"
          >
            Pricing
          </Link>
          <DropdownMenu
            title="Resources"
            menuKey="resources"
            isOpen={openDropdown === "resources"}
            setOpenDropdown={setOpenDropdown}
          />
          <DropdownMenu
            title="Contact Us"
            menuKey="contact"
            isOpen={openDropdown === "contact"}
            setOpenDropdown={setOpenDropdown}
          />
        </div>

        {/* Request Demo Button */}
        <div className="hidden md:block">
          <button className="bg-[#27668c] text-white px-8 py-[12px] rounded-full text-[15.62px] font-medium transition-all hover:ring-2 hover:ring-offset-2 hover:ring-gray-400">
            Request A Demo
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-700"
        >
          {menuOpen ? <FaAngleUp /> : <FaAngleDown />}
        </button>
      </div>

      {/* Dropdown Submenu */}
      {items.length > 0 && (
        <div
          onMouseEnter={() => setOpenDropdown(openDropdown)}
          onMouseLeave={() => setOpenDropdown("")}
          className="absolute left-0 right-0 top-[99%] bg-white shadow-lg border rounded-lg p-6 md:p-16 grid gap-6 w-full grid-cols-1 md:grid-cols-4 transition-opacity duration-300"
        >
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-100 transition-all"
            >
              <div className="text-[#27668c] text-2xl">{item.icon}</div>
              <div>
                <h3 className="text-[15px] font-bold text-black font-sans">
                  {item.name}
                </h3>
                <p className="text-sm text-[#7a7a7a] font-sans">
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <MobileNavItems
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
        />
      )}
    </nav>
  );
};

export default Navbar;

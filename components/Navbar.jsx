"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import { assets } from "@/assets/assets";
import { FaAngleDown, FaAngleUp, FaUserCircle } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
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
      <button className="flex items-center gap-2 text-[16px] md:text-[14px] font-sans text-gray-600">
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
    <>
      <nav className="fixed top-0 left-0 w-full px-6 lg:px-16 py-3 bg-white shadow-md z-50 font-inter">
        <div className="max-w-screen-[1410px] mx-auto flex items-center justify-between w-full">
          {/* Left - Logo */}
          <div
            className="w-32 sm:w-36 md:w-40 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image
              src={assets.logo}
              alt="Logo"
              layout="responsive"
              width={180}
              height={524}
            />
          </div>

          {/* Center - Navigation */}
          <div className="hidden md:flex items-center space-x-4 md:space-x-2 font-sans">
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

          {/* Right - Desktop Buttons + User Icon */}
          <div className="hidden md:flex items-center space-x-4 md:space-x-2">
            <Link href="/pricing">
              <button className="border border-[#27668c] text-[#27668c] px-6 md:px-4 py-[10px] md:py-[6px] rounded-full text-[15.62px] md:text-[13.5px] font-medium transition-all hover:ring-2 hover:ring-offset-2">
                Get Pricing
              </button>
            </Link>
            <Link href="/book-a-demo">
            <button className="bg-[#27668c] text-white px-6 md:px-4 py-[10px] md:py-[6px] rounded-full text-[15.62px] md:text-[13.5px] font-medium transition-all hover:ring-2 hover:ring-offset-2 hover:ring-gray-400">
              Book A Demo
            </button>
            </Link>
          
            <Link href="/login" className="ml-2 text-[#27668c] text-2xl md:text-4xl hover:opacity-80">
              <FaUserCircle />
            </Link>
          </div>

          {/* Mobile - User Icon + Hamburger */}
          <div className="flex items-center gap-4 md:hidden ml-auto">
            <Link href="/login" className="text-[#27668c] text-2xl hover:opacity-80">
              <FaUserCircle />
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-gray-700"
            >
              {menuOpen ? <RxCross2 /> : <IoMenu />}
            </button>
          </div>
        </div>

        {/* Desktop Dropdown Submenu */}
        {items.length > 0 && (
          <div className="hidden md:block">
            <div
              onMouseEnter={() => setOpenDropdown(openDropdown)}
              onMouseLeave={() => setOpenDropdown("")}
              className="absolute left-0 right-0 top-[99%] bg-white shadow-lg border rounded-lg p-6 md:p-10 grid gap-6 w-full grid-cols-1 md:grid-cols-4 transition-opacity duration-300"
            >
              {items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-100 transition-all"
                >
                  <div className="text-[#27668c] text-2xl md:text-xl">{item.icon}</div>
                  <div>
                    <h3 className="text-[15px] md:text-[13px] font-bold text-black font-sans">
                      {item.name}
                    </h3>
                    <p className="text-sm md:text-xs text-[#7a7a7a] font-sans">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {menuOpen && (
          <>
            <MobileNavItems
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
            />
            {/* Mobile Buttons */}
            <div className="md:hidden mt-4 px-6 space-y-3">
              <Link href="/pricing">
                <button className="w-full border border-[#27668c] text-[#27668c] py-2 md:py-1.5 rounded-full text-[15px] md:text-[13.5px] font-medium transition-all hover:ring-2 hover:ring-offset-2">
                  Get Pricing
                </button>
              </Link>
              <Link href="/book-a-demo">
              <button className="w-full bg-[#27668c] text-white py-2 md:py-1.5 rounded-full text-[15px] md:text-[13.5px] font-medium transition-all hover:ring-2 hover:ring-offset-2 hover:ring-gray-400">
                Book A Demo
              </button>
              </Link>
             
            </div>
          </>
        )}
      </nav>

      {/* Spacer for page content */}
      <div className="pt-[42px] lg:pt-10">
        {/* Your page content should go here */}
      </div>
    </>
  );
};

export default Navbar;

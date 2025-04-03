"use client";
import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { isSeller, router } = useAppContext();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700 bg-white relative">
      <Image
        className="cursor-pointer w-16 md:w-16"
        onClick={() => router.push("/")}
        src={assets.logo}
        alt="logo"
      />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        <Link href="/" className="hover:text-gray-900 transition">Home</Link>
        <Link href="/pms" className="hover:text-gray-900 transition">PMS</Link>
        <Link href="/connect" className="hover:text-gray-900 transition">Connect</Link>
        <Link href="/bookmax" className="hover:text-gray-900 transition">BookMax</Link>
        <Link href="/pricing" className="hover:text-gray-900 transition">Pricing</Link>
        <Link href="/get-started" className="hover:text-gray-900 transition">GetStarted</Link>
      </div>

      <ul className="hidden md:flex items-center gap-4">
        <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
        <button className="flex items-center gap-2 hover:text-gray-900 transition">
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center gap-3">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-gray-700"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Sidebar (with Logo) */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white border-r border-gray-300 shadow-lg transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header with Logo */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-gray-300 bg-white">
          <Image
            className="cursor-pointer w-16"
            onClick={() => {
              router.push("/");
              setMenuOpen(false);
            }}
            src={assets.logo}
            alt="logo"
          />
          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-gray-700"
          >
            <FiX />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col items-start gap-4 p-6 ">
          <Link href="/" className="hover:text-gray-900 transition" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/pms" className="hover:text-gray-900 transition" onClick={() => setMenuOpen(false)}>PMS</Link>
          <Link href="/connect" className="hover:text-gray-900 transition" onClick={() => setMenuOpen(false)}>Connect</Link>
          <Link href="/bookmax" className="hover:text-gray-900 transition" onClick={() => setMenuOpen(false)}>BookMax</Link>
          <Link href="/pricing" className="hover:text-gray-900 transition" onClick={() => setMenuOpen(false)}>Pricing</Link>
          <Link href="/get-started" className="hover:text-gray-900 transition" onClick={() => setMenuOpen(false)}>GetStarted</Link>
          <button className="flex items-center gap-2 hover:text-gray-900 transition" onClick={() => setMenuOpen(false)}>
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

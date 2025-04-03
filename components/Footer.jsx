import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col bg-[#221950] md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
          <Image className="w-10 md:w-20" src={assets.logo} alt="logo" />
          <p className="mt-6 text-sm">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum ab voluptatem, temporibus veritatis, delectus veniam ratione hic ipsam fuga accusantium tempore aliquam.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-white mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="#">Home</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">PMS</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Connect</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">BookMax</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Pricing</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">
                GetStarted</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-white mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+91 9861105221</p>
              <p>info@bookonepms.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm">
        Copyright 2025 © All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
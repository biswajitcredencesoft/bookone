import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import {
  productItems,
  serviceItems,
  resourceItems,
  contactItems,
} from "@/static/navItems";
import Link from "next/link";

const MobileNavItems = ({ openDropdown, setOpenDropdown }) => {
  return (
    <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4">
      {[
        { title: "Products", items: productItems, key: "products" },
        { title: "Services", items: serviceItems, key: "services" },
        { title: "Resources", items: resourceItems, key: "resources" },
        { title: "Contact Us", items: contactItems, key: "contact" },
      ].map(({ title, items, key }) => (
        <div key={key}>
          <button
            onClick={() => setOpenDropdown((prev) => (prev === key ? "" : key))}
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

      <button className="mt-4 px-4 py-3 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition">
        Request A Demo
      </button>
    </div>
  );
};

export default MobileNavItems;

"use client";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io"; 

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-16 right-2  z-50 bg-[#061528] hover:bg-[#0d1c33] text-white p-3 rounded-full shadow-lg  transition-all duration-300 ease-in-out"
        >
          <IoIosArrowUp className="text-xl" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;

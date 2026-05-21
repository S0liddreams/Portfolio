"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";

const navItems = ["Home", "About", "Services", "Portfolio", "Contact"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId.toLowerCase());

    if (targetElement) {
      // Offset for the 80px (h-20) sticky navbar
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className="bg-[#deb887] h-20 w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="flex justify-between items-center h-full px-4 md:px-12">
        <div className="rounded-lg font-bold">
          <Link href="/">
            <Image
              src="/slogo.png"
              alt="Soliddreamsdev"
              width={60}
              height={40}
              className="rounded-lg"
            />
          </Link>
        </div>

        <button
          className="text-white text-3xl md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaXmark /> : <FaBars />}
        </button>

        <ul
          className={`fixed md:static bg-[#8b5b1c] md:bg-transparent top-0 left-0 w-full md:w-auto h-screen md:h-auto flex flex-col md:flex-row items-center justify-center md:justify-end transition-transform duration-500 z-40 ${isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
        >
          {navItems.map((item) => (
            <li key={item} className="my-6 md:my-0 md:mx-1">
              <a
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleScroll(e, item)}
                className="text-white text-xl md:text-base uppercase px-4 py-2 rounded hover:bg-[#f59211] transition-all font-medium"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

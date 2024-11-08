"use client";
import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import "@fontsource/inter";

interface NavbarProps {
  font: string;
}

const Navbar = ({ font }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="w-full h-[92px] bg-[#043873] text-white md:text-lg py-4 px-4 sm:px-6 flex justify-between items-center md:pl-20 mb-12 md:mb-2 relative">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <Image
            src="/Logo1.png"
            alt="Logo Image"
            width={200}  // Smaller logo size for mobile
            height={200}
            className="ml-2 transition-transform transform hover:scale-x-125"
          />
        </div>

        {/* Links for larger screens */}
        <div className={`${font} hidden md:flex items-center space-x-8`}>
          <ul className="flex space-x-6">
            <li><Link href="#" className="hover:underline hover:text-[#FFE492]">Products</Link></li>
            <li><Link href="#" className="hover:underline hover:text-[#FFE492]">Solutions</Link></li>
            <li><Link href="#" className="hover:underline hover:text-[#FFE492]">Resources</Link></li>
            <li><Link href="#" className="hover:underline hover:text-[#FFE492]">Pricing</Link></li>
          </ul>
          <button className="bg-[#FFE492] text-black px-4 py-1 rounded-md hover:bg-white ">
            Login
          </button>
        </div>
        
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center z-50">
          <button className="text-white" onClick={toggleMobileMenu}>
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute ml-8 top-[92px] left-0 w-[260px] bg-[#043873] text-white py-4 transition-all duration-300 ease-in-out`}
      >
        <ul>
          <li className="py-2"><Link href="#" className="hover:underline hover:text-[#FFE492]">Products</Link></li>
          <li className="py-2"><Link href="#" className="hover:underline hover:text-[#FFE492]">Solutions</Link></li>
          <li className="py-2"><Link href="#" className="hover:underline hover:text-[#FFE492]">Resources</Link></li>
          <li className="py-2"><Link href="#" className="hover:underline hover:text-[#FFE492]">Pricing</Link></li>
        </ul>
        <button className="bg-[#FFE492] text-black px-4 py-1 rounded-md hover:bg-white w-full mt-4">
          Login
        </button>
      </div>

      {/* Section 1 with conditional padding */}
      <section
        className={`${
          isMobileMenuOpen ? "pt-[170px]" : "pt-20"
        } transition-all duration-300 ease-in-out`} // Adding padding if mobile menu is open
      >
        {/* Your Section 1 content goes here */}
      </section>
    </>
  );
};

export default Navbar;



"use client";
import React from 'react';
import "@fontsource/heebo";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#043873] md:w-[1462px] text-white py-8 px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row sm:justify-around items-center text-sm space-y-4 sm:space-y-0 mb-8">
        {/* Logo and Description */}
        <div className="w-full sm:w-40 text-center sm:text-left">
          <div className="text-2xl font-bold transition-transform transform hover:scale-125">
            <Image
              src="/Logo1.png"
              alt="Logo Image"
              width={200} // Adjusted for mobile
              height={200}
              className="mb-4 mx-auto sm:ml-2"
            />
          </div>
          <p className="px-4 sm:px-0">
            Whitespace was created for the new ways we live and work. We make a better workspace around the world.
          </p>
        </div>
        
        {/* Product Section */}
        <div className="text-center sm:text-left">
          <h5 className="font-bold mb-2 transition-transform transform hover:scale-125 text-lg">Product</h5>
          <p className="hover:text-[#FFE492] hover:underline">Overview</p>
          <p className="hover:text-[#FFE492] hover:underline">Pricing</p>
          <p className="hover:text-[#FFE492] hover:underline">Customer Stories</p>
        </div>
        
        {/* Resources Section */}
        <div className="text-center sm:text-left">
          <h5 className="font-bold mb-2 transition-transform transform hover:scale-125 text-lg">Resources</h5>
          <p className="hover:text-[#FFE492] hover:underline">Blog</p>
          <p className="hover:text-[#FFE492] hover:underline">Guide & Tutorials</p>
          <p className="hover:text-[#FFE492] hover:underline">Help Center</p>
        </div>
        
        {/* Company Section */}
        <div className="text-center sm:text-left">
          <h5 className="font-bold mb-2 transition-transform transform hover:scale-125 text-lg">Company</h5>
          <p className="hover:text-[#FFE492] hover:underline">About us</p>
          <p className="hover:text-[#FFE492] hover:underline">Careers</p>
          <p className="hover:text-[#FFE492] hover:underline">Media Kit</p>
        </div>
      </div>

      {/* Divider and Footer Text */}
      <div className="space-y-4 text-center">
        <div className="border-b-2 border-[#2E4E73] w-10/12 mx-auto"></div>
        <p className="text-center mt-4 transition-transform transform hover:scale-125">
          © 2024 Whitespace LLC
        </p>
      </div>
    </footer>
  );
};

export default Footer;

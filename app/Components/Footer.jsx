"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6"; // Social Icons

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-8 pb-2 px-6">
      <div className="container mx-auto px-6">
        {/* Top Section - Logo & Socials */}
        <div className="flex  items-center justify-between">
          {/* Logo */}
          <Image
            src="/white-logo.png"
            alt="BOTOL Logo"
            width={150}
            height={40}
          />
          {/* Middle Section - Navigation Links */}
          <div className="flex flex-wrap justify-center gap-10 text-lg sm:text-base">
            <Link href="#" className="hover:text-gray-400">
              Shop
            </Link>
            <Link href="#" className="hover:text-gray-400">
              Contact us
            </Link>
            <Link href="#" className="hover:text-gray-400">
              About
            </Link>
            <Link href="#" className="hover:text-gray-400">
              Journal
            </Link>
            <Link href="#" className="hover:text-gray-400">
              Custom
            </Link>
          </div>
        </div>

        <div className="flex  items-center justify-between mt-8">
          {/* Social Icons */}
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-white text-2xl w-8 h-8 rounded-full bg-gray-700 p-2 flex items-center justify-center"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="#"
              className="text-white text-2xl w-8 h-8 rounded-full bg-gray-700 p-2 flex items-center justify-center"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="#"
              className="text-white text-2xl w-8 h-8 rounded-full bg-gray-700 p-2 flex items-center justify-center"
            >
              <FaXTwitter size={20} />
            </Link>
          </div>
          {/* Bottom Section - Policies & Copyright */}
          <div className="flex flex-wrap justify-center gap-10 text-lg sm:text-base">
            <Link href="#" className="hover:text-gray-400">
              FAQ’s
            </Link>
            <Link href="#" className="hover:text-gray-400">
              Returns
            </Link>
            <Link href="#" className="hover:text-gray-400">
              Ordering
            </Link>
            <Link href="#" className="hover:text-gray-400">
              Shipping
            </Link>
            <Link href="#" className="hover:text-gray-400">
              Personalization Policies
            </Link>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-400 text-sm mt-8">
          © 2023 BOTOL. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

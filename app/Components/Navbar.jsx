"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import react from "react";
import Image from "next/image";
import { familjenGrotesk } from "@/app/Utils/Fonts";

const Navbar = () => {
  const [isOpen, setIsOpen] = react.useState(false);
  return (
    <nav className="container mx-auto px-20 py-6 flex items-center justify-between">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo.png"
          alt="BOTOL Logo"
          width={174}
          height={40}
          priority
        />
      </Link>

      {/* Desktop Menu */}
      <div
        className={`hidden ${familjenGrotesk.className} font-normal text-lg md:flex items-center gap-10`}
      >
        <Link href="/shop" className=" hover:text-gray-600 transition-colors">
          Shop
        </Link>
        <Link
          href="/contact"
          className=" hover:text-gray-600 transition-colors"
        >
          Contact us
        </Link>
        <Link href="/about" className=" hover:text-gray-600 transition-colors">
          About
        </Link>
        <Link
          href="/journal"
          className=" hover:text-gray-600 transition-colors"
        >
          Journal
        </Link>
        <Link href="/custom" className=" hover:text-gray-600 transition-colors">
          Custom
        </Link>
        <Link
          href="/inquiry"
          className="px-6 py-2 rounded-full text-white 
             bg-gradient-to-r from-lightBlue to-darkBlue 
             transition-all ml-6"
        >
          Inquiry Now
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden block focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`hidden ${familjenGrotesk.className}absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-6 z-50 md:hidden transition-all`}
        >
          <Link
            href="/shop"
            className="text-gray-800 hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Shop
          </Link>
          <Link
            href="/contact"
            className="text-gray-800 hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Contact us
          </Link>
          <Link
            href="/about"
            className="text-gray-800 hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/journal"
            className="text-gray-800 hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Journal
          </Link>
          <Link
            href="/custom"
            className="text-gray-800 hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Custom
          </Link>
          <Link
            href="/inquiry"
            className="bg-[#00D1FF] text-white px-6 py-2 rounded-full hover:bg-[#00B8E6] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Inquiry Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

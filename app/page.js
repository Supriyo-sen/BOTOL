import Link from "next/link";
import React from "react";
import Image from "next/image";
import { familjenGrotesk } from "@/app/Utils/Fonts";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center px-6 py-16 -top-4">
        {/* Background Circle */}
        <div className="absolute inset-0 flex items-center justify-center top-14">
          <div
            className="relative w-[440px] h-[440px] md:w-[600px] md:h-[600px] 
                  rounded-full p-[6px] bg-gradient-to-b from-lightBlue to-darkBlue"
          >
            <div className="w-full h-full bg-white rounded-full"></div>
          </div>
        </div>

        {/* Main Image */}
        <Image
          src="/Bottle-Top.png"
          alt="Bottle Top"
          width={150}
          height={120}
          className="absolute z-10 -top-[70px]"
        />

        {/* Hero Content */}
        <h1
          className={`${familjenGrotesk.className} relative z-10 text-4xl md:text-8xl font-semibold tracking-wide md:top-10 `}
        >
          The Ultimate Companion <br /> for Hydration
        </h1>
        <p
          className={`${familjenGrotesk.className} relative z-10 text-lg md:text-3xl font-light mt-16 max-w-xl`}
        >
          We believe in the power of hydration.
          <br />
          Our mission is simple yet vital.
        </p>

        {/* CTA Button */}
        <Link
          href="/inquiry"
          className="relative z-10 px-7 py-2 mt-6 rounded-full text-white 
             bg-gradient-to-r from-lightBlue to-darkBlue 
             transition-all"
        >
          Inquiry Now
        </Link>

        <Image
          src="/Bottle-down.png"
          alt="Bottle Top"
          width={150}
          height={120}
          className="absolute z-10 -bottom-[490px]"
        />
      </section>

      {/* Product Highlights */}
      <section className="relative mt-16 flex justify-center items-center gap-12 flex-wrap px-6 w-full">
        <div className="absolute w-32 h-32 rounded-full bg-gradient-to-bl from-lightBlue to-darkBlue flex items-center justify-center shadow-lg -top-40 left-20 ">
          <Image
            src="/bottle-left.png"
            alt="Bottle Left"
            width={60}
            height={60}
          />
        </div>
        <div className="absolute w-32 h-32 rounded-full bg-gradient-to-bl from-[#00D1FF] to-[#007BFF] flex items-center justify-center shadow-lg -top-40 right-20">
          <Image
            src="/bottle-right.png"
            alt="Bottle Right"
            width={60}
            height={60}
          />
        </div>
      </section>
      <section className="relative mt-16 flex justify-center items-center gap-12 flex-wrap px-6 w-full"></section>
    </main>
  );
};

export default page;

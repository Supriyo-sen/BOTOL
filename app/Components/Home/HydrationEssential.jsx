"use client";

import React from "react";
import Link from "next/link";
import BottleCard from "../BottleCards";

const HydrationEssentials = () => {
  // Bottle Data
  const bottles = [
    { image: "/bottle1.png", title: "Rainbow 600" },
    { image: "/bottle2.png", title: "Rio 650" },
    { image: "/bottle3.png", title: "Big Bull 1300" },
    { image: "/bottle4.png", title: "Rome 600" },
    { image: "/bottle1.png", title: "Rainbow 600" },
    { image: "/bottle2.png", title: "Rio 650" },
  ];

  return (
    <div className="w-full max-w-8xl mx-auto px-6 lg:px-12 py-16">
      {/* Header Section */}
      <div className="flex items-center justify-between w-full mb-8">
        <div className="text-start">
          <h2 className="text-6xl font-bold">Hydration Essentials</h2>
          <p className="text-gray-800 mt-2 text-2xl">
            Discover Our Range of Premium Water Bottles
          </p>
        </div>
        <Link
          href="#"
          className="px-8 py-3 bg-gradient-to-r from-lightBlue to-darkBlue text-white rounded-full text-sm"
        >
          VIEW MORE
        </Link>
      </div>

      {/* Bottles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 w-full">
        {bottles.map((bottle, index) => (
          <BottleCard key={index} image={bottle.image} title={bottle.title} />
        ))}
      </div>
    </div>
  );
};

export default HydrationEssentials;

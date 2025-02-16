"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Bottle Card Component
const BottleCard = ({ image, title }) => {
  return (
    <div className="bg-white rounded-2xl pb-6 overflow-hidden  transition-transform hover:scale-105">
      <Image
        src={image}
        alt={title}
        width={600}
        height={600}
        className="rounded-lg"
      />
      <h3 className="text-2xl font-normal mt-4 text-start">{title}</h3>
      <div className="flex justify-start mt-3">
        <Link
          href="#"
          className="px-8 py-3 bg-gradient-to-r from-lightBlue to-darkBlue text-white rounded-full text-sm"
        >
          LEARN MORE
        </Link>
      </div>
    </div>
  );
};

export default BottleCard;

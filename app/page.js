"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { familjenGrotesk } from "@/app/Utils/Fonts";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const page = () => {
  const bottleTopRef = React.useRef(null);
  const bottleBottomRef = React.useRef(null);
  const firstMainRef = React.useRef(null);
  const secondMainRef = React.useRef(null);
  const leftProductRef = React.useRef(null);
  const rightProductRef = React.useRef(null);
  const [animationCompleted, setAnimationCompleted] = React.useState(false);
  React.useEffect(() => {
    window.scrollTo(-10, 0);
  }, []);
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    const tl = gsap.timeline();

    tl.call(() => {
      if (!animationCompleted) {
        gsap.to(window, {
          scrollTo: secondMainRef.current,
          duration: 2,
          ease: "power1.inOut",
          delay: 5,
          scrub: 2,
          onComplete: () => {
            document.body.style.overflow = "auto";
            setAnimationCompleted(true);
          },
        });
        setAnimationCompleted(true);
      }
    });
  }, [animationCompleted]);
  React.useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: secondMainRef.current,
        start: "top bottom",
        end: "top 20%",
        scrub: 2,
      },
    });

    tl.to(bottleTopRef.current, {
      y: 750,
      x: 10,
      opacity: 1,
      duration: 2,
      ease: "power2.out",
    });

    tl.to(
      bottleBottomRef.current,
      {
        y: 805,
        x: 10,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      },
      "-=2"
    );
  }, []);
  React.useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: secondMainRef.current,
          start: "top 90%", // Starts animation just before the second section is fully in view
          end: "top 50%",
          scrub: 2,
        },
      })
      .to(leftProductRef.current, { y: -200, duration: 2, ease: "power2.out" })
      .to(
        rightProductRef.current,
        { y: -200, duration: 2, ease: "power2.out" },
        "-=2"
      );
  }, []);

  return (
    <>
      <main
        className="flex flex-col items-center justify-center min-h-screen bg-white"
        ref={firstMainRef}
      >
        {/* Hero Section */}
        <section className="relative flex flex-col items-center text-center px-6 py-16 -top-4">
          {/* Background Circle */}
          <motion.div className="absolute inset-0 flex items-center justify-center top-14">
            <motion.div
              initial={{ width: 400, height: 400, top: -100 }}
              animate={{ width: 590, height: 590, top: 0 }}
              transition={{ duration: 3, ease: "easeInOut", delay: 2 }}
              className="relative w-[440px] h-[440px] md:w-[600px] md:h-[600px] 
                  rounded-full p-[6px] bg-gradient-to-b from-lightBlue to-darkBlue"
            >
              <div className="w-full h-full bg-white rounded-full"></div>
            </motion.div>
          </motion.div>

          {/* up Image */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: -150 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 2 }}
            className="absolute z-30"
            ref={bottleTopRef}
          >
            <Image
              src="/Bottle-Top.png"
              alt="Bottle Top"
              width={140}
              height={120}
              className=""
            />
          </motion.div>

          {/* Hero Content */}
          <motion.div
            className="flex flex-col items-center text-center space-y-6 md:space-y-3 z-10"
            initial={{ scale: 0, y: -70, opacity: 0.3 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 2 }}
          >
            <motion.h1
              className={`${familjenGrotesk.className} text-4xl md:text-8xl font-semibold tracking-normal`}
            >
              The Ultimate Companion <br /> for Hydration
            </motion.h1>

            <motion.p
              className={`${familjenGrotesk.className} text-lg md:text-3xl font-light max-w-xl`}
            >
              We believe in the power of hydration.
              <br />
              Our mission is simple yet vital.
            </motion.p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ y: 0, opacity: 0.3 }}
            animate={{ y: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 2 }}
            className="relative z-10 px-7 py-2 mt-6 rounded-full text-white 
             bg-gradient-to-r from-lightBlue to-darkBlue 
             transition-all"
          >
            <Link href="/inquiry">Inquiry Now</Link>
          </motion.div>

          {/* Down Image */}
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 330 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 2 }}
            className="absolute z-10 -bottom-[210px]"
            ref={bottleBottomRef}
          >
            <Image
              src="/Bottle-down.png"
              alt="Bottle down"
              width={156}
              height={120}
              className=""
            />
          </motion.div>
        </section>

        {/* Product Highlights */}
        <section className="relative mt-16 flex justify-center items-center gap-12 flex-wrap px-6 w-full">
          <motion.div
            initial={{ scale: 0, opacity: 0.3 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 2 }}
            className="absolute w-32 h-32 rounded-full bg-gradient-to-bl from-lightBlue to-darkBlue flex items-center justify-center shadow-lg -top-40 left-20 "
            ref={leftProductRef}
          >
            <Image
              src="/bottle-left.png"
              alt="Bottle Left"
              width={60}
              height={60}
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0.3 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 2 }}
            className="absolute w-32 h-32 rounded-full bg-gradient-to-bl from-[#00D1FF] to-[#007BFF] flex items-center justify-center shadow-lg -top-40 right-20"
            ref={rightProductRef}
          >
            <Image
              src="/bottle-right.png"
              alt="Bottle Right"
              width={60}
              height={60}
            />
          </motion.div>
        </section>
      </main>
      {/* Special Features Section */}
      <main
        className="flex  items-center justify-center min-h-screen bg-white"
        ref={secondMainRef}
      >
        <section className="relative flex justify-center items-center gap-12 flex-wrap px-6 w-full h-screen">
          <Image
            src="/Feature-left.png"
            alt="Bottle Right"
            fill
            className="object-fill"
          />
        </section>
        <section className="relative flex flex-col justify-center items-center w-full h-screen bg-featureColor text-white">
          <div className="flex flex-col items-start gap-16">
            {[
              { src: "/icon1.png", title: "Vacuum Bottles" },
              { src: "/icon2.png", title: "Fridge Bottles & Jugs" },
              { src: "/icon3.png", title: "Borosilicate Bottles" },
              { src: "/icon4.png", title: "Kettles" },
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <Image
                    src={feature.src}
                    alt={feature.title}
                    width={50}
                    height={50}
                  />
                </div>
                <span className="text-4xl font-normal tracking-wide">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default page;

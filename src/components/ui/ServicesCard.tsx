"use client";

import React from "react";

import Image from "next/image";
import imgSrc from "@/public/assets/images/sample2.png";
import { motion } from "framer-motion";

const ServicesCard = () => {
  return (
    <div className="w-full flex h-screen flex-row justify-center items-center">
      <div className="w-[50%] h-[37rem] flex flex-row justify-center items-center">
        {/* first image col */}
        <div className="w-[40%] h-full  flex flex-col items-center justify-center gap-7">
          {/* first image */}
          <div className="relative w-[14.5rem] h-[16.5rem] bg-green-700 rounded-md flex justify-end">
            <Image
              src={imgSrc}
              alt="sample"
              className="absolute object-cover rounded-md"
              placeholder="blur"
              draggable={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          {/* 2nd image */}
          <div className="relative w-[14.5rem] h-[16.5rem] bg-green-700 rounded-md flex justify-end">
            <Image
              src={imgSrc}
              alt="sample"
              className="absolute object-cover rounded-md"
              placeholder="blur"
              draggable={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        {/* second image col */}
        <div className="w-[40%] h-full mt-8 flex flex-col items-center justify-center gap-7 overflow-hidden">
          {/* first image */}
          <div className="relative w-[14.5rem] h-[16.5rem] bg-green-700 rounded-md flex justify-end">
            <Image
              src={imgSrc}
              alt="sample"
              className="absolute object-cover rounded-md"
              placeholder="blur"
              draggable={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          {/* 2nd image */}
          <div className="relative w-[14.5rem] h-[16.5rem] bg-green-700 rounded-md flex justify-end">
            <Image
              src={imgSrc}
              alt="sample"
              className="absolute object-cover rounded-md"
              placeholder="blur"
              draggable={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>

      <div className="w-[50%] h-96 bg-slate-400 flex flex-col justify-center items-start p-16 gap-[1rem]">
        <motion.h6
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              bounce: 0.1,
            },
          }}
        >
          services
        </motion.h6>
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              bounce: 0.1,
            },
          }}
        >
          Tailored Solutions
        </motion.h2>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              bounce: 0.1,
            },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </motion.p>
      </div>
    </div>
  );
};

export default ServicesCard;

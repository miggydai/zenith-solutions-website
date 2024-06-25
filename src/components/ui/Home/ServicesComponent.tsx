"use client";

import React from "react";
import Image from "next/image";
import imgSrc from "@/public/assets/images/sample2.png";
import { motion } from "framer-motion";
import Button from "../Button";

const ServicesComponent = () => {
  return (
    <div className="w-full flex h-screen flex-row justify-center items-center relative">
      <div className="w-[50%] h-[37rem] flex flex-row justify-center items-center gap-12">
        {/* first image col */}
        <div className="w-[50%] h-full flex flex-col items-center justify-center gap-7">
          {/* first image */}
          <div className="relative w-[14.5rem] h-[16.5rem] bg-smthGreen rounded-md flex justify-end">
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
          <div className="relative w-[14.5rem] h-[16.5rem] bg-smthGreen rounded-md flex justify-end">
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
        <div className="w-[40%] h-full mt-8 flex flex-col items-center justify-center gap-7">
          {/* first image */}
          <div className="relative w-[14.5rem] h-[16.5rem] bg-smthGreen rounded-md flex justify-end">
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
          <div className="relative w-[14.5rem] h-[16.5rem] bg-smthGreen rounded-lg flex justify-end">
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

      <div className="w-[50%] h-96  flex flex-col justify-center items-start p-16 gap-[1rem]">
        <motion.h6
          className="text-aquaBlue text-lg font-medium"
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
          ━━━━ Services
        </motion.h6>
        <motion.h2
          className="text-smthGreen text-3xl font-semibold"
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
          className="text-smthGreen text-[.8rem]"
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

        <Button href="" label="Learn more" color="smthGreen" />
      </div>
    </div>
  );
};

export default ServicesComponent;

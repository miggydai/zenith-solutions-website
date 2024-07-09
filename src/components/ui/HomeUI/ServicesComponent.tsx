"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../Button";
import type { StaticImageData } from "next/image";

type ServicesProps = {
  title: string;
  description: string;
  img1: StaticImageData;
  img2: StaticImageData;
  img3: StaticImageData;
  img4: StaticImageData;
};

const ServicesComponent: React.FC<ServicesProps> = ({
  title,
  description,
  img1,
  img2,
  img3,
  img4,
}) => {
  return (
    <div className="w-full flex h-screen flex-row justify-center items-center relative">
      <div className="w-[50%] h-[37rem] flex flex-row justify-center items-center gap-12">
        {/* first image col */}
        <div className="w-[50%] h-full flex flex-col items-center justify-center gap-7">
          {/* first image */}
          <div className="relative w-[14.5rem] h-[16.5rem] bg-skyBlue rounded-md flex justify-end">
            <Image
              src={img1}
              alt="sample"
              className="absolute object-cover rounded-md"
              placeholder="blur"
              draggable={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          {/* 2nd image */}
          <div className="relative w-[14.5rem] h-[16.5rem] bg-skyBlue rounded-md flex justify-end">
            <Image
              src={img2}
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
          <div className="relative w-[14.5rem] h-[16.5rem] bg-skyBlue rounded-md flex justify-end">
            <Image
              src={img3}
              alt="sample"
              className="absolute object-cover rounded-md"
              placeholder="blur"
              draggable={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          {/* 2nd image */}
          <div className="relative w-[14.5rem] h-[16.5rem] bg-skyBlue rounded-lg flex justify-end">
            <Image
              src={img4}
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
          className="text-skyBlue text-lg font-medium font-poppins"
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
        {/* title */}
        <motion.h2
          className="text-darkBlue text-3xl font-bold font-montserrat"
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
          {title}
        </motion.h2>
        {/* description */}
        <motion.p
          className="text-darkBlue text-[.8rem] font-poppins"
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
          {description}
        </motion.p>

        <Button
          href="/services"
          label="Learn more"
          color="skyBlue"
          textColor="white"
          textFont="normal"
        />
      </div>
    </div>
  );
};

export default ServicesComponent;

"use client";

import React from "react";
import Image from "next/image";
import imgSrc from "@/public/assets/images/sample2.png";
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

const MobileServicesComponent: React.FC<ServicesProps> = ({
  title,
  description,
  img1,
  img2,
  img3,
  img4,
}) => {
  return (
    <div className="w-full h-full flex-col justify-center items-center">
      <div className="w-full h-[80vh] flex flex-row">
        <div className="w-[50%] flex flex-col justify-start items-center space-y-9 pt-2">
          <div className=" w-[90%] h-[35%] relative">
            <Image
              src={img1}
              alt="sample"
              className="absolute object-cover rounded-md"
              placeholder="blur"
              draggable={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className=" w-[90%] h-[35%] relative">
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
        <div className="w-[50%] flex flex-col justify-center items-center space-y-9">
          <div className=" w-[90%] h-[35%] relative">
            <Image
              src={img3}
              alt="sample"
              className="absolute object-cover rounded-md"
              placeholder="blur"
              draggable={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className=" w-[90%] h-[35%] relative">
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

      {/* bottom section */}
      <div className="w-full h-[50%]S flex flex-col justify-start items-start p-8 gap-3">
        <motion.h6
          className="text-skyBlue text-xs text-wrap font-medium font-poppins"
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
          ━━ Services
        </motion.h6>

        {/* title */}
        <motion.h2
          className="text-darkBlue text-xl font-bold font-montserrat"
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
          className="text-darkBlue text-xs font-poppins"
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

        <Button href="/services" label="Learn more" color="skyBlue" />
      </div>
    </div>
  );
};

export default MobileServicesComponent;

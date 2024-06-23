"use client";

import React from "react";
import InfoCard from "@/src/components/ui/InfoCard";
import imgSrc from "@/public/assets/images/sample.png";
import Image from "next/image";
import { motion } from "framer-motion";

const InfoSection = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-5">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.8, duration: 0.8, delay: 0.4 },
          },
        }}
        initial="hidden"
        whileInView="show"
        className="w-full h-[50%] flex gap-5"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
            },
          }}
          className="2xl:w-[51rem] 2xl:h-[29rem] lg:w-[34rem] lg:h-[19rem] sm:w-[22rem] sm:h-[12rem] relative rounded-md"
        >
          <Image
            src={imgSrc}
            alt="sample image"
            className="absolute object-cover"
            placeholder="blur"
            draggable={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
          />
        </motion.div>
        <InfoCard color="aquaBlue" />
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.25, duration: 0.8, delay: 0.4 },
          },
        }}
        initial="hidden"
        whileInView="show"
        className="w-full h-[50%] flex justify-end gap-5"
      >
        <InfoCard color="smthGreen" />
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
            },
          }}
          className="w-[34rem] h-[19rem] relative rounded-md"
        >
          <Image
            src={imgSrc}
            alt="sample image"
            className="absolute object-cover"
            placeholder="blur"
            draggable={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InfoSection;

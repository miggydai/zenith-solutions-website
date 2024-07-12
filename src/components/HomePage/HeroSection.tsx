"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import bg from "@/public/assets/images/workday.svg";
import gifSrc from "@/public/assets/images/hqgif.gif";
import Button from "../ui/Button";

function HeroSection() {
  return (
    <section className="flex flex-col w-full h-full relative justify-center items-center">
      <div className="z-20 w-full">
        <Image
          src={bg}
          alt="bg"
          className="object-cover w-full"
          draggable={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="absolute top-0 flex justify-center items-center w-full -z-10">
        <Image
          src={gifSrc}
          alt="video"
          className="w-full h-full"
          draggable={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
          priority
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute sm:bottom-[40%] bottom-[30%] 2xl:right-[26%] md:right-[25%] right-[15%] z-30"
      >
        <Button
          label="consult now"
          color="white"
          href="/letstalk"
          textColor="darkBlue"
          textFont="bold"
        />
      </motion.div>
    </section>
  );
}

export default HeroSection;

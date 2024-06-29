"use client";

import React from "react";
import Image from "next/image";
import dots1 from "@/public/assets/images/dots&circle.png";
import dots2 from "@/public/assets/images/bg dots1.png";
import dots3 from "@/public/assets/images/bg dots2.png";
import imgSrc from "@/public/assets/images/sample person.jpg";
import { motion } from "framer-motion";

const ClientStories = () => {
  return (
    <div className="flex sm:flex-row flex-col w-full 2xl:h-[50vh] xl:h-[60vh] h-[30vh] bg-projectOrange relative">
      {/* bottom dots */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{
          opacity: 1,
          x: 1,
          transition: {
            type: "spring",
            bounce: 0.1,
          },
        }}
        className="absolute w-[30%] bottom-0 right-52"
      >
        <Image
          src={dots2}
          alt="asset"
          className="object-cover opacity-20"
          placeholder="blur"
          draggable={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
      {/* top dots */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{
          opacity: 1,
          x: 1,
          transition: {
            type: "spring",
            bounce: 0.1,
          },
        }}
        className="absolute w-[25%] top-0 right-[40%]"
      >
        <Image
          src={dots3}
          alt="asset"
          className="object-cover opacity-30"
          placeholder="blur"
          draggable={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
      {/* dot and circle */}
      <div className="w-[15%] h-full flex justify-center items-center">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: 1,
            transition: {
              type: "spring",
              bounce: 0.1,
            },
          }}
          className="xl:w-32 lg:h-32 w-24 h-24 relative pl-4"
        >
          <Image
            src={dots1}
            alt="asset"
            className="object-cover absolute"
            placeholder="blur"
            draggable={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{
          opacity: 1,
          x: 1,
          transition: {
            type: "spring",
            bounce: 0.1,
          },
        }}
        className="flex flex-col w-[60%] h-full justify-center items-start relative lg:gap-3 gap-1 mb-7"
      >
        <h3 className="2xl:xl:text-2xl text-xl text-white font-bold border-l-4 border-l-white pl-4">
          Patrick Matayabas
        </h3>
        <h6 className="font-light text-white 2xl:text-lg text-sm h-10 border-l-4 border-l-white pl-4">
          Founder
        </h6>

        <p className="lg:mt-5 mt-2 pl-4 text-white lg:mr-56 mr-32 2xl:text-sm text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in{" "}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{
          opacity: 1,
          x: 1,
          transition: {
            type: "spring",
            bounce: 0.1,
          },
        }}
        className="bg-white 2xl:w-[30%] w-[40%] 2xl:h-[50vh] xl:h-[60vh] h-[30vh] rounded-l-full absolute flex justify-center items-center right-0 z-10"
      >
        <Image
          src={imgSrc}
          alt="sample person"
          className="object-cover rounded-l-full rounded-r-xl w-[90%] h-[90%]"
          placeholder="blur"
          draggable={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </div>
  );
};

export default ClientStories;

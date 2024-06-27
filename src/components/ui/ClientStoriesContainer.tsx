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
    <div className="flex flex-row w-full h-[60vh] bg-tan relative">
      {/* bottom bots */}
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
        initial={{ y: 100, opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: 1,
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
          className="w-32 h-32 relative pl-4"
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
        className="flex flex-col w-[60%] h-full justify-start items-start relative gap-3 mb-6 pt-16"
      >
        <h3 className="text-xl text-smthGreen font-bold border-l-4 border-l-smthGreen pl-4">
          Patrick Matayabas
        </h3>
        <h6 className="font-light text-smthGreen text-sm h-10 border-l-4 border-l-smthGreen pl-4">
          Founder
        </h6>

        <p className="mt-5 pl-4 text-smthGreen mr-44">
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
        className="bg-white w-[40%] h-[60vh] rounded-l-full absolute flex justify-center items-center right-0 z-10"
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

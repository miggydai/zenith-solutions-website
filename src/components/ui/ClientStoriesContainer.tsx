"use client";

import React from "react";
import Image from "next/image";
import imgSrc from "@/public/assets/images/sample person.jpg";
import { motion } from "framer-motion";

const ClientStories = () => {
  return (
    <div className="flex flex-row w-full h-[70vh] relative">
      <div className="flex flex-col bg-tan w-[70rem] h-[60vh] justify-center items-center relative">
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
          className="bg-blue-600 rounded-full w-16 h-16 absolute left-20 bottom-20"
        ></motion.div>
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
          className="flex flex-col w-[45rem] h-[50vh] pr-44 gap-1"
        >
          <h3 className="text-xl text-smthGreen font-bold border-l-4 border-l-smthGreen pl-4">
            Patrick Matayabas
          </h3>
          <h6 className="font-light text-smthGreen text-sm h-10 border-l-4 border-l-smthGreen pl-4">
            Founder
          </h6>

          <p className="mt-7 pl-4 text-smthGreen">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in{" "}
          </p>
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
        className="bg-white w-[25rem] h-[60vh] rounded-l-full absolute flex justify-center items-center right-0 z-10"
      >
        <Image
          src={imgSrc}
          alt="sample person"
          className="object-cover rounded-l-full w-[90%] h-[90%]"
          placeholder="blur"
          draggable={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </div>
  );
};

export default ClientStories;

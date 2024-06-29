"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import imgSrc from "@/public/assets/images/sample person.jpg";
import { motion } from "framer-motion";

const ClientStoriesMobile = () => {
  return (
    <section className="w-full h-full flex flex-col justify-start items-center gap-4">
      <div className="w-full h-full bg-projectOrange flex flex-col">
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
          className="bg-white w-full h-[70%] rounded-bl-[8.4rem] flex justify-center items-center right-0 z-10 pb-4"
        >
          <Image
            src={imgSrc}
            alt="sample person"
            className="object-cover rounded-l-[8rem] rounded-r-xl w-[90%] h-[90%]"
            placeholder="blur"
            draggable={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        {/* bottom portion */}
        <div className="flex flex-row w-full h-[50%] p-3">
          {/* <div className="flex flex-col w-[4rem]  h-[100%] gap-4 justify-start items-center pt-9">
            <div className="w-full h-[15%] bg-slate-100"></div>
            <div className="w-full h-[30%] bg-slate-100"></div>
          </div> */}

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
            className="flex flex-col h-full justify-start items-start relative gap-1 mb-6 pt-9"
          >
            <div className="flex flex-col border-l-8 border-l-white pl-4">
              <h3 className="text-lg text-white font-bold">
                Patrick Matayabas
              </h3>
              <h6 className="font-light text-white text-sm">Founder</h6>
            </div>

            <p className="mt-3 pl-4 text-white text-xs border-l-8 border-l-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in{" "}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientStoriesMobile;

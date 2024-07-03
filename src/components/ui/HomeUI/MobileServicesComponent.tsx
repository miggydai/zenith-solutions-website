"use client";

import React from "react";
import Image from "next/image";
import imgSrc from "@/public/assets/images/sample2.png";
import { motion } from "framer-motion";
import Button from "../Button";

type ServicesProps = {
  title: string;
  description: string;
};

const MobileServicesComponent: React.FC<ServicesProps> = ({
  title,
  description,
}) => {
  return (
    <div className="w-full h-full flex-col justify-center items-center">
      <div className="w-full h-[80vh] flex flex-row">
        <div className="w-[50%]  flex flex-col justify-start items-center gap-2 pt-2">
          <div className=" w-[90%] h-[45%] bg-purple-700"></div>
          <div className=" w-[90%] h-[45%] bg-pink-500"></div>
        </div>
        <div className="w-[50%]  flex flex-col justify-center items-center gap-2">
          <div className=" w-[90%] h-[45%] bg-purple-700"></div>
          <div className=" w-[90%] h-[45%] bg-pink-500"></div>
        </div>
      </div>

      {/* bottom section */}
      <div className="w-full h-[50%]S flex flex-col justify-start items-start p-8 gap-3">
        <motion.h6
          className="text-skyBlue text-xs text-wrap font-medium"
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
          className="text-darkBlue text-xl font-semibold"
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
          className="text-darkBlue text-xs"
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

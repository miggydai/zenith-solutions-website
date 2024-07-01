"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/src/components/ui/Button";
import LetstalkCard from "@/src/components/ui/LetstalkCard";

const page = () => {
  return (
    <section className="w-full h-[150vh] flex flex-col justify-start items-center relative">
      <div className="w-full h-screen flex flex-col justify-center items-center bg-aquaBlue relative">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 1 }}
          className="sm:w-[50%] w-full h-auto flex flex-col gap-2 justify-center items-center"
        >
          <h4 className="font-medium text-xl uppercase">here at zenith</h4>
          <h1 className="sm:text-6xl text-3xl font-bold text-center capitalize">
            We are here to help
          </h1>
          <p className="text-center sm:text-base text-sm">
            We can streamline the budgeting process of your project with precise
            pricing calculations tailored specifically to your needs
          </p>
          <div className="w-full flex flex-row gap-5 justify-center items-center mt-3">
            <Button label="button1" color="smthGreen" href="" />
            <Button label="button2" color="smthGreen" href="" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="absolute right-60 bg-red-500 w-16 h-16 rounded-full"
        ></motion.div>
        <div className="absolute -bottom-96 w-3/4 flex justify-center items-center">
          <LetstalkCard />
        </div>
      </div>
    </section>
  );
};

export default page;

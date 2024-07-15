"use client";

import React from "react";
import imgsrc from "@/public/assets/images/abtGrid.png";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  gotoSlide: (index: number) => void;
}

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const gridVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Grid: React.FC<Props> = ({ gotoSlide }) => {
  return (
    
    <motion.div
      variants={gridContainerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-6 md:grid-cols-5 gap-4 sm:p-4 p-1 h-screen"
    >
      <motion.div
        variants={gridVariants}
        className="grid 2xl:col-span-2 max-sm:grid-cols-1 md:grid-rows-2 md:row-span-2 gap-4 max-md:grid-cols-2 max-md:col-span-2 h-full"
      >
        {/* first block */}
        <motion.div
          variants={gridVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="relative cursor-pointer max-sm:justify-center max-sm:items-center group bg-tanSgradient rounded-2xl flex text-black flex-col justify-between p-5 font-bold transition ease-out duration-600"
          onClick={() => gotoSlide(0)}
        >
          <p className="font-montserrat sm:text-lg text-sm">Project Ready</p>

          <p className="sm:text-2xl text-base font-montserrat">10k+</p>

          {/* Overlay */}
          <div className="absolute inset-0 bg-projectOrange bg-opacity-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition ease-out duration-600 rounded-2xl">
            <p className="text-white sm:text-2xl text-base uppercase tracking-wide font-montserrat">
              Zeal
            </p>
          </div>
        </motion.div>
        
        {/* 2nd block */}
        <motion.div
          variants={gridVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="relative cursor-pointer group w-full h-full flex items-center justify-center bg-skyBlue rounded-2xl"
          onClick={() => gotoSlide(1)}
        >
          <p className="font-bold sm:text-lg text-sm font-montserrat uppercase tracking-wide">
            Diversity
          </p>

          <div className="absolute inset-0 bg-[#C0B8FF] flex items-center justify-center opacity-0 group-hover:opacity-100 transition ease-out duration-600 rounded-2xl">
            <p className="text-white sm:text-2xl text-base tracking-wide uppercase font-montserrat font-bold">
              Existence
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* picture */}
      <motion.div
        variants={gridVariants}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="relative group 2xl:col-span-2 col-span-2 row-span-2 cursor-pointer h-full"
        onClick={() => gotoSlide(2)}
      >
        <Image
          src={imgsrc}
          alt="grid1"
          className="rounded-2xl w-full absolute object-cover h-full"
          placeholder="blur"
          draggable={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />

        <div className="absolute inset-0 bg-[#53C651] flex items-center justify-center opacity-0 group-hover:opacity-100 transition ease-out duration-600 rounded-2xl">
          <p className="text-white sm:text-4xl text-base font-montserrat uppercase tracking-wide font-bold">
            Nurture
          </p>
        </div>
      </motion.div>

      {/* third section */}
      <motion.div variants={gridVariants} className=" col-span-2">
        {/* 4th block */}
        <motion.div
          variants={gridVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="relative group w-full cursor-pointer h-full flex items-center justify-center  bg-tanSgradient rounded-2xl"
          onClick={() => gotoSlide(3)}
        >
          <p className="font-bold sm:text-xl text-[.6rem] uppercase tracking-wide text-black font-montserrat">
            Community Services
          </p>

          <div className="absolute inset-0 bg-[#59D4D4] flex items-center justify-center opacity-0 group-hover:opacity-100 transition ease-out duration-600 rounded-2xl">
            <p className="text-white sm:text-2xl text-sm font-montserrat tracking-wide uppercase font-bold">
              Idea
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* bottom row */}
      <motion.div
        variants={gridVariants}
        className="grid grid-cols-2 col-span-2 gap-4"
      >
        {/* 5th block */}
        <motion.div
          variants={gridVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="relative group bg-skyBlue cursor-pointer rounded-2xl flex text-white flex-col justify-between p-5 font-bold"
          onClick={() => gotoSlide(4)}
        >
          <p className="font-montserrat sm:text-sm text-[.4rem]">
            Years of Experience
          </p>

          <h6 className="font-montserrat sm:text-3xl text-[.5rem]">
            12+ Years
          </h6>

          <div className="absolute inset-0 bg-[#FF756C] flex items-center justify-center opacity-0 group-hover:opacity-100 transition ease-out duration-600 rounded-2xl">
            <p className="text-white sm:text-base text-[.5rem] font-montserrat uppercase tracking-wide font-bold">
              Transformation
            </p>
          </div>
        </motion.div>

        {/* last block */}
        <motion.div
          variants={gridVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="relative group cursor-pointer bg-skyBlue flex justify-center items-center font-bold rounded-2xl"
          onClick={() => gotoSlide(5)}
        >
          <p className="font-bold sm:text-xl text-[.5rem] font-montserrat uppercase">
            Inclusivity
          </p>

          <div className="absolute inset-0 bg-[#6CA7FF] flex items-center justify-center opacity-0 group-hover:opacity-100 transition ease-out duration-600 rounded-2xl">
            <p className="text-white sm:text-base text-sm uppercase font-montserrat tracking-wide font-bold">
              Hope
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Grid;

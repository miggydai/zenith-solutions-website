"use client";
import React from "react";
import { motion } from "framer-motion";

const FounderCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 1 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl flex flex-col gap-10 bg-white p-10 shadow-2xl drop-shadow-2xl w-[70vw]"
    >
      {/* Top section */}
      <div className="flex gap-10">
        {/* Picture */}

        {/* Deets */}
        <div className="flex flex-col gap-4 justify-center">
          <h1 className="md:text-5xl font-bold text-black font-montserrat max-md:text-xl capitalize">
            Davinder Singh
          </h1>
          <p className="text-gray-300 font-poppins text-xs capitalize">
            Founder
          </p>
        </div>
      </div>
      {/* Long paragraph */}
      <div className="flex flex-col md:text-lg gap-10 text-black max-md:text-sm">
        <div className="flex flex-col gap-4">
          <p className="font-poppins">
          Davinder is the visionary founder of Zenith Solutions LLC, with over 20 years of distinguished experience in finance, accounting, and technology across the United States and Australia. A seasoned expert in the Workday ecosystem for more than eight years, he launched his Workday career with Cushman and Wakefield before advancing to a strategic role at a prominent Workday partner firm.
           <br /> <br /> Davinder possesses a proven track record of success across diverse industries, including retail, real estate, utilities, healthcare, and higher education. He is recognized for his strategic insight and leadership in delivering innovative solutions. Outside of his professional endeavors, Davinder is passionate about tennis and cricket and is an enthusiastic supporter of sports legends Sachin Tendulkar, Roger Federer, and Michael Schumacher.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FounderCard;

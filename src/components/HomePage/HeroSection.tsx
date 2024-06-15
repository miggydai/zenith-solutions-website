"use client";

import React from "react";
import Button from "../ui/Button";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen bg-slate-400">
      <Button label="let's talk" color="blue" />
      <Button label="send message" color="darkblue" />

      {/* framer example */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className=" w-6 h-6 rounded-full bg-blue-200"
      ></motion.div>
    </section>
  );
}

export default HeroSection;

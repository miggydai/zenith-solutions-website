"use client";

import React from "react";
import { motion } from "framer-motion";

import Button from "@/src/components/ui/Button";
import OutlinedHeader from "@/src/components/ui/OutlinedHeader";
import InfoCard from "@/src/components/ui/InfoCard";

function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen">
      <Button label="let's talk" color="blue" />
      <Button label="send message" color="darkblue" />
      <OutlinedHeader label="sample" color="white" weight="" />
      <InfoCard color="aquaBlue" />
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

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import bg from "@/public/assets/images/zenithbgtransparent.svg";

function HeroSection() {
  return (
    <section className="flex flex-col w-full h-full relative">
      <Image
        src={bg}
        alt="bg"
        className="object-contain"
        draggable={false}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </section>
  );
}

export default HeroSection;

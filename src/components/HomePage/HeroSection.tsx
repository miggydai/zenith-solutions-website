"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import bg from "@/public/assets/images/zenithsvg.svg";

function HeroSection() {
  return (
    <section className="flex flex-col w-full h-full relative">
      <div className="absolute bg-transparent w-44 h-32 top-36 left-32 z-30 text-transparent hover:text-blue-600">
        zeal
      </div>
      <div className="absolute bg-transparent w-44 h-32 top-36 left-80 z-30 text-transparent hover:text-blue-600">
        existence
      </div>
      <div className="absolute bg-transparent w-44 h-32 top-36 left-[40%] z-30 text-transparent hover:text-blue-600">
        n
      </div>
      <div className="absolute bg-transparent w-24 h-32 top-36 right-[35%] z-30 text-transparent hover:text-blue-600">
        i
      </div>
      <div className="absolute bg-transparent w-44 h-32 top-36 right-80 z-30 text-transparent hover:text-blue-600">
        t
      </div>
      <div className="absolute bg-transparent w-44 h-32 top-36 right-32 z-30 text-transparent hover:text-blue-600">
        h
      </div>
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

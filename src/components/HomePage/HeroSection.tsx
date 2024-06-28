"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import bg from "@/public/assets/images/zenthbgsvg.svg";
import OutlinedHeader from "@/src/components/ui/OutlinedHeader";
import InfoCard from "@/src/components/ui/Home/InfoCard";

function HeroSection() {
  return (
    <section className="flex flex-col w-full h-screen relative">
      <div className="absolute bg-transparent w-24 h-32 top-40 left-32 z-30 text-transparent hover:text-blue-600">
        zeal
      </div>
      <div className="absolute bg-transparent w-24 h-32 top-40 left-56 z-30 text-transparent hover:text-blue-600">
        etlog
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

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import bg from "@/public/assets/images/zenithbgtransparent.svg";
import gifSrc from "@/public/assets/images/bgvidnew.gif"
function HeroSection() {
  return (
    <section className="flex flex-col w-full h-full relative">
      <div>  
        <div className="z-20">   
         <Image
        src={bg}
        alt="bg"
        className="object-contain"
        draggable={false}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      </div>
      <div className="absolute top-0 flex justify-center items-center w-full  -z-10">
      <Image 
      src={gifSrc}
      className="w-full h-[90vh]"
      />
      </div>
      </div>

    </section>
  );
}

export default HeroSection;

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import bg from "@/public/assets/images/zenithbgtransparent.svg";
import gifSrc from "@/public/assets/images/bgvidnew.gif";
import cloud from "@/public/assets/images/cloud 1.png";
import cloud2 from "@/public/assets/images/colud 2.png";

function HeroSection() {
  return (
    <section className="flex flex-col w-full h-full relative">
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
          alt="hays patrick"
          className="w-full h-screen"
          draggable={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />
      </div>

      <div className="w-[25%]  h-auto overflow-x-hidden absolute z-20 top-0 right-0">
        <div className="relative flex overflow-x-hidden">
          <div className="flex flex-row justify-end items-end py-16 animate-marquee2">
            <div className="relative w-[10rem] h-[2rem] inline-flex justify-center items-center">
              <Image
                src={cloud2}
                alt="picture"
                className="absolute object-cover"
                draggable={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[20%] h-auto overflow-x-hidden absolute z-20 top-0">
        <div className="relative flex overflow-x-hidden">
          <div className="flex flex-row justify-start items-start py-16 animate-marquee">
            <div className="relative w-[10rem] h-[2rem] inline-flex justify-center items-center">
              <Image
                src={cloud}
                alt="picture"
                className="absolute object-cover"
                draggable={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

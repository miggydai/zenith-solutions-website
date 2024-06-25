import React from "react";
import Image from "next/image";
import imgSrc from "@/public/assets/images/servicesBg.png";
import mountain from "@/public/assets/images/BG mountain.png";
import spiral from "@/public/assets/images/spiral.png";

const ServicesHeroSection = () => {
  return (
    <section className="w-full h-screen flex flex-col relative items-center justify-center">
      {/* <Image
        src={spiral}
        alt="spiral"
        className="absolute object-cover left-0 top-4 w-44 h-44"
        placeholder="blur"
        draggable={false}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="bg-tan w-full h-[80vh] relative">
        <Image
          src={mountain}
          alt="mountains"
          className="absolute object-cover bottom-0 w-full"
          placeholder="blur"
          draggable={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="bg-blue-700 w-full h-[40vh]"></div> */}
      {/* <Image
        src={imgSrc}
        alt="background"
        className="absolute object-cover"
        placeholder="blur"
        draggable={false}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <h1 className="text-4xl font-bold text-black">Text</h1> */}
    </section>
  );
};

export default ServicesHeroSection;

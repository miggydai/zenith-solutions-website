import React from "react";
import Image from "next/image";
import imgSrc from "@/public/assets/images/services bg.svg";
import mountain from "@/public/assets/images/BG mountain.png";
import spiral from "@/public/assets/images/spiral.png";

const ServicesHeroSection = () => {
  return (
    <section className="w-full h-[114vh] flex flex-col relative">
      {/* <h1 className="text-4xl font-bold text-black absolute top-44 left-56 z-50">
        Text
      </h1> */}
      {/* <Image
        src={spiral}
        alt="spiral"
        className="absolute object-cover left-0 top-4 w-44 h-44"
        placeholder="blur"
        draggable={false}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      /> */}
      {/* <div className="bg-tan w-full h-[80vh] relative"> */}
      {/* <Image
          src={mountain}
          alt="mountains"
          className="absolute object-cover bottom-0 w-full"
          placeholder="blur"
          draggable={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        /> */}
      {/* </div> */}
      {/* <div className="bg-blue-700 w-full h-[40vh]"></div> */}

      <Image
        src={imgSrc}
        alt="background"
        className="object-cover"
        draggable={false}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </section>
  );
};

export default ServicesHeroSection;

import React from "react";
import Image from "next/image";
import imgSrc from "@/public/assets/images/services bg.svg";
import mountain from "@/public/assets/images/BG mountain.png";
import spiral from "@/public/assets/images/spiral.png";

const ServicesHeroSection = () => {
  return (
    <section className="w-full h-full flex flex-col relative">
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

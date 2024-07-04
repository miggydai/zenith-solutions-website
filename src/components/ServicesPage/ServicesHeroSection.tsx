import React from "react";
import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import imgSrc from "@/public/assets/images/services bg.svg";
import imgSrc2 from "@/public/assets/images/servicesHeaderPic.png";

const ServicesHeroSection = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-[4rem] sm:mb-[7rem] mb-[10rem]">
      <div className="relative w-full">
        <div className="absolute -z-10 w-full">
          <Image
            src={imgSrc}
            alt="background"
            className="object-cover w-full h-[120vh]"
            draggable={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-4 mt-8">
        <SectionHeader header="Enterprise Consulting" color="black" />
        <p className="text-black sm:text-lg text-base text-center font-poppins">
          transform your business from the ground up.
        </p>
        <Button label="Inquire Now" color="skyBlue" href="" />
      </div>

      <div className="sm:w-[50%] w-[90%] sm:h-[20rem] h-[15rem] relative rounded-xl">
        <Image
          src={imgSrc2}
          alt="Header Picture"
          className="object-cover absolute"
          placeholder="blur"
          draggable={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </section>
  );
};

export default ServicesHeroSection;

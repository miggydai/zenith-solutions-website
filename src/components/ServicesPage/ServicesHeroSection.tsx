import React from "react";
import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import imgSrc from "@/public/assets/images/services bg.svg";

const ServicesHeroSection = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-[4rem] mb-[7rem]">
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
        <SectionHeader header="Enterprise Consulting" />
        <p className="text-black text-lg">
          transform your business from the ground up.
        </p>
        <Button label="Inquire Now" color="aquaBlue" href="" />
      </div>

      <div className="w-[50%] h-[20rem] bg-blue-700 rounded-xl"></div>
      {/* <div className="w-full h-[120vh] relative"> */}
      {/* <Image
        src={imgSrc}
        alt="background"
        className="object-cover w-full h-full"
        draggable={false}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      /> */}
      {/* </div> */}
    </section>
  );
};

export default ServicesHeroSection;

import React from "react";
import { visionData } from "@/src/data/VisionData";
import VisionCard from "../ui/AboutUI/VisionCard";
import Image from "next/image";
import imgSrc from "@/public/assets/images/VisionPic.png";

const VisionSection = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center mb-3">
      <div className="flex sm:flex-row flex-col w-[80%] h-[30vh] sm:justify-between justify-evenly">
        <div className="flex flex-row sm:w-[50%] w-full gap-4">
          {/* lines */}
          <div className="flex flex-col h-full gap-5">
            <div className="w-2 h-[30%] bg-tanSgradient"></div>
            <div className="w-2 h-[70%] bg-tanSgradient"></div>
          </div>

          <div className="w-[90%] flex items-center">
            <h1 className="sm:text-5xl text-3xl font-bold text-black font-montserrat capitalize">
              What is our <span className="text-projectOrange">Vision?</span>
            </h1>
          </div>
        </div>

        <div className="sm:w-[40%] w-full flex items-center">
          <p className="text-darkBlue sm:text-sm text-xs font-light font-poppins">
            Provide clients with personalized services that maximize their
            Workday investments. With a team experienced in both implementation
            and end-user roles, Zenith understands and addresses clients&#39;
            challenges effectively.
          </p>
        </div>
      </div>

      <div className="relative sm:w-[80%] w-[90%] h-[397px] rounded-xl my-4">
        <Image
          src={imgSrc}
          alt="vision picture"
          className="absolute object-cover"
          placeholder="blur"
          draggable={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="sm:w-[80%] w-full sm:h-full h-full flex sm:flex-row xl:flex-nowrap flex-wrap flex-col justify-center items-center gap-2">
        {visionData.map((vision, index) => (
          <VisionCard visions={vision} key={index} />
        ))}
      </div>
    </section>
  );
};

export default VisionSection;

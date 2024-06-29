import React from "react";
import { visionData } from "@/src/data/VisionData";
import VisionCard from "../ui/About/VisionCard";

const VisionSection = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center mb-3">
      <div className="flex flex-row w-[80%] h-[30vh] justify-between">
        <div className="flex flex-col h-full gap-5">
          <div className="w-2 h-[30%] bg-red-500"></div>
          <div className="w-2 h-[70%] bg-red-500"></div>
        </div>

        <div className="w-[40%] flex items-center">
          <h1 className="text-5xl font-bold text-black">
            What is our <span className="text-orange-500">Vision?</span>
          </h1>
        </div>

        <div className="w-[40%] flex items-center">
          <p className="text-black text-sm">
            Provide clients with personalized services that maximize their
            Workday investments. With a team experienced in both implementation
            and end-user roles, Zenith understands and addresses clients&#39;
            challenges effectively.
          </p>
        </div>
      </div>

      <div className="bg-blue-500 w-[80%] h-[397px] rounded-xl my-4"></div>

      <div className="w-[80%] h-[343px] flex flex-row justify-center items-center gap-2">
        {visionData.map((vision, index) => (
          <VisionCard visions={vision} key={index} />
        ))}
      </div>
    </section>
  );
};

export default VisionSection;

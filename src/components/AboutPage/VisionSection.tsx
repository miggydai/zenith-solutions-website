import React from "react";
import { visionData } from "@/src/data/VisionData";
import VisionCard from "../ui/About/VisionCard";

const VisionSection = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center mb-3">
      <div className="flex sm:flex-row flex-col w-[80%] h-[30vh] sm:justify-between justify-evenly">
        <div className="flex flex-row sm:w-[50%] w-full gap-4">
          {/* lines */}
          <div className="flex flex-col h-full gap-5">
            <div className="w-2 h-[30%] bg-tan"></div>
            <div className="w-2 h-[70%] bg-tan"></div>
          </div>

          <div className="w-[90%] flex items-center">
            <h1 className="sm:text-5xl text-3xl font-bold text-black">
              What is our <span className="text-orange-500">Vision?</span>
            </h1>
          </div>
        </div>

        <div className="sm:w-[40%] w-full flex items-center">
          <p className="text-black sm:text-sm text-xs">
            Provide clients with personalized services that maximize their
            Workday investments. With a team experienced in both implementation
            and end-user roles, Zenith understands and addresses clients&#39;
            challenges effectively.
          </p>
        </div>
      </div>

      <div className="bg-blue-500 sm:w-[80%] w-[90%] h-[397px] rounded-xl my-4"></div>

      <div className="sm:w-[80%] w-full sm:h-full h-full flex sm:flex-row flex-wrap flex-col justify-center items-center gap-2">
        {visionData.map((vision, index) => (
          <VisionCard visions={vision} key={index} />
        ))}
      </div>
    </section>
  );
};

export default VisionSection;

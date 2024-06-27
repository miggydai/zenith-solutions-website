import React from "react";
import VisionCard from "../ui/About/VisionCard";

const VisionSection = () => {
  return (
    <section className="w-full h-full flex flex-col bg-slate-400 justify-center items-center">
      <div className="flex flex-row w-[80%] h-[30vh] justify-between bg-pink-500">
        <div className="flex flex-col h-full gap-5">
          <div className="w-2 h-[30%] bg-red-500"></div>
          <div className="w-2 h-[70%] bg-red-500"></div>
        </div>

        <div className="w-[40%] flex items-center bg-slate-600">
          <h1 className="text-5xl font-bold text-black">
            What is our <span className="text-orange-500">Vision?</span>
          </h1>
        </div>

        <div className="w-[40%] flex items-center">
          <p className="text-black text-xs">
            Provide clients with personalized services that maximize their
            Workday investments. With a team experienced in both implementation
            and end-user roles, Zenith understands and addresses clients&#39;
            challenges effectively.
          </p>
        </div>
      </div>

      <div className="bg-blue-500 w-[80%] h-[397px]"></div>

      <div className="bg-green-400 w-[80%] h-[343px]">
        <VisionCard />
      </div>
    </section>
  );
};

export default VisionSection;

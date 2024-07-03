import React from "react";
import Circle from "../ui/Circle";

const MissionSection = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 h-[70vh] gap-5 relative overflow-hidden">
      {/* Circles */}
      <div className="absolute w-36 h-36 top-3 right-[3%]">
        <Circle color="orange" />
      </div>

      <div className="absolute w-16 h-16 top-3 left-[3%]">
        <Circle color="orange" />
      </div>

      <div className="absolute w-16 h-16 top-[50%] right-[17%]">
        <Circle color="orange" />
      </div>

      <div className="absolute w-48 h-48 -bottom-16 -right-24">
        <Circle color="orange" />
      </div>

      <div className="absolute sm:w-48 sm:h-48 w-32 h-32  -bottom-16 -left-12">
        <Circle color="orange" />
      </div>

      <div className="w-full h-[40%] flex flex-row justify-center items-center gap-5 px-3 z-10">
        <div className="flex flex-col h-full gap-5">
          <div className="w-3 h-[30%] bg-tanSgradient"></div>
          <div className="w-3 h-[70%] bg-tanSgradient"></div>
        </div>

        <h1 className="sm:text-6xl text-4xl text-black capitalize font-montserrat font-bold z-10">
          what is our <span className="text-projectOrange">mission?</span>
        </h1>
      </div>
      <div className="sm:w-[50%] w-full sm:px-4 px-8 z-10">
        <p className="font-light text-darkBlue font-poppins sm:text-base text-sm">
          Our mission is to provide excellent customer service with integrity
          and accountability. We value commitment to community involvement and
          inclusivity because we believe it is crucial in today’s business
          landscape. At Zenith, we dedicate ourselves to being socially
          responsible, culturally-inclusive and trustworthy partners.
        </p>
      </div>
    </div>
  );
};

export default MissionSection;

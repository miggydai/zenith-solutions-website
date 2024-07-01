import React from "react";

const MissionSection = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 h-[70vh] gap-5">
      <div className="w-full h-[40%] flex flex-row justify-center items-center gap-5 px-3">
        <div className="flex flex-col h-full gap-5">
          <div className="w-3 h-[30%] bg-tan"></div>
          <div className="w-3 h-[70%] bg-tan"></div>
        </div>

        <h1 className="sm:text-6xl text-4xl text-black capitalize font-bold">
          what is our <span className="text-orange-400">mission?</span>
        </h1>
      </div>
      <div className="sm:w-[50%] w-full sm:px-4 px-8">
        <p className="font-light text-black sm:text-base text-sm">
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

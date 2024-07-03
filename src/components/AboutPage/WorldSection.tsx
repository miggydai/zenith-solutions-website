import React from "react";
import Map from "../ui/Map";
import SectionHeader from "../ui/SectionHeader";

const WorldSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 p-10 mb-[10rem] bg-gray-100 h-screen">
      <div>
        <SectionHeader header="Meet our team Worldwide" />
      </div>
      <div className="w-3/4">
        <Map />
      </div>
    </div>
  );
};

export default WorldSection;

// WorldSection.tsx

import React from "react";
import dynamic from "next/dynamic";
import SectionHeader from "../ui/SectionHeader";


const DynamicMap = dynamic(() => import("../ui/Map"), { ssr: false });

const WorldSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 p-10 mb-[10rem] h-screen">
      <div>
        <SectionHeader header="Meet our team Worldwide" color="skyBlue" />
      </div>
      <div className="w-3/4">
       
        <DynamicMap />
      </div>
    </div>
  );
};

export default WorldSection;

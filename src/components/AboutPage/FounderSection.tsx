import React from "react";
import FounderCard from "../ui/FounderCard";
import SectionHeader from "../ui/SectionHeader";

const FounderSection = () => {
  return (
    <div className="h-screen flex flex-col gap-10 justify-center items-center py-[5rem] ">
      <div>
        <SectionHeader header="Meet our founder" color="orange" />
      </div>
      <div className="">
        <FounderCard />
      </div>
    </div>
  );
};

export default FounderSection;

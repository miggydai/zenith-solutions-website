import React from "react";
import ServicesHeader from "../ui/ServicesUI/ServicesHeader";
import { advisoryContent } from "@/src/data/AdvisoryData";
import IconCard from "../ui/IconCard";
import Circle from "../ui/Circle";

const SecondSection = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center relative overflow-hidden">
      {/* circles */}
      <div className="absolute w-36 h-36 top-[15%] left-[15%]">
        <Circle color="orange" />
      </div>
      <div className="absolute w-44 h-44 top-[40%] right-[-3%]">
        <Circle color="blue" />
      </div>
      <div className="absolute w-44 h-44 bottom-[-3%] right-[15%]">
        <Circle color="orange" />
      </div>
      <ServicesHeader
        textColor="orange"
        fontWeight="bold"
        borderColor="orange"
        label="Advisory"
        title="Strategic guidance for sustainable success"
        description="Our advisory services emphasizes on organizational development, communication, and
change management. Our team provide the insights and  strategies needed to navigate
challenges and achieve long-term growth."
      />
      <div className="2xl:w-[50%] w-[70%] flex flex-row flex-wrap gap-6 items-center justify-center z-10">
        {advisoryContent.map((a, index) => (
          <IconCard
            key={index}
            service={a}
            cardColor="tan"
            titleColor="black"
            pColor="black"
          />
        ))}
      </div>
    </section>
  );
};

export default SecondSection;

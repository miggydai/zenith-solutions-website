import React from "react";
import ServicesHeader from "../ui/ServicesUI/ServicesHeader";
import { analyticsContent } from "@/src/data/AnalyticsData";
import IconCard from "../ui/IconCard";
import Circle from "../ui/Circle";

const ThirdSection = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center relative overflow-hidden">
      {/* circles */}
      <div className="absolute w-44 h-44 top-[7%] right-[20%]">
        <Circle color="blue" />
      </div>
      <div className="absolute w-44 h-44 top-[15%] left-[6%]">
        <Circle color="blue" />
      </div>
      <div className="absolute w-44 h-44 bottom-1 right-[15%]">
        <Circle color="blue" />
      </div>
      <div className="absolute w-44 h-44 bottom-6 left-[-6%]">
        <Circle color="blue" />
      </div>
      <ServicesHeader
        textColor="orange"
        fontWeight="bold"
        borderColor="orange"
        label="Analytics & Reporting"
        title="Transform data into actionable insights"
        description="Our Analytics & Reporting services equip your business with thorough data analysis and personalized reporting solutions. We enable you to make well-informed decisions, enhance performance, and foster strategic growth by converting raw data into precise, actionable
insights."
      />
      <div className="w-[70%] flex flex-row flex-wrap gap-6 items-center justify-center z-10">
        {analyticsContent.map((a, index) => (
          <IconCard
            key={index}
            service={a}
            cardColor="blue"
            titleColor="black"
            pColor="black"
          />
        ))}
      </div>
    </section>
  );
};

export default ThirdSection;

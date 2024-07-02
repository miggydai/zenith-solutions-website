import React from "react";
import ServicesHeader from "../ui/ServicesUI/ServicesHeader";
import { enterpriseContent } from "@/src/data/EnterpriseConsultingData";
import IconCard from "../ui/IconCard";
import Circle from "../ui/Circle";

const FirstSection = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center bg-gray-50 relative overflow-hidden">
      {/* circles */}
      <div className="absolute w-44 h-44 top-3 sm:left-[10%] left-[-18%]">
        <Circle color="blue" />
      </div>
      <div className="absolute w-44 h-44 top-[50%] left-[-2%]">
        <Circle color="orange" />
      </div>
      <div className="absolute w-44 h-44 top-[20%] right-[10%]">
        <Circle color="blue" />
      </div>
      <div className="absolute w-44 h-44 bottom-[-3%] right-[15%]">
        <Circle color="blue" />
      </div>

      {/* header */}
      <ServicesHeader
        textColor="orange"
        fontWeight="bold"
        borderColor="orange"
        label="Enterprise Consulting"
        title="Transform your business from the ground up"
        description="We offer tailored consulting solutions in areas like financials, human capital, and AI to push
for efficiency and innovation. Our expertise ensures that systems are optimized to support
every business needs."
      />
      {/* cards */}
      <div className="w-[70%] flex flex-row flex-wrap gap-6 items-center justify-center z-10">
        {enterpriseContent.map((a, index) => (
          <IconCard
            key={index}
            service={a}
            cardColor="orange"
            titleColor="black"
            pColor="black"
          />
        ))}
      </div>
    </section>
  );
};

export default FirstSection;

import React from "react";
import ServicesHeader from "../ui/ServicesPage/ServicesHeader";
import { advisoryContent } from "@/src/data/AdvisoryData";
import IconCard from "../ui/IconCard";

const SecondSection = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center">
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
      <div className="w-[70%] flex flex-row flex-wrap gap-6 items-center justify-center">
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

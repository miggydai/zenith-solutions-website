import React from "react";
import ServicesHeader from "../ui/ServicesPage/ServicesHeader";
import { enterpriseContent } from "@/src/data/EnterpriseConsultingData";
import IconCard from "../ui/IconCard";

const FirstSection = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center">
      <ServicesHeader
        label="Enterprise Consulting"
        title="Transform your business from the ground up."
        description="We offer tailored consulting solutions in areas like financials, human capital, and AI to push
for efficiency and innovation. Our expertise ensures that systems are optimized to support
every business needs."
      />
      <div className="w-[70%] flex flex-row flex-wrap gap-6 items-center justify-center">
        {enterpriseContent.map((a, index) => (
          <IconCard key={index} service={a} cardColor="orange" />
        ))}
      </div>
    </section>
  );
};

export default FirstSection;

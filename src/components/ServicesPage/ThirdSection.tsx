import React from "react";
import ServicesHeader from "../ui/ServicesPage/ServicesHeader";
import { analyticsContent } from "@/src/data/AnalyticsData";
import IconCard from "../ui/IconCard";

const ThirdSection = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center">
      <ServicesHeader
        label="Analytics & Reporting"
        title="Transform data into actionable insights."
        description="Our Analytics & Reporting services equip your business with thorough data analysis and personalized reporting solutions. We enable you to make well-informed decisions, enhance performance, and foster strategic growth by converting raw data into precise, actionable
insights."
      />
      <div className="w-[70%] flex flex-row flex-wrap gap-6 items-center justify-center">
        {analyticsContent.map((a, index) => (
          <IconCard key={index} service={a} cardColor="blue" />
        ))}
      </div>
    </section>
  );
};

export default ThirdSection;

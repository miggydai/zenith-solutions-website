import React from "react";
import FirstSection from "@/src/components/ServicesPage/FirstSection";
import ServicesHeroSection from "@/src/components/ServicesPage/ServicesHeroSection";
import SecondSection from "@/src/components/ServicesPage/SecondSection";
import ThirdSection from "@/src/components/ServicesPage/ThirdSection";
import LogoMarquee from "@/src/components/ui/LogoMarquee";

const ServicesPage = () => {
  return (
    <main>
      <ServicesHeroSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <LogoMarquee />
    </main>
  );
};

export default ServicesPage;

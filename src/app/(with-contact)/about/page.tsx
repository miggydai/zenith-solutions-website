// app/page.tsx (or pages/index.tsx)
"use client";

import React, { useRef, useState } from "react";
import AboutHeroSection from "@/src/components/AboutPage/AboutHeroSection";
import VisionSection from "@/src/components/AboutPage/VisionSection";
import MissionSection from "@/src/components/AboutPage/MissionSection";
import ZenithSection from "@/src/components/AboutPage/ZenithSection";
import ClientSection from "@/src/components/HomePage/ClientSection";
import WorldSection from "@/src/components/AboutPage/WorldSection";
import FounderSection from "@/src/components/AboutPage/FounderSection";
const AboutPage: React.FC = () => {
  const swiperRef = useRef<HTMLDivElement>(null);
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const goToSlide = (index: number): void => {
    setSlideIndex(index);
    if (swiperRef.current) {
      swiperRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <AboutHeroSection goToSlide={goToSlide} />
      <VisionSection />
      <MissionSection />
      <div ref={swiperRef}>
        <ZenithSection slideIndex={slideIndex} />
      </div>
      <ClientSection />
      <WorldSection />
      <FounderSection />
    </main>
  );
};

export default AboutPage;

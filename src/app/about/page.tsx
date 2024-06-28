import React from "react";
import Grid from "@/src/components/ui/Grid";
import MeetTheTeamSection from "@/src/components/AboutPage/MeetTheTeamSection";
import MissionSection from "@/src/components/AboutPage/MissionSection";
import AboutHeroSection from "@/src/components/AboutPage/AboutHeroSection";
import ZenithSection from "@/src/components/AboutPage/ZenithSection";
import ClientSection from "@/src/components/HomePage/ClientSection";
import VisionSection from "@/src/components/AboutPage/VisionSection";
import WorldSection from "@/src/components/AboutPage/WorldSection";

const AboutPage = () => {
  return (
    <main>
      <AboutHeroSection />
      <VisionSection />
      <MissionSection />
      <ZenithSection />
      <ClientSection />
      <WorldSection />
    </main>
  );
};

export default AboutPage;

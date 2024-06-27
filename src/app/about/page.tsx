import React from "react";
import Grid from "@/src/components/ui/Grid";
import MeetTheTeamSection from "@/src/components/AboutPage/MeetTheTeamSection";
import MissionSection from "@/src/components/AboutPage/MissionSection";
import AboutHeroSection from "@/src/components/AboutPage/AboutHeroSection";
import ZenithSection from "@/src/components/AboutPage/ZenithSection";
import ClientSection from "@/src/components/HomePage/ClientSection";
import VisionSection from "@/src/components/AboutPage/VisionSection";

const AboutPage = () => {
  return (
    <main>
      <AboutHeroSection />
      {/* <MeetTheTeamSection /> */}
      <VisionSection />
      <MissionSection />
      <ZenithSection />
      <ClientSection />
    </main>
  );
};

export default AboutPage;

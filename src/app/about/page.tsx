import React from "react";
import Grid from "@/src/components/ui/Grid";
import MeetTheTeamSection from "@/src/components/AboutPage/MeetTheTeamSection";
import MissionSection from "@/src/components/AboutPage/MissionSection";
import AboutHeroSection from "@/src/components/AboutPage/AboutHeroSection";
const AboutPage = () => {
  return (
    <main>
      <AboutHeroSection />
      <MissionSection />
      {/* <MeetTheTeamSection /> */}
    </main>
  );
};

export default AboutPage;

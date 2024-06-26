import React from "react";
import Grid from "@/src/components/ui/Grid";
import MeetTheTeamSection from "@/src/components/AboutPage/MeetTheTeamSection";
import ZenithSection from "@/src/components/AboutPage/ZenithSection";
import ClientSection from "@/src/components/HomePage/ClientSection";

const AboutPage = () => {
  return (
    <main>
      <Grid />
      {/* <MeetTheTeamSection /> */}
      <ZenithSection />
      <ClientSection />
    </main>
  );
};

export default AboutPage;

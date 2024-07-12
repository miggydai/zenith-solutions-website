// components/AboutHeroSection.tsx
"use client";

import React, { useRef, useState } from "react";
import Grid from "../ui/Grid";
import OutlinedHeader from "../ui/OutlinedHeader";

interface AboutHeroSectionProps {
  goToSlide: (index: number) => void;
}

const AboutHeroSection: React.FC<AboutHeroSectionProps> = ({ goToSlide }) => (
  <div className="flex flex-col justify-center items-center w-full h-full sm:p-10 px-2 py-10 space-y-10">
    <div className="flex flex-col justify-center items-center max-sm:w-[70%] w-full gap-8">
      <div className="w-full flex justify-center items-center">
        <OutlinedHeader
          label="Why Choose Zenith?"
          fontWeight="bold"
          textColor="orange"
          borderColor="orange"
        />
      </div>
      <h1 className="sm:text-6xl text-3xl font-bold text-skyBlue text-center font-montserrat">
        Rising Consulting Firm
      </h1>
      <p className="text-darkBlue font-light font-poppins text-center sm:text-base text-sm w-[75%]">
        With a focus on quality, integrity, and personalized service, we have
        established ourselves as a trusted partner for both clients and
        candidates alike. Our team of experienced recruiters is committed to
        delivering exceptional results and exceeding expectations every step of
        the way.
      </p>
    </div>
    <div className="p-2 w-full h-screen flex justify-center items-center">
      <Grid gotoSlide={goToSlide} />
    </div>
  </div>
);

export default AboutHeroSection;

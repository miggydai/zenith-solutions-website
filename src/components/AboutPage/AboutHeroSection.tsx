// components/AboutHeroSection.tsx
"use client";

import React, { useRef, useState } from "react";
import Grid from "../ui/Grid";
import OutlinedHeader from "../ui/OutlinedHeader";

interface AboutHeroSectionProps {
  goToSlide: (index: number) => void;
}

const AboutHeroSection: React.FC<AboutHeroSectionProps> = ({ goToSlide }) => (
  <div className="flex flex-col justify-center items-center w-full h-full p-10">
    <div className="flex flex-col justify-center items-center w-[70%] gap-8">
      <OutlinedHeader
        label="Why Choose Zenith?"
        fontWeight="bold"
        textColor="blue"
        borderColor="blue"
      />
      <h1 className="text-6xl font-bold text-blue-400">
        Rising Consulting Firm
      </h1>
      <p className="text-blue-800 text-center">
        With a focus on quality, integrity, and personalized service, we have
        established ourselves as a trusted partner for both clients and
        candidates alike. Our team of experienced recruiters is committed to
        delivering exceptional results and exceeding expectations every step of
        the way.
      </p>
    </div>
    <div className="p-12">
      <Grid gotoSlide={goToSlide} />
    </div>
  </div>
);

export default AboutHeroSection;

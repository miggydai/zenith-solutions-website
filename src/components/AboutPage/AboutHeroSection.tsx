import React from "react";
import Grid from "../ui/Grid";

const AboutHeroSection = () => {
  return (
    <div className="flex flex-col h-[100vh] p-10">
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-8  text-center w-1/2">
          <div className="flex justify-center items-center">
            <div className="w-[15rem] p-1 border-2 border-orange-300 rounded-2xl">
              <p className="text-orange-300 font-bold">Why choose Zenith?</p>
            </div>
          </div>
          <h1 className="text-7xl font-bold text-blue-400">
            Rising Consult Firm
          </h1>
          <p className="text-blue-800">
            With a focus on quality, integrity, and personalized service, we
            have established ourselves as a trusted partner for both clients and
            candidates alike. Our team of experienced recruiters is committed to
            delivering exceptional results and exceeding expectations every step
            of the way.
          </p>
        </div>
      </div>
      <div className="p-12">
        <Grid />
      </div>
    </div>
  );
};

export default AboutHeroSection;

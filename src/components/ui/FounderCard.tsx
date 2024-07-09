"use client";
import React from "react";

const FounderCard = () => {
  return (
    <div className="rounded-xl flex flex-col gap-10 bg-white p-10 shadow-2xl drop-shadow-2xl w-[70vw]">
      {/* Top section */}
      <div className="flex gap-10">
        {/* Picture */}
        
        {/* Deets */}
        <div className="flex flex-col gap-4 justify-center">
          <h1 className="md:text-5xl font-bold text-black font-montserrat max-md:text-xl ">
            Davinder Singh
          </h1>
          <p className="text-gray-300 font-poppins text-xs capitalize">
            Founder
          </p>
          
        </div>
      </div>
      {/* Long paragraph */}
      <div className="flex flex-col md:text-lg gap-10 text-black max-md:text-sm">
        <div className="flex flex-col gap-4">
          <p className="font-poppins">
            Davinder is the founder of Zenith Solutions LLC. He has over 20
            years of experience in finance, accounting and technology industry.
            He has been in Workday ecosystem more than 8 years. He started his
            Workday journey with Cushman and Wakefield and worked for a Workday
            partner firm. <br /> <br /> He has extensive experience in different
            Industries such as Retail, Real-estate, Utilities, Healthcare and
            Higher Education. He enjoys playing tennis and cricket. He is a
            great fan of Sachin Tendulkar, Roger Federer and Michal Schumacher.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FounderCard;

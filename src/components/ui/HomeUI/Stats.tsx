import React from "react";

const Stats = () => {
  return (
    <>
      {/* Out side container */}
      <div className="flex flex-col w-full gap-5 bg-white p-20">
        {/* Header */}
        <div className="text-center text-projectOrange">
          <p>We are on a quest to manifest ideas to reality</p>
        </div>
        {/* The stats */}
        <div className="flex justify-center gap-10 text-center">
          <div>
            <h3 className="sm:text-6xl text-3xl font-bold text-blue-600">
              100k
            </h3>
            <p className="text-black sm:text-base text-xs">
              Business transformed
            </p>
          </div>
          <div>
            <h3 className="sm:text-6xl text-3xl font-bold text-blue-600">12</h3>
            <p className="text-black sm:text-base text-xs">
              Years of experience
            </p>
          </div>
          <div>
            <h3 className="sm:text-6xl text-3xl font-bold text-blue-600">30</h3>
            <p className="text-black sm:text-base text-xs">Trusted partners</p>
          </div>
          <div>
            <h3 className="sm:text-6xl text-3xl font-bold text-blue-600">
              90%
            </h3>
            <p className="text-black sm:text-base text-xs">
              Satisfaction rating
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;

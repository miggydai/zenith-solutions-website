import React from "react";

const Stats = () => {
  return (
    <>
      {/* Out side container */}
      <div className="flex flex-col gap-5 bg-white">
        {/* Header */}
        <div className="text-center text-green-400">
          <p>We are on a quest to manifest ideas to reality</p>
        </div>
        {/* The stats */}
        <div className="flex justify-center gap-10 text-center">
          <div>
            <h3 className="text-6xl font-bold text-blue-600">100k</h3>
            <p className="text-black">Business transformed</p>
          </div>
          <div>
            <h3 className="text-6xl font-bold text-blue-600">12</h3>
            <p className="text-black">Years of experience</p>
          </div>
          <div>
            <h3 className="text-6xl font-bold text-blue-600">30</h3>
            <p className="text-black">Trusted partners</p>
          </div>
          <div>
            <h3 className="text-6xl font-bold text-blue-600">90%</h3>
            <p className="text-black">Satisfaction rating</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;

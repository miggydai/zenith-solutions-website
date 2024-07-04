"use client";

import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const AnimatedNumber = ({ number }) => {
  const [reset, setReset] = useState(false);

  const props = useSpring({
    from: { number: 0 },
    number: reset ? number : 0,
    delay: 200,
    config: { mass: 1, tension: 200, friction: 100 },
  });

  useEffect(() => {
    setReset(true);
  }, []);

  return <animated.div>{props.number.to(n => n.toFixed(0))}</animated.div>;
};

const Stats = () => {
  return (
    <>
      {/* Outside container */}
      <div className="flex flex-col w-full gap-5 bg-white p-20">
        {/* Header */}
        <div className="text-center text-projectOrange">
          <p>We are on a quest to manifest ideas to reality</p>
        </div>
        {/* The stats */}
        <div className="flex justify-center gap-10 text-center">
          <div>
            <h3 className="sm:text-6xl text-3xl font-bold text-blue-600 flex">
              <AnimatedNumber number={100} /><p>k</p>
            </h3>
            <p className="text-black sm:text-base text-xs">
              Business transformed
            </p>
          </div>
          <div>
            <h3 className="sm:text-6xl text-3xl font-bold text-blue-600">
              <AnimatedNumber number={12} />
            </h3>
            <p className="text-black sm:text-base text-xs">
              Years of experience
            </p>
          </div>
          <div>
            <h3 className="sm:text-6xl text-3xl font-bold text-blue-600">
              <AnimatedNumber number={30} />
            </h3>
            <p className="text-black sm:text-base text-xs">Trusted partners</p>
          </div>
          <div>
            <h3 className="sm:text-6xl text-3xl font-bold text-blue-600">
              <AnimatedNumber number={90} />
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

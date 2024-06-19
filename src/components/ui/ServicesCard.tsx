import React from "react";
import Image from "next/image";

const ServicesCard = () => {
  return (
    <div className="w-full flex h-screen bg-amber-600 flex-row justify-center items-center">
      <div className="w-[50%] h-[37rem] bg-blue-500 flex flex-row justify-center items-center">
        <div className="w-[40%] h-full bg-red-800"></div>
        <div className="w-[40%] h-full bg-green-800 mt-8"></div>
      </div>
      <div className="w-[50%] h-96 bg-slate-400 flex flex-col justify-center items-start p-16 gap-[1rem]">
        <h6>services</h6>
        <h2>Tailored Solutions</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;

import React from "react";
import imgsrc from "@/public/assets/images/gridasset1.jpg";
import Image from "next/image";
const Grid = () => {
  return (
    <div>
      <div className="grid grid-cols-5 grid-rows-2 gap-4 p-4">
        <div className="grid grid-rows-2 row-span-2 gap-4">
          <div className="bg-yellow-200 rounded-2xl flex text-black flex-col justify-between p-5 font-bold">
            <div>
              <p>Project Ready</p>
            </div>
            <div>
              <p className="text-5xl">10k</p>
            </div>
          </div>
          <div className="w-full">
            <Image src={imgsrc} alt="grid1" className="rounded-2xl" />
          </div>
        </div>

        <div className="col-span-2 row-span-2 ">
          <Image src={imgsrc} alt="grid1" className="rounded-2xl" />
        </div>

        <div className="col-span-2">
          <div className="w-full h-full flex items-center justify-center bg-green-700 rounded-2xl">
            <p className="font-bold ">650x211 Picture</p>
          </div>
        </div>
        <div className="grid grid-cols-2 col-span-2 gap-4">
          <div className="bg-blue-400 rounded-2xl flex text-white flex-col justify-between p-5 font-bold">
            <div>
              <p>Years of Experience</p>
            </div>
            <div className="text-5xl">+12Years</div>
          </div>
          <div className="bg-red-700 flex justify-center items-center font-bold rounded-2xl">
            252x188 Picture
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;

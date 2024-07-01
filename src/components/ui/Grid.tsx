'use client';

import React from 'react';
import imgsrc from '@/public/assets/images/gridasset1.jpg';
import Image from 'next/image';

interface Props {
  gotoSlide: (index: number) => void;
}

const Grid: React.FC<Props> = ({ gotoSlide }) => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
      <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-4">
  <div
    className="bg-yellow-200 rounded-2xl flex text-black flex-col justify-between p-5 font-bold"
    onClick={() => gotoSlide(0)}
  >
    <div>
      <p>Project Ready</p>
    </div>
    <div>
      <p className="text-5xl">10k</p>
    </div>
  </div>
  <div className="w-full" onClick={() => gotoSlide(1)}>
    <Image src={imgsrc} alt="grid1" className="rounded-2xl" />
  </div>
</div>


        <div className="col-span-2 row-span-2" onClick={() => gotoSlide(2)}>
          <Image src={imgsrc} alt="grid1" className="rounded-2xl" />
        </div>

        <div className="col-span-2">
          <div
            className="w-full h-full flex items-center justify-center bg-green-700 rounded-2xl"
            onClick={() => gotoSlide(3)}
          >
            <p className="font-bold">650x211 Picture</p>
          </div>
        </div>

        <div className="grid grid-cols-2 col-span-2 gap-4">
          <div
            className="bg-blue-400 rounded-2xl flex text-white flex-col justify-between p-5 font-bold"
            onClick={() => gotoSlide(4)}
          >
            <div>
              <p>Years of Experience</p>
            </div>
            <div className="text-5xl">+12 Years</div>
          </div>
          <div
            className="bg-red-700 flex justify-center items-center font-bold rounded-2xl"
            onClick={() => gotoSlide(5)}
          >
            252x188 Picture
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;

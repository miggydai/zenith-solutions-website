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
      <div className="grid md:grid-rows-2 md:row-span-2 gap-4 max-md:grid-cols-2 max-md:col-span-2">
      <div
  className="relative group bg-yellow-200 rounded-2xl flex text-black flex-col justify-between p-5 font-bold transition ease-out duration-600"
  onClick={() => gotoSlide(0)}
>
  <div>
    <p>Project Ready</p>
  </div>
  <div>
    <p className="text-5xl">10k</p>
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-orange-500 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition ease-out duration-600 rounded-2xl">
    <p className="text-orange-900 text-6xl">Zeal</p>
  </div>
</div>

<div className="relative group w-full" onClick={() => gotoSlide(1)}>
  <Image src={imgsrc} alt="grid1" className="rounded-2xl" />

 
  <div className="absolute inset-0 bg-purple-300 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition ease-out duration-600 rounded-2xl">
    <p className="text-purple-900 text-4xl font-bold">Existence</p>
  </div>
</div>
</div>


<div className="relative group col-span-2 row-span-2" onClick={() => gotoSlide(2)}>
  <Image src={imgsrc} alt="grid1" className="rounded-2xl" />

  
  <div className="absolute inset-0 bg-green-500 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition ease-out duration-600 rounded-2xl">
    <p className="text-green-900 text-6xl font-bold">Nature</p>
  </div>
</div>


        <div className="col-span-2">
            <div
      className="relative group w-full h-full flex items-center justify-center bg-green-700 rounded-2xl"
      onClick={() => gotoSlide(3)}
    >
      <p className="font-bold">650x211 Picture</p>

      
      <div className="absolute inset-0 bg-sky-500 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition ease-out duration-600 rounded-2xl">
        <p className="text-sky-900 text-6xl font-bold">Idea</p>
      </div>
</div>

        </div>

        <div className="grid grid-cols-2 col-span-2 gap-4">
        <div
  className="relative group bg-blue-400 rounded-2xl flex text-white flex-col justify-between p-5 font-bold"
  onClick={() => gotoSlide(4)}
>
  <div>
    <p>Years of Experience</p>
  </div>
  <div className="text-5xl">+12 Years</div>

  
  <div className="absolute inset-0 bg-red-500 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition ease-out duration-600 rounded-2xl">
    <p className="text-red-900 text-3xl font-bold">Transformation</p>
  </div>
</div>

<div
  className="relative group bg-red-700 flex justify-center items-center font-bold rounded-2xl"
  onClick={() => gotoSlide(5)}
>
  252x188 Picture

 
  <div className="absolute inset-0 bg-blue-500 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition ease-out duration-600 rounded-2xl">
    <p className="text-blue-900 text-5xl font-bold">Hope</p>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Grid;

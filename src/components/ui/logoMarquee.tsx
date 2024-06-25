import React from "react";

import Image from "next/image";

import imgSrc1 from "@/public/assets/images/DocGo.jpeg";
import imgSrc2 from "@/public/assets/images/Ensign2023-logo5.png";
import imgSrc3 from "@/public/assets/images/Howard-University-Logo.png";
import imgSrc4 from "@/public/assets/images/JH_2C.png";
import imgSrc5 from "@/public/assets/images/MUSC-logo.png";
import imgSrc6 from "@/public/assets/images/cushmanwakefield.png";
import imgSrc7 from "@/public/assets/images/logo_reeds_transparent.png";
import imgSrc8 from "@/public/assets/images/mercyhealth.png";
import imgSrc9 from "@/public/assets/images/seculogo.png";
import imgSrc10 from "@/public/assets/images/sji-logo.png";
import imgSrc11 from "@/public/assets/images/tidalwave.png";
import imgSrc12 from "@/public/assets/images/thomas jefferson university.png";

const logo = [
  imgSrc1,
  imgSrc2,
  imgSrc3,
  imgSrc4,
  imgSrc5,
  imgSrc6,
  imgSrc7,
  imgSrc8,
  imgSrc9,
  imgSrc10,
  imgSrc11,
  imgSrc12,
];

const LogoMarquee: React.FC = () => {
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="relative flex overflow-x-hidden">
        <div className="flex flex-row justify-center items-center py-16 animate-marquee bg-slate-200">
          {logo.map((logos, index) => (
            <div
              key={index}
              className="relative mx-[2rem] w-[10rem] h-[2rem] inline-flex justify-center items-center"
            >
              <Image
                src={logos}
                alt="picture"
                className="absolute object-cover"
                draggable={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-row py-16 animate-marquee bg-yellow-400">
          {logo.map((logos, index) => (
            <div
              key={index}
              className="relative mx-[2rem] w-[10rem] h-[2rem] inline-flex justify-center items-center"
            >
              <Image
                src={logos}
                alt="picture"
                className="absolute object-cover"
                draggable={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;

import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Circle from "../Circle";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

const boxVariants = cva(
  [
    "sm:w-[180px] sm:h-[180px] w-[100px] h-[100px] rounded-[66px] relative flex justify-center items-center",
  ],
  {
    variants: {
      bgColor: {
        orange: "bg-[#FFF0E3]",
        green: "bg-[#E2FFE1]",
        red: "bg-[#FFD4D1]",
        lightBlue: "bg-[#E3FCF8]",
        normalBlue: "bg-[#D2E3FD]",
        gray: "bg-[#E6E3FC]",
      },
    },
  }
);

type containerProps = {
  imgSrc: StaticImageData;
  iconSrc: StaticImageData;
  value: string;
  description: string;
  bgColor: string;
} & VariantProps<typeof boxVariants>;

const ZenithContainer: React.FC<containerProps> = ({
  imgSrc,
  iconSrc,
  value,
  description,
  bgColor,
}) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative overflow-hidden 2xl:space-y-12 lg:space-y-4 space-y-2">
      <div className="absolute sm:w-48 sm:h-48 w-24 h-24 top-[10%] right-[-5%]">
        <Circle color="orange" />
      </div>
      <div className="absolute sm:w-24 w-10 sm:h-24 h-10 top-[50%] sm:right-[20%] right-[10%]">
        <Circle color="orange" />
      </div>
      <div className="absolute w-12 h-12 bottom-[10%] sm:right-[8%] right-[5%]">
        <Circle color="orange" />
      </div>
      <div className="absolute sm:w-48 sm:h-48 w-24 h-24 bottom-[10%] left-[-5%]">
        <Circle color="orange" />
      </div>
      <div className="absolute sm:w-28 sm:h-28 w-16 h-16 top-[10%] left-[5%]">
        <Circle color="orange" />
      </div>
      <div className="absolute w-16 h-16 top-[50%] left-[20%]">
        <Circle color="orange" />
      </div>
      <h4 className="text-black font-poppins uppercase tracking-widest">
        what we value in{" "}
      </h4>
      <div className="relative sm:w-[60%] w-[90%] sm:h-[10rem] h-[5rem]">
        <Image
          src={imgSrc}
          alt="zenith image"
          className="absolute object-cover"
          placeholder="blur"
          draggable={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={boxVariants({ bgColor })}>
        <Image
          src={iconSrc}
          alt="icon"
          className="absolute object-cover w-[80%] h-[80%]"
          draggable={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          unoptimized
        />
      </div>
      <h1 className="sm:text-2xl text-lg tracking-widest uppercase mt-4 font-poppins text-black">
        {value}
      </h1>

      <div className="sm:w-[40%] w-[80%] sm:mt-8 mt-4">
        <p className="text-wrap text-center text-slate-400 font-poppins">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ZenithContainer;

import React from "react";
import Image from "next/image";
import { ServiceType } from "@/lib/types/serviceTypes";

type CardProps = {
  visions: ServiceType;
};

const VisionCard: React.FC<CardProps> = ({ visions }) => {
  return (
    <div className="sm:w-[285px] w-full h-[343px] bg-lightGray flex sm:flex-col flex-row justify-center items-center py-2 px-3 rounded-2xl shadow-md gap-2">
      <div className="sm:w-full w-[30%] h-auto flex sm:justify-end justify-center items-start">
        <div className="relative sm:w-[84px] w-[150px] sm:h-[84px] h-[150px]">
          <Image
            src={visions.iconUrl}
            alt="icon"
            className="absolute object-cover"
            draggable={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      </div>

      <div className="w-full flex flex-col gap-2">
        <h4 className="font-bold capitalize text-black">{visions.title}</h4>
        <p className="text-sm text-black">{visions.description}</p>
      </div>
    </div>
  );
};

export default VisionCard;

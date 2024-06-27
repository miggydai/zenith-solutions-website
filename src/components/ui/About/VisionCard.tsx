import React from "react";
import Image from "next/image";
import { ServiceType } from "@/lib/types/serviceTypes";

type CardProps = {
  visions: ServiceType;
};

const VisionCard: React.FC<CardProps> = ({ visions }) => {
  return (
    <div className="w-[285px] h-[343px] bg-lightGray flex flex-col py-2 px-3 rounded-2xl shadow-md">
      <div className="w-full h-24 flex justify-end items-center">
        <div className="relative w-[84px] h-[84px]">
          <Image
            src={visions.iconUrl}
            alt="icon"
            className="absolute object-cover"
            draggable={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="w-full h-full flex flex-col gap-2">
        <h4 className="font-bold capitalize text-black">{visions.title}</h4>
        <p className="text-sm text-black">{visions.description}</p>
      </div>
    </div>
  );
};

export default VisionCard;

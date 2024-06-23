import React from "react";
import Image from "next/image";
import imgSrc from "@/public/assets/images/map.png";

const MeetTheTeamSection = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[80%] h-[80vh] relative">
        <Image
          src={imgSrc}
          alt="world png"
          className="object-cover absolute"
          placeholder="blur"
          draggable={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default MeetTheTeamSection;

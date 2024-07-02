import React from "react";
import Image from "next/image";
import circle from "@/public/assets/images/circol.svg";
import circle2 from "@/public/assets/images/circol2.svg";

type circleProps = {
  color: string;
};

const Circle: React.FC<circleProps> = ({ color }) => {
  return (
    <>
      {color == "orange" ? (
        <Image
          src={circle}
          alt="circle"
          className="object-cover"
          draggable={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
        />
      ) : (
        <Image
          src={circle2}
          alt="circle"
          className="object-cover"
          draggable={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
        />
      )}
    </>
  );
};

export default Circle;

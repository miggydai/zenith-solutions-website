import React from "react";
import Image from "next/image";
import { ServiceType } from "@/lib/types/serviceTypes";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

const cardVariants = cva(
  [
    "sm:w-[254px] sm:h-[349px] w-[190px] h-[294px] rounded-lg flex flex-col justify-start items-center sm:py-12 py-6 sm:px-8 px-4",
  ],
  {
    variants: {
      cardColor: {
        orange: "bg-orange-500",
        tan: "bg-tan",
        blue: "bg-blue-700",
      },
    },
  }
);

type CardProps = {
  service: ServiceType;
  cardColor: String;
} & VariantProps<typeof cardVariants>;

const IconCard: React.FC<CardProps> = ({ service, cardColor }) => {
  return (
    <div className={cardVariants({ cardColor })}>
      <div className="mb-4 relative sm:w-16 sm:h-16 w-8 h-8">
        <Image
          src={service.iconUrl}
          alt="git animation"
          className="absolute object-cover"
          draggable={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
        />
      </div>
      <h3 className="text-left mb-5 sm:text-xl text-md font-bold">
        {service.title}
      </h3>
      <p className="text-xs font-light tracking-wide">{service.description}</p>
    </div>
  );
};

export default IconCard;

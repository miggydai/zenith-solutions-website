import React from "react";
import Image from "next/image";
import { ServiceType } from "@/lib/types/serviceTypes";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

const cardVariants = cva(
  [
    "sm:w-[254px] sm:h-[369px] w-[210px] h-[294px] rounded-lg flex flex-col justify-start items-center sm:py-10 py-6 sm:px-8 px-4",
  ],
  {
    variants: {
      cardColor: {
        orange:
          " bg-gradient-to-b from-projectOrangeSgradient to-projectOrange",
        tan: "bg-gradient-to-b from-tan to-tanSgradient",
        blue: "bg-gradient-to-b from-aquaBlueSgradient to-blue-700",
      },
    },
  }
);

const titleVariants = cva(
  [
    "text-left mb-5 sm:text-xl text-sm font-semibold capitalize font-montserrat",
  ],
  {
    variants: {
      titleColor: {
        white: "text-white",
        black: "text-black",
      },
    },
  }
);

const pVariants = cva(["text-xs font-light tracking-wide font-poppins"], {
  variants: {
    pColor: {
      white: "text-white",
      black: "text-black",
    },
  },
});

type CardProps = {
  service: ServiceType;
  cardColor: string;
  titleColor: string;
  pColor: string;
} & VariantProps<typeof cardVariants> &
  VariantProps<typeof titleVariants> &
  VariantProps<typeof pVariants>;

const IconCard: React.FC<CardProps> = ({
  service,
  cardColor,
  titleColor,
  pColor,
}) => {
  return (
    <div className={cardVariants({ cardColor })}>
      <div className="mb-4 relative sm:w-16 sm:h-16 w-10 h-10">
        <Image
          src={service.iconUrl}
          alt="gif animation"
          className="absolute object-cover"
          draggable={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          priority
          unoptimized
        />
      </div>
      <h3 className={titleVariants({ titleColor })}>{service.title}</h3>
      <p className={pVariants({ pColor })}>{service.description}</p>
    </div>
  );
};

export default IconCard;

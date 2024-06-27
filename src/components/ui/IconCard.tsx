import React from "react";
import Image from "next/image";
import { ServiceType } from "@/lib/types/serviceTypes";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

const cardVariants = cva(
  [
    "sm:w-[254px] sm:h-[349px] w-[190px] h-[294px] rounded-lg flex flex-col justify-start items-center sm:py-10 py-6 sm:px-8 px-4",
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

const titleVariants = cva(["text-left mb-5 sm:text-xl text-md font-bold"], {
  variants: {
    titleColor: {
      white: "text-white",
      black: "text-black",
    },
  },
});

const pVariants = cva(["text-xs font-light tracking-wide"], {
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
      <div className="mb-4 relative sm:w-16 sm:h-16 w-8 h-8">
        <Image
          src={service.iconUrl}
          alt="gif animation"
          className="absolute object-cover"
          draggable={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
        />
      </div>
      <h3 className={titleVariants({ titleColor })}>{service.title}</h3>
      <p className={pVariants({ pColor })}>{service.description}</p>
    </div>
  );
};

export default IconCard;

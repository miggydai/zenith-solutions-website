import React from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

const headerVariants = cva(
  ["text-4xl text-center font-bold font-montserrat capitalize"],
  {
    variants: {
      color: {
        skyBlue: "text-skyBlue",
        orange: "text-projectOrange",
        black: "text-black",
      },
    },
  }
);

type props = {
  header: string;
  color: string;
} & VariantProps<typeof headerVariants>;

const SectionHeader: React.FC<props> = ({ header, color }) => {
  return <h2 className={headerVariants({ color })}>{header}</h2>;
};

export default SectionHeader;

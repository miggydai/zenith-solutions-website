import React from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

const headerVariants = cva(
  [
    "sm:w-[11rem] sm:h-8 w-[9rem] h-7 sm:text-[.8rem] text-[.7rem] rounded-full border border-orange-900 flex justify-center items-center p-4 capitalize mt-5",
  ],
  {
    variants: {
      color: {
        white: "border-white",
        blue: "border-blue-900",
      },
    },
  }
);

type headerProps = {
  label: string;
  weight: string;
  color: string;
} & VariantProps<typeof headerVariants>;

const OutlinedHeader: React.FC<headerProps> = ({ label, color, weight }) => {
  return <div className={headerVariants({ color })}>{label}</div>;
};

export default OutlinedHeader;

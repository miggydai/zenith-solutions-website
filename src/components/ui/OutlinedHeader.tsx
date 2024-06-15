import React from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

const headerVariants = cva(
  [
    "w-[13rem] h-9 text-[.9rem] rounded-full border border-orange-900 flex justify-center items-center p-4 capitalize mt-5",
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

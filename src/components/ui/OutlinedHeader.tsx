import React from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

const headerVariants = cva(
  [
    "sm:w-[11rem] sm:h-8 w-[10rem] h-7 sm:text-[.8rem] text-[.7rem] rounded-full border flex justify-center items-center p-4 capitalize mt-5",
  ],
  {
    variants: {
      borderColor: {
        white: "border-white",
        blue: "border-blue-900",
        orange: "border-projectOrange",
        black: "border-black",
      },
      textColor: {
        white: "text-white",
        blue: "text-blue-900",
        orange: "text-projectOrange",
        black: "text-black",
      },
      fontWeight: {
        normal: "font-normal",
        bold: "font-bold",
      },
    },
  }
);

type headerProps = {
  label: string;
  fontWeight?: string;
  textColor?: string;
  borderColor?: string;
} & VariantProps<typeof headerVariants>;

const OutlinedHeader: React.FC<headerProps> = ({
  label,
  borderColor,
  fontWeight,
  textColor,
}) => {
  return (
    <div className={headerVariants({ borderColor, fontWeight, textColor })}>
      {label}
    </div>
  );
};

export default OutlinedHeader;

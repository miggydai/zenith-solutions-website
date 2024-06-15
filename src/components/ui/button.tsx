import React from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  [
    "w-40 h-9 rounded-full inline-flex justify-center items-center px-18 transition ease-in-out duration-150 cursor-pointer capitalize",
  ],
  {
    variants: {
      color: {
        blue: "bg-blue-700 hover:bg-blue-500",
        darkblue: "bg-blue-900 hover:bg-blue-500",
      },
    },
  }
);

type buttonProps = {
  label: string;
  color: string;
} & VariantProps<typeof buttonVariants>;

const Button: React.FC<buttonProps> = ({ label, color }) => {
  return <div className={buttonVariants({ color })}>{label}</div>;
};

export default Button;

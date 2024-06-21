"use client";

import React from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";

const buttonVariants = cva(
  [
    "sm:w-[10rem] sm:h-9 w-[5] h-4 sm:text-base text-sm rounded-full inline-flex justify-center items-center p-4 transition ease-in-out duration-150 cursor-pointer capitalize",
  ],
  {
    variants: {
      color: {
        aquaBlue: "bg-aquaBlue",
        smthGreen: "bg-smthGreen",
      },
    },
  }
);

type buttonProps = {
  label: string;
  color: string;
} & VariantProps<typeof buttonVariants>;

const Button: React.FC<buttonProps> = ({ label, color }) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
      whileTap={{ scale: 0.8 }}
      className={buttonVariants({ color })}
    >
      {label}
    </motion.div>
  );
};

export default Button;

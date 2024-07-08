"use client";

import React from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
import Link from "next/link";

const buttonVariants = cva(
  [
    "sm:w-[10rem] sm:h-9 w-[6rem] h-4 sm:text-base font-montserrat text-xs rounded-full inline-flex justify-center items-center p-4 transition ease-in-out duration-150 cursor-pointer capitalize",
  ],
  {
    variants: {
      color: {
        skyBlue: "bg-skyBlue",
        white: "bg-white",
      },
      textColor: {
        white: "text-white",
        darkBlue: "text-darkBlue",
      },
      textFont: {
        bold: "font-bold",
        normal: "font-normal",
      },
    },
  }
);

type buttonProps = {
  label: string;
  color: string;
  href: string;
  textColor: string;
  textFont: string;
} & VariantProps<typeof buttonVariants>;

const Button: React.FC<buttonProps> = ({
  label,
  color,
  href,
  textColor,
  textFont,
}) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      className={buttonVariants({ color, textColor, textFont })}
    >
      <Link href={href} className="font-montserrat">
        {label}
      </Link>
    </motion.div>
  );
};

export default Button;

"use client";

import React from "react";
import OutlinedHeader from "@/src/components/ui/OutlinedHeader";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";

const infoCardVariants = cva(
  [
    "2xl:w-[44.688rem] 2xl:h-[29.25rem] md:w-[34rem] md:h-[19rem] sm:w-[22rem] sm:h-[12rem] rounded-xl flex flex-col justify-center items-start text-white sm:p-16 p-10 gap-[1rem]",
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

type infoCardProps = {
  color: string;
} & VariantProps<typeof infoCardVariants>;

const InfoCard: React.FC<infoCardProps> = ({ color }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
        },
      }}
      className={infoCardVariants({ color })}
    >
      <OutlinedHeader label="why choose zenith?" color="white" weight="" />

      <h2 className="2xl:text-4xl lg:text-2xl font-bold capitalize">
        Hire great talent with the right attitude
      </h2>

      <p className="2xl:text-sm md:text-xs text-xs">
        Selecting the right partner in business can make a difference. We, at
        Zenith Solutions, are committed to providing remarkable Workday
        consulting services tailored to the client’s need. With our proven track
        record, comprehensive approach, and expertise of top-tier advisors,
        choosing Zenith means partnering with a trusted team dedicated to your
        success.
      </p>
    </motion.div>
  );
};

export default InfoCard;

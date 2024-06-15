import React from "react";
import OutlinedHeader from "@/src/components/ui/OutlinedHeader";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

const infoCardVariants = cva(
  [
    "w-[44.688rem] h-[29.25rem] rounded-xl flex flex-col justify-center items-start p-16 gap-[2rem]",
  ],
  {
    variants: {
      color: {
        blue: "bg-blue-700",
        darkblue: "bg-blue-900",
      },
    },
  }
);

type infoCardProps = {
  color: string;
} & VariantProps<typeof infoCardVariants>;

const InfoCard: React.FC<infoCardProps> = ({ color }) => {
  return (
    <div className={infoCardVariants({ color })}>
      <OutlinedHeader label="why choose zenith?" color="white" weight="" />

      <h2 className="text-4xl font-bold capitalize">
        Hire great talent with the right attitude
      </h2>

      <p className="text-sm">
        Selecting the right partner in business can make a difference. We, at
        Zenith Solutions, are committed to providing remarkable Workday
        consulting services tailored to the client’s need. With our proven track
        record, comprehensive approach, and expertise of top-tier advisors,
        choosing Zenith means partnering with a trusted team dedicated to your
        success.
      </p>
    </div>
  );
};

export default InfoCard;

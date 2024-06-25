import React from "react";
import OutlinedHeader from "../OutlinedHeader";

type HeaderProps = {
  title: string;
  description: string;
  label: string;
};

const ServicesHeader: React.FC<HeaderProps> = ({
  title,
  description,
  label,
}) => {
  return (
    <div className="sm:w-[50%] w-full h-[300px] flex flex-col justify-center items-center sm:gap-5 gap-3 sm:p-8 p-4">
      <OutlinedHeader
        label={label}
        borderColor="blue"
        fontWeight="bold"
        textColor="blue"
      />
      <h3 className="text-black sm:text-2xl text-lg text-center font-bold">
        {title}
      </h3>
      <p className="text-black sm:text-sm text-xs text-center">{description}</p>
    </div>
  );
};

export default ServicesHeader;

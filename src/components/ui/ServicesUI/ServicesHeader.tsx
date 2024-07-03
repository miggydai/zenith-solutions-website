import React from "react";
import OutlinedHeader from "../OutlinedHeader";

type HeaderProps = {
  title: string;
  description: string;
  label: string;
  borderColor: string;
  textColor: string;
  fontWeight: string;
};

const ServicesHeader: React.FC<HeaderProps> = ({
  title,
  description,
  label,
  borderColor,
  textColor,
  fontWeight,
}) => {
  return (
    <div className="sm:w-[50%] w-[90%] h-[300px] flex flex-col justify-center items-center sm:gap-5 gap-3 sm:p-8 p-4 z-10">
      <OutlinedHeader
        label={label}
        borderColor={borderColor}
        fontWeight={fontWeight}
        textColor={textColor}
      />
      <h3 className="sm:text-2xl text-lg text-center font-bold capitalize text-darkBlue font-montserrat">
        {title}
      </h3>
      <p className="text-black sm:text-sm text-xs text-center font-montserrat">
        {description}
      </p>
    </div>
  );
};

export default ServicesHeader;

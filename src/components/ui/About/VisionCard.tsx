import React from "react";

type CardProps = {};

const VisionCard = () => {
  return (
    <div className="w-[285px] h-[343px] bg-lightGray flex flex-col py-2 px-3 rounded-2xl shadow-md">
      <div className="w-full h-24 flex justify-end items-center">
        <div className="relative w-[84px] h-[84px] bg-purple-600"></div>
      </div>

      <div className="w-full h-full flex flex-col gap-2">
        <h4 className="font-bold capitalize text-black">
          Customized Solutions
        </h4>
        <p className="text-sm text-black">
          We understand that every client is unique, which is why we tailor our
          services to meet your specific needs and objectives. Whether you;re a
          small startup or a large corporation, we have the expertise and
          flexibility to deliver the right solutions for you.
        </p>
      </div>
    </div>
  );
};

export default VisionCard;

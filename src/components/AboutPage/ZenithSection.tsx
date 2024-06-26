"use client";

import React from "react";
import ZenithContainer from "../ui/About/ZenithContainer";
import { valuesData } from "@/src/data/CoreValuesData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const ZenithSection = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center cursor-grab">
      <Swiper loop={true} modules={[Pagination]} className="mySwiper">
        {valuesData.map((value, index) => (
          <SwiperSlide key={index}>
            <ZenithContainer
              imgSrc={value.imageUrl}
              iconSrc={value.iconUrl}
              value={value.value}
              description={value.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ZenithSection;

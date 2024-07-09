"use client";

import React, { useRef, useEffect } from "react";
import ZenithContainer from "../ui/AboutUI/ZenithContainer";
import { valuesData } from "@/src/data/CoreValuesData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
interface SwiperComponentProps {
  slideIndex: number;
}
// eslint-disable-next-line react/display-name
const ZenithSection = React.forwardRef<HTMLDivElement, SwiperComponentProps>(
  ({ slideIndex }, ref) => {
    const swiperRef = useRef<any>(null);

    useEffect(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideTo(slideIndex);
      }
    }, [slideIndex]);
    return (
      <div
        ref={ref}
        className="w-full h-screen flex justify-center items-center cursor-grab"
      >
        <Swiper
          loop={true}
          autoplay={{
            delay: 6500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          ref={swiperRef}
        >
          {valuesData.map((value, index) => (
            <SwiperSlide key={index}>
              <ZenithContainer
                bgColor={
                  value.color as
                    | "orange"
                    | "gray"
                    | "green"
                    | "lightBlue"
                    | "red"
                    | "normalBlue"
                }
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
  }
);

export default ZenithSection;

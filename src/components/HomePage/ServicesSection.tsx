"use client";

import React from "react";
import ServicesCard from "@/src/components/ui/ServicesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const ServicesSection = () => {
  return (
    <div className="w-full h-screen">
      <ServicesCard />
      {/* <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination]}
        className="mySwiper h-screen"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper> */}
    </div>
  );
};

export default ServicesSection;

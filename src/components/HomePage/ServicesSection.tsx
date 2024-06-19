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
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination]}
        className="mySwiper h-screen"
      >
        <SwiperSlide>
          <ServicesCard />
        </SwiperSlide>
        <SwiperSlide>
          <ServicesCard />
        </SwiperSlide>
        <SwiperSlide>
          <ServicesCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ServicesSection;

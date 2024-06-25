"use client";

import React from "react";
import Image from "next/image";
import ServicesComponent from "@/src/components/ui/Home/ServicesComponent";
import imgSrc from "@/public/assets/images/asset1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const ServicesSection = () => {
  return (
    <div className="w-full h-screen flex justify-evenly items-center bg-lightGray">
      <div className="w-[6.5rem] h-[13rem] relative">
        <Image
          src={imgSrc}
          alt="icon"
          className="object-fill absolute"
          draggable={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
        />
      </div>
      <div className="w-[60rem] h-screen">
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
            <ServicesComponent />
          </SwiperSlide>
          <SwiperSlide>
            <ServicesComponent />
          </SwiperSlide>
          <SwiperSlide>
            <ServicesComponent />
          </SwiperSlide>
        </Swiper>
      </div>
      <div>.</div>
    </div>
  );
};

export default ServicesSection;

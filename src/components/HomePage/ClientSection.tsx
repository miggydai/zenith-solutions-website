"use client";

import React from "react";
import ClientStories from "../ui/ClientStoriesContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const ClientSection = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-start">
      <div className="w-[72rem] h-[60vh]">
        <Swiper
          loop={true}
          modules={[Pagination]}
          className="mySwiper w-full h-[60vh]"
        >
          <SwiperSlide>
            {" "}
            <ClientStories />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ClientStories />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ClientStories />{" "}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ClientSection;

"use client";

import React from "react";
import ClientStories from "../ui/ClientStoriesContainer";
import SectionHeader from "../ui/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const ClientSection = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-start">
      <div className="mx-7 mb-5">
        <SectionHeader header="Listen to our clients' stories" />
      </div>

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

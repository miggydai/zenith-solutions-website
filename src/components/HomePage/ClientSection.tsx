"use client";

import React from "react";
import ClientStories from "../ui/ClientStoriesContainer";
import SectionHeader from "../ui/SectionHeader";
import Image from "next/image";
import { motion } from "framer-motion";
import dots from "@/public/assets/images/dots&circle2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const ClientSection = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-start gap-3 ">
      <div className="w-full flex justify-center">
        <SectionHeader header="Listen to our clients' stories" />
      </div>

      <div className="flex flex-row w-full h-[60vh]">
        <div className="w-[85%] h-[60vh]">
          <Swiper
            loop={true}
            modules={[Pagination]}
            className="mySwiper w-full h-[70vh]"
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

        <div className="w-[15%] h-full flex justify-center items-center p-4">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 1,
              transition: {
                type: "spring",
                bounce: 0.1,
              },
            }}
            className="relative w-[90%] h-full"
          >
            <Image
              src={dots}
              alt="asset"
              className="object-cover absolute"
              placeholder="blur"
              draggable={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;

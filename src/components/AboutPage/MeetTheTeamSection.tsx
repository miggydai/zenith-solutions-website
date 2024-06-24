"use client";

import React from "react";
import Image from "next/image";
import imgSrc from "@/public/assets/images/map.png";
import map1 from "@/public/assets/images/map1.png";
import map2 from "@/public/assets/images/map2.png";
import map3 from "@/public/assets/images/map3.png";
import useMediaQuery from "@/src/hooks/useMediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const MeetTheTeamSection = () => {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {matches ? (
        <div className="w-full h-[80vh] relative">
          <Image
            src={imgSrc}
            alt="world png"
            className="object-cover absolute"
            placeholder="blur"
            draggable={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="bg-red-500 w-5 h-5 rounded-full absolute top-20 left-44"></div>
        </div>
      ) : (
        <div className="w-[80%] h-[80vh] flex justify-center items-center">
          <Swiper
            loop={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper w-full h-[60vh]"
          >
            <SwiperSlide>
              {" "}
              <div className="w-full h-[80vh] relative">
                <Image
                  src={map1}
                  alt="world png"
                  className="object-cover absolute "
                  placeholder="blur"
                  draggable={false}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>{" "}
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[80vh] relative">
                <Image
                  src={map2}
                  alt="world png"
                  className="object-cover absolute "
                  placeholder="blur"
                  draggable={false}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[80vh] relative">
                <Image
                  src={map3}
                  alt="world png"
                  className="object-cover absolute "
                  placeholder="blur"
                  draggable={false}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default MeetTheTeamSection;

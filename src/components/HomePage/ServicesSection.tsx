"use client";

import React from "react";
import Image from "next/image";
import ServicesComponent from "@/src/components/ui/HomeUI/ServicesComponent";
import { services } from "@/src/data/ServicesData";
import MobileServicesComponent from "../ui/HomeUI/MobileServicesComponent";

import useMediaQuery from "@/src/hooks/useMediaQuery";
import imgSrc from "@/public/assets/images/serviceCircle2.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const ServicesSection = () => {
  const matches = useMediaQuery("(min-width: 821px)");
  return (
    <div className="w-full sm:h-screen h-full flex sm:justify-evenly justify-center items-center bg-lightGray">
      {matches ? (
        <>
          <div className="w-[6.5rem] h-[13rem] relative xl:flex hidden">
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
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <ServicesComponent
                    title={service.title}
                    description={service.description}
                    img1={service.leftImages[0]}
                    img2={service.leftImages[1]}
                    img3={service.rightImages[0]}
                    img4={service.rightImages[1]}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      ) : (
        <>
          <div className="w-full h-full">
            <Swiper
              pagination={{
                clickable: true,
              }}
              loop={true}
              modules={[Pagination]}
              className="mySwiper h-full"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <MobileServicesComponent
                    title={service.title}
                    description={service.description}
                    img1={service.leftImages[0]}
                    img2={service.leftImages[1]}
                    img3={service.rightImages[0]}
                    img4={service.rightImages[1]}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      )}
    </div>
  );
};

export default ServicesSection;

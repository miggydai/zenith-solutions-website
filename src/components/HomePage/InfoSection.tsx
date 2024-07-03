"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import InfoCard from "@/src/components/ui/HomeUI/InfoCard";
import Circle from "../ui/Circle";
import imgSrc from "@/public/assets/images/sample.png";

const InfoSection = () => {
  return (
    <div className="w-full h-full flex flex-col gap-5 pb-3 relative overflow-hidden mt-3">
      {/* ---------------------Circols----------------------- */}
      <div className="w-36 h-36 absolute -bottom-16">
        <Circle color="orange" />
      </div>
      <div className="w-36 h-36 absolute bottom-[40%] left-[30%] -z-20">
        <Circle color="orange" />
      </div>
      <div className="w-36 h-36 absolute top-0 right-[8%] -z-20">
        <Circle color="orange" />
      </div>
      <div className="w-36 h-36 absolute top-[30%] right-0 -z-20">
        <Circle color="orange" />
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.8, duration: 0.8, delay: 0.4 },
          },
        }}
        initial="hidden"
        whileInView="show"
        className="w-full h-[50%] flex gap-5 sm:flex-row flex-col"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
            },
          }}
          className="2xl:w-[51rem] 2xl:h-[29rem] lg:w-[34rem] lg:h-[22rem] sm:w-[22rem] sm:h-[12rem] w-full h-[14rem] relative rounded-lg"
        >
          <Image
            src={imgSrc}
            alt="sample image"
            className="absolute object-cover rounded-lg"
            placeholder="blur"
            draggable={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
          />
        </motion.div>
        <InfoCard
          headerLabel="why choose zenith?"
          title="Selecting the right partner in business can make a huge difference."
          info="Zenith Solutions is committed to providing remarkable Workday consulting services tailored to
the client’s need. With our proven track record, comprehensive approach, and expertise of top-tier advisors, choosing Zenith means partnering with a trusted team dedicated to your success."
          color="skyBlue"
        />
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.25, duration: 0.8, delay: 0.4 },
          },
        }}
        initial="hidden"
        whileInView="show"
        className="w-full h-[50%] flex justify-end gap-5 sm:flex-row flex-col"
      >
        <InfoCard
          headerLabel="about us"
          title="Hire Great Talent with the Right Attitude"
          info="Zenith Solutions is a leading recruitment firm dedicated to connecting top talent with leading
organizations. With a focus on quality, integrity, and personalized service, we have established
ourselves as a trusted partner for both clients and candidates alike. Our team of experienced
recruiters is committed to delivering exceptional results and exceeding expectations every step
of the way."
          color="orange"
        />
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
            },
          }}
          className="2xl:w-[51rem] 2xl:h-[29rem] lg:w-[34rem] lg:h-[22rem] sm:w-[22rem] sm:h-[12rem] w-full h-[14rem] relative rounded-lg"
        >
          <Image
            src={imgSrc}
            alt="sample image"
            className="absolute object-cover rounded-lg"
            placeholder="blur"
            draggable={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InfoSection;

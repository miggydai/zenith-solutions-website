"use client";

import React from "react";
import ClientStories from "../ui/ClientStoriesContainer";
import SectionHeader from "../ui/SectionHeader";
import useMediaQuery from "@/src/hooks/useMediaQuery";
import Image from "next/image";
import { motion } from "framer-motion";
import dots from "@/public/assets/images/dots&circle2.png";
import ClientStoriesMobile from "../ui/ClientStoriesMobile";

const ClientSection = () => {
  const matches = useMediaQuery("(min-width: 768px)");
  return (
    <>
      {matches ? (
        <section className="w-full md:h-[70vh] h-full flex flex-col justify-center items-center gap-3 mt-5">
          <div className="flex flex-row w-full h-[60vh]">
            <div className="w-[80%] h-[60vh]">
              <ClientStories />
            </div>

            <div className="xl:w-[15%] w-[17%] h-auto flex  justify-center items-center p-4">
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
        </section>
      ) : (
        <section className="w-full h-full flex items-center justify-center mt-4">
          <ClientStoriesMobile />
        </section>
      )}
    </>
  );
};

export default ClientSection;

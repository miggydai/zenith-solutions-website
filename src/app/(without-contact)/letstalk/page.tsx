"use client";

import React from "react";
import { motion } from "framer-motion";

import TalentCard from "@/src/components/ui/TalentCard";
import Image from "next/image";
import alright from "@/public/assets/images/alryt.gif";
import { useState } from "react";
import ClientCard from "@/src/components/ui/ClientCard";

const LetsTalkPage = () => {
  const [client, setClient] = useState("client");

  const clientCard = () => {
    setClient("client");
  };

  const talentCard = () => {
    setClient("talent");
  };

  const buttonStyleClient = `w-[10rem] h-10 font-montserrat capitalize hover:bg-darkBlue ${
    client == "client" ? "bg-darkBlue" : "bg-transparent"
  } border border-white rounded-full text-white transition ease-in-out duration-300`;

  const buttonStyleTalent = `w-[10rem] h-10 font-montserrat capitalize hover:bg-darkBlue ${
    client == "talent" ? "bg-darkBlue" : "bg-transparent"
  } border border-white rounded-full text-white transition ease-in-out duration-300`;

  return (
    <section className="w-full md:h-[170vh] h-[200vh] flex flex-col justify-start items-center relative">
      <div className="w-full h-screen flex flex-col justify-center items-center bg-aquaBlue relative">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 1 }}
          className="sm:w-[50%] w-full h-auto flex flex-col gap-2 justify-center items-center"
        >
          <h4 className="font-medium text-xl uppercase font-sora">
            here at zenith
          </h4>
          <h1 className="sm:text-6xl text-3xl font-bold text-center capitalize font-sora">
            We are here to help
          </h1>
          <p className="text-center sm:text-base text-sm mx-5 font-rubik">
            We can streamline the budgeting process of your project with precise
            pricing calculations tailored specifically to your needs
          </p>
          <div className="w-full flex flex-row gap-5 justify-center items-center mt-7">
            <button onClick={clientCard} className={buttonStyleClient}>
              client
            </button>
            <button onClick={talentCard} className={buttonStyleTalent}>
              talent
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="absolute sm:right-44 right-3 sm:w-36 sm:h-36 w-16 h-16 top-[30%]"
        >
          <Image
            src={alright}
            alt="icon"
            className="object-cover"
            draggable={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            priority
            unoptimized
          />
        </motion.div>
        <div className="max-md:hidden absolute -bottom-[65%] w-3/4 md:flex justify-center items-center">
          {client == "client" ? <ClientCard /> : <TalentCard />}
        </div>
      </div>
      <div className="md:hidden w-full h-[140vh] justify-center items-center">
        {client == "client" ? <ClientCard /> : <TalentCard />}
      </div>
    </section>
  );
};

export default LetsTalkPage;

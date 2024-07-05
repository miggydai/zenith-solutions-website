"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/src/components/ui/Button";
import TalentCard from "@/src/components/ui/TalentCard";
import Image from "next/image";
import alright from "@/public/assets/images/alryt.gif";
import { useState } from "react";
import ClientCard from "@/src/components/ui/ClientCard";

const LetsTalkPage = () => {
  const [client, setClient] = useState("client");

  const clientCard = () => {
    setClient("client");
    console.log("client");
  };

  const talentCard = () => {
    setClient("talent");
    console.log("talent");
  };

  const buttonStyle =
    "w-[10rem] h-10 font-montserrat capitalize hover:bg-darkBlue border border-white rounded-full text-white transition ease-in-out duration-300";

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
            {/* <Button label="client" color="smthGreen" href="" />
            <Button label="talent" color="smthGreen" href="" /> */}
            <button onClick={clientCard} className={buttonStyle}>
              client
            </button>
            <button onClick={talentCard} className={buttonStyle}>
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
          />
        </motion.div>
        <div className="max-md:hidden absolute -bottom-96 w-3/4 md:flex justify-center items-center">
          {client == "client" ? <ClientCard /> : <TalentCard />}
        </div>
      </div>
      {/* <div className="md:hidden w-full h-[30vh] justify-center items-center">
        <TalentCard />
      </div> */}
    </section>
  );
};

export default LetsTalkPage;

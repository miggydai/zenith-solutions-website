"use client";

import React from "react";
import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/sendEmail";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import mountaingimg from "@/public/assets/images/mountains for contact us .svg";
import dots from "@/public/assets/images/contact dots.svg";
import { motion } from "framer-motion";
import Link from "next/link";

const ContactusCard = () => {
  return (
    <div className="flex items-start bg-skyBlue w-full md:w-[70rem] md:h-[495px] relative md:rounded-2xl md:z-20 md:top-30">
      {/* left */}
      <div className="w-full  p-8 flex max-md:flex-col z-20 ">
        <div className="w-full max-md:text-center md:w-1/2 flex flex-col gap-6">
          {/* Header of contacts */}
          <h1 className="sm:text-5xl text-2xl pb-5 font-sora capitalize">
            Contact us
          </h1>
          {/* Email */}
          <div className="max-md:hidden">
            <h3 className="text-xs font-extralight font-sora">Email</h3>
            <p className="font-sora">enquiry@znthsolutions.com</p>
          </div>
          {/* Mobile number */}
          <div className="hidden md:block">
            <h3 className="text-xs font-extralight font-sora">Mobile</h3>
            <p className="font-sora">+1 856-392-5119</p>
            <p className="font-sora">+1 856-336-4863</p>
          </div>
          {/* Icons */}
          <div className="flex flex-row gap-3 max-md:hidden">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="cursor-pointer"
            >
              <a
                href="https://www.linkedin.com/company/zenith-solutions-llc/"
                aria-label="linkedIn"
              >
                <FaLinkedinIn />
              </a>
            </motion.div>
          </div>
        </div>

        {/* right */}
        {/* Email form */}

        <form
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error, {
                style: {
                  padding: "16px",
                },
              });
              return;
            }
            toast.success("Email sent Successfully", {
              style: {
                padding: "16px",
              },
              iconTheme: {
                primary: "#79C1F8",
                secondary: "#FFFAEE",
              },
            });
          }}
          className="flex justify-left items-end w-full md:w-1/2 h-full flex-col gap-4 px-4 pt-16"
        >
          {/* Text field */}

          <div className="flex flex-col w-full gap-8">
            <label
              htmlFor="name"
              className="text-sm font-extralight capitalize font-sora"
            >
              Full name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="w-full bg-transparent border-0 border-b-2 outline-none"
            />
          </div>

          <div className="flex flex-col w-full gap-8">
            <label
              htmlFor="email"
              className="text-sm font-extralight capitalize font-sora"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full bg-transparent border-0 border-b-2 outline-none"
              required
            />
          </div>

          <div className="flex flex-col w-full gap-8">
            <label
              htmlFor="message"
              className="text-sm font-extralight capitalize"
            >
              Message
            </label>
            <input
              id="message"
              type="text"
              name="message"
              className="w-full bg-transparent border-0 border-b-2 outline-none"
              required
            />
          </div>

          <div className="mt-3">
            <SubmitButton />
          </div>
        </form>
      </div>
      <Image
        src={mountaingimg}
        alt="bg"
        className="absolute z-10 bottom-0 h-[20rem]"
        draggable={false}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <Image
        src={dots}
        alt="bg"
        className="absolute z-10 bottom-0 left-0 w-[50%] opacity-10"
        draggable={false}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default ContactusCard;

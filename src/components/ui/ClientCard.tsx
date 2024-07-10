"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { motion } from "framer-motion";
import { sendEmailClient } from "@/actions/sendEmailClient";
import toast from "react-hot-toast";
import SubmitButton from "./SubmitButton";

const ClientCard = () => {
  const { pending } = useFormStatus();
  return (
    <form
      action={async (formData) => {
        const { data, error } = await sendEmailClient(formData);

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
      className="md:w-[90%] w-full rounded-3xl p-8 bg-white shadow-md flex flex-col"
    >
      <div className="w-full flex flex-col">
        {/* name */}
        <div className="flex md:flex-row flex-col w-full gap-4">
          <div className="flex flex-col justify-start gap-2 mt-4 md:w-[50%] w-full">
            {/* first name */}
            <label
              htmlFor="firstname"
              className="text-black font-medium capitalize"
            >
              First Name
            </label>
            <input
              id="firstname"
              type="text"
              name="firstname"
              required
              className="border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col justify-start gap-2 mt-4 md:w-[50%] w-full">
            {/* last name */}
            <label
              htmlFor="lastname"
              className="text-black font-medium capitalize"
            >
              last Name
            </label>
            <input
              id="lastname"
              type="text"
              name="lastname"
              required
              className="border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col w-full gap-4">
          {/* email */}
          <div className="flex flex-col justify-start gap-2 mt-4 md:w-[50%] w-full">
            <label htmlFor="email" className="text-black font-medium">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>
          {/* phone # */}
          <div className="flex flex-col justify-start gap-2 mt-4 md:w-[50%] w-full">
            <label htmlFor="phone" className="text-black font-medium">
              Phone Number *
            </label>
            <input
              id="phone"
              type="text"
              name="phonenumber"
              required
              className="border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col w-full gap-4">
          {/* Company Name */}
          <div className="flex flex-col justify-start gap-2 mt-4 md:w-[50%] w-full">
            <label htmlFor="company" className="text-black font-medium">
              Company Name*
            </label>
            <input
              id="company"
              type="text"
              name="company"
              className="border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>
          {/* Country */}
          <div className="flex flex-col justify-start gap-2 mt-4 md:w-[50%] w-full">
            <label
              htmlFor="country"
              className="text-black font-medium capitalize"
            >
              country*
            </label>
            <input
              id="country"
              type="text"
              name="country"
              required
              className="border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col w-full mt-3 gap-3">
        <label htmlFor="message" className="text-black font-medium capitalize">
          Message*
        </label>
        <input
          id="message"
          type="text"
          name="message"
          className="border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
        />
      </div>
      {/* Submit Button */}
      <div className="flex flex-col w-full mt-8 justify-center items-center">
        {/* <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
          whileTap={{ scale: 0.8 }}
          type="submit"
          className="bg-darkBlue w-[90%] h-16 text-center rounded-full"
        >
          {pending ? (
            <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-projectOrange"></div>
          ) : (
            <span className="text-white font-montserrat font-semibold capitalize">
              Submit
            </span>
          )}
        </motion.button> */}
        <SubmitButton />
      </div>
    </form>
  );
};

export default ClientCard;

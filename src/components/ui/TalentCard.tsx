"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { motion } from "framer-motion";
import { sendEmailTalent } from "@/actions/sendEmailTalent";
import toast from "react-hot-toast";
import SubmitButton from "./SubmitButton";

const TalentCard = () => {
  return (
    <form
      action={async (formData) => {
        const { data, error } = await sendEmailTalent(formData);

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
            <label className="text-black font-medium capitalize">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              required
              className="border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col justify-start gap-2 mt-4 md:w-[50%] w-full">
            {/* last name */}
            <label className="text-black font-medium capitalize">
              last Name
            </label>
            <input
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
            <label className="text-black font-medium">Email Address *</label>
            <input
              type="email"
              name="email"
              required
              className="border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>
          {/* phone # */}
          <div className="flex flex-col justify-start gap-2 mt-4 md:w-[50%] w-full">
            <label className="text-black font-medium">Phone Number *</label>
            <input
              type="text"
              name="phonenumber"
              required
              className="border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col w-full gap-4">
          {/* Job Title */}
          <div className="flex flex-col justify-start gap-2 mt-4 md:w-[50%] w-full">
            <label className="text-black font-medium capitalize">
              Job title*
            </label>
            <input
              type="text"
              name="job"
              className="border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>
          {/* experience */}
          <div className="flex flex-col justify-start gap-2 mt-4 md:w-[50%] w-full">
            <label className="text-black font-medium capitalize">
              Years of experience*
            </label>
            <input
              type="number"
              name="experience"
              required
              className="border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* country */}
      <div className="flex flex-col md:w-[50%] w-full mt-3 gap-3">
        <label className="text-black font-medium capitalize">Country*</label>
        <input
          type="text"
          name="country"
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

export default TalentCard;

"use client";

import React from "react";
import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/sendEmail";

const ContactusCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-start bg-skyBlue p-8 w-full md:w-[70%] md:h-[495px] md:rounded-2xl md:z-20 md:top-36">
      {/* left */}
      <div className="w-full max-md:text-center md:w-1/2  flex flex-col gap-6">
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
          <p className="font-sora">+6392736849234</p>
        </div>
        {/* Icons */}
        <div className="hidden md:block">
          <p>Icons</p>
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
          <label className="text-sm font-extralight capitalize font-sora">
            Full name
          </label>
          <input
            type="text"
            name="name"
            className="w-full bg-transparent border-0 border-b-2 outline-none"
          />
        </div>

        <div className="flex flex-col w-full gap-8">
          <label className="text-sm font-extralight capitalize font-sora">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full bg-transparent border-0 border-b-2 outline-none"
            required
          />
        </div>

        <div className="flex flex-col w-full gap-8">
          <label className="text-sm font-extralight capitalize">Message</label>
          <input
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
  );
};

export default ContactusCard;

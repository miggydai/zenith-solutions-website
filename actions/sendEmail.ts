"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/src/utils/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get("email");
  const message = formData.get("message");
  const name = formData.get("name");

  if (!validateString(name)) {
    return {
      error: "Invalid Email",
    };
  }

  if (!validateString(email)) {
    return {
      error: "Invalid Email",
    };
  }

  if (!validateString(message)) {
    return {
      error: "Invalid Email",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "onboarding@resend.dev",
      //   change email to test
      to: "enquiry@znthsolutions.com",
      subject: "Message from Contact Form",
      reply_to: email as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        email: email as string,
        name: name as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};

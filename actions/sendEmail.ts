"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/src/utils/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get("email");
  const message = formData.get("message");

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
      to: "miguelemmanueldailisan@gmail.com",
      subject: "Message from Contact Form",
      reply_to: email as string,
      text: message as string,
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

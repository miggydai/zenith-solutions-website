"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/src/utils/utils";
import ClientEmail from "@/email/client-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmailClient = async (formData: FormData) => {
  const email = formData.get("email");
  const message = formData.get("message");
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const phonenumber = formData.get("phonenumber");
  const company = formData.get("company");
  const country = formData.get("country");

  if (!validateString(firstname)) {
    return {
      error: "Invalid Email",
    };
  }

  if (!validateString(lastname)) {
    return {
      error: "Invalid Email",
    };
  }

  if (!validateString(phonenumber)) {
    return {
      error: "Invalid Email",
    };
  }

  if (!validateString(company)) {
    return {
      error: "Invalid Email",
    };
  }

  if (!validateString(country)) {
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
      to: "miguelemmanueldailisan@gmail.com",
      subject: "Message from Client Form",
      reply_to: email as string,
      react: React.createElement(ClientEmail, {
        message: message as string,
        email: email as string,
        firstname: firstname as string,
        lastname: lastname as string,
        phonenumber: phonenumber as string,
        company: company as string,
        country: country as string,
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

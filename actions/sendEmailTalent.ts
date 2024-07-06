"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/src/utils/utils";
import TalentEmail from "@/email/talent-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmailTalent = async (formData: FormData) => {
  const email = formData.get("email");
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const phonenumber = formData.get("phonenumber");
  const job = formData.get("job");
  const experience = formData.get("experience");
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

  if (!validateString(job)) {
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

  let data;
  try {
    data = await resend.emails.send({
      from: "onboarding@resend.dev",
      //   change email to test
      to: "miguelemmanueldailisan@gmail.com",
      subject: "Message from Talent Form",
      reply_to: email as string,
      react: React.createElement(TalentEmail, {
        email: email as string,
        firstname: firstname as string,
        lastname: lastname as string,
        phonenumber: phonenumber as string,
        job: job as string,
        country: country as string,
        experience: experience as unknown as number,
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

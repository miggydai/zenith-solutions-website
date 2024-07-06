import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  company: string;
  country: string;
  message: string;
};

export default function ClientEmail({
  firstname,
  lastname,
  phonenumber,
  company,
  country,
  message,
  email,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from the zenith Client form</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message and details from {firstname}{" "}
                {lastname}
              </Heading>
              <Text>Company Name: {company}</Text>
              <Text>Country: {country}</Text>
              <Text>Phone Number: {phonenumber}</Text>
              <Text>Message: {message}</Text>
              <Hr />
              <Text>The sender's email is: {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

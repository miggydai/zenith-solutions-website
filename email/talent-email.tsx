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
  job: string;
  experience: number;
  country: string;
};

export default function TalentEmail({
  firstname,
  lastname,
  phonenumber,
  job,
  experience,
  country,
  email,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from the zenith talent form</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from {firstname} {lastname}
              </Heading>
              <Text>Job Title: {job}</Text>
              <Text>Yrs of Experience: {experience}</Text>
              <Text>Country: {country}</Text>
              <Text>Phone Number: {phonenumber}</Text>
              <Hr />
              <Text>The sender's email is: {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

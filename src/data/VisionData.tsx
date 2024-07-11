import { ServiceType } from "@/lib/types/serviceTypes";

import factory from "@/public/assets/images/factory.gif";
import mf from "@/public/assets/images/m&f.gif";
import science from "@/public/assets/images/science.gif";
import shake from "@/public/assets/images/shakehand.gif";

export const visionData: ServiceType[] = [
  {
    iconUrl: science,
    title: "Customized Solutions",
    description:
      "We understand that every client is unique, which is why we tailor our services to meet your specific needs and objectives. Whether you're a small startup or a large corporation, we have the expertise and flexibility to deliver the right solutions for you.",
  },
  {
    iconUrl: factory,
    title: "Industry Expertise",
    description:
      "Our team of recruiters possesses in-depth knowledge and experience in their respective fields, allowing us to effectively navigate the complexities of various industries and identify the best talent available.",
  },
  {
    iconUrl: shake,
    title: "Long-Term Partnerships",
    description:
      "We value long-term relationships with our clients and candidates, built on trust, transparency, and mutual respect. Our goal is not just to fill positions but to forge lasting connections that drive success for years to come.",
  },
  {
    iconUrl: mf,
    title: "Commitment to Community",
    description:
      "At the heart of our business lies a deep commitment to giving back to the community. We actively engage in initiatives that support local organizations and individuals with the goal of contributing to a better society.",
  },
];

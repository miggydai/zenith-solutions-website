import { ServiceType } from "@/lib/types/serviceTypes";

import imgSrc from "@/public/assets/images/test.gif";
import icon1 from "@/public/assets/images/wired-outline-987-accounting.gif";
import icon2 from "@/public/assets/images/system-regular-22-build.gif";
import icon3 from "@/public/assets/images/system-regular-199-attribution.gif";
import icon4 from "@/public/assets/images/system-regular-82-extension.gif";
import icon5 from "@/public/assets/images/wired-outline-2512-artificial-intelligence-ai-alt.gif";

export const enterpriseContent: ServiceType[] = [
  {
    title: "Workday Financial Management",
    iconUrl: icon1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Adaptive Planning",
    iconUrl: imgSrc,
    description:
      "Plan for the future with confidence using Adaptive Planning. Our expertise ensures your planning processes are flexible and responsive.",
  },
  {
    title: "Human Capital",
    iconUrl: icon3,
    description:
      "Your human capital is your most valuable asset. We make Workday HCM projects better for the people it’s designed to help.",
  },
  {
    title: "Machine Learning/Generative AI",
    iconUrl: icon5,
    description:
      "Unlock the potential of your data with our Machine Learning and Generative AI solutions. We design intelligent systems that fuel progress and optimize performance.",
  },
  {
    title: "Workday Extend",
    iconUrl: icon4,
    description:
      "Seamlessly integrate your systems with Workday Extend. We customize integrations to fit business requirements, ensuring a unified system.",
  },
  {
    title: "Innovation Services",
    iconUrl: icon2,
    description:
      "Empowering clients with tools and creativity streamlines projects, enhances workflows, boosts satisfaction, and fosters growth and innovation.",
  },
];

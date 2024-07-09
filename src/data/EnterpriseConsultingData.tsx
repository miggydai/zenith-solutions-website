import { ServiceType } from "@/lib/types/serviceTypes";

import imgSrc from "@/public/assets/images/ec assign.gif";
import icon1 from "@/public/assets/images/ec calcu.gif";
import icon2 from "@/public/assets/images/ec build.gif";
import icon3 from "@/public/assets/images/ec person.gif";
import icon4 from "@/public/assets/images/ec puzzle.gif";
import icon5 from "@/public/assets/images/ec ai.gif";

export const enterpriseContent: ServiceType[] = [
  {
    title: "Financial Management",
    iconUrl: icon1,
    description:
      "Streamline financial operations with Workday Financials. We optimize financial processes to enhance efficiency and accuracy.",
  },
  {
    title: "Adaptive Planning",
    iconUrl: imgSrc,
    description:
      "Plan for the future with confidence using Adaptive Planning. Our expertise ensures your planning processes are flexible and responsive.",
  },
  {
    title: "Human Capital Management",
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

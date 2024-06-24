import type { StaticImageData } from "next/image";

export type PersonType = {
  name: string;
  imageUrl: StaticImageData;
  role?: string;
  testimonial?: string;
};

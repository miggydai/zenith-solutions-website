import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        map: "url('public/assets/images/map.png')",
      },
      colors: {
        aquaBlue: "rgb(var(--color-aquaBlue) / <alpha-value>)",
        smthGreen: "rgb(var(--color-smthGreen) / <alpha-value>)",
        tan: "rgb(var(--color-tan) / <alpha-value>)",
        lightGray: "rgb(var(--color-lightGray) / <alpha-value>)",
        projectOrange: "rgb(var(--color-projectOrange) / <alpha-value>)",
        projectOrangeSgradient:
          "rgb(var(--color-projectOrangeSgradient) / <alpha-value>)",
        aquaBlueSgradient:
          "rgb(var(--color-aquaBlueSgradient) / <alpha-value>)",
        tanSgradient: "rgb(var(--color-tanSgradient) / <alpha-value>)",
        skyBlue: "rgb(var(--color-skyBlue) / <alpha-value>)",
        darkBlue: "rgb(var(--color-darkBlue) / <alpha-value>)",
        whiteGray: "rgb(var(--color-whiteGray) / <alpha-value>)",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        poppins: ["var(--font-poppins)"],
        sora: ["var(--font-sora)"],
        rubik: ["var(--font-rubik)"],

        sans: [
          "Helvetica",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
        ],
      },
      keyframes: {
        enterFromRight: {
          from: { opacity: "0", transform: "translateX(200px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        enterFromLeft: {
          from: { opacity: "0", transform: "translateX(-200px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        exitToRight: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(200px)" },
        },
        exitToLeft: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(-200px)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
        },
        scaleOut: {
          from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
          to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        slideDown: {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        fade: "fadeIn 5s ease-in-out enterFromRight",
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeOut: "fadeOut 0.5s ease-out",
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;

"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import Button from "@/src/components/ui/Button";
import { motion } from "framer-motion";

type NavLinkType = {
  href: string;
  label: string;
};

const links: NavLinkType[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "",
  },
  {
    label: "Services",
    href: "",
  },
];

const Navigation = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMenu = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div>
      <nav className="flex justify-between items-center w-[92%] mx-auto p-3">
        <div>logo</div>
        <div
          className={`nav-links duration-500 md:static absolute bg-black md:min-h-fit min-h-[60vh] left-0 ${
            mobileNav ? "top-[9%]" : "top-[-100%]"
          } md:w-auto w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            {links.map((link, index) => (
              <Link key={index} href={link.href}>
                <span className="">{link.label}</span>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <Button label="Let's Chat" color="blue" />
          <motion.button
            initial="hide"
            animate={mobileNav ? "show" : "hide"}
            onClick={toggleMenu}
            className="cursor-pointer md:hidden flex flex-col space-y-1"
            aria-label="menu button"
          >
            <motion.span
              variants={{
                hide: {
                  rotate: 0,
                },
                show: {
                  rotate: 45,
                  y: 5,
                },
              }}
              className="w-6 bg-white h-[1px] block"
            ></motion.span>
            <motion.span
              variants={{
                hide: {
                  opacity: 1,
                },
                show: {
                  opacity: 0,
                },
              }}
              className="w-6 bg-white h-[1px] block"
            ></motion.span>
            <motion.span
              variants={{
                hide: {
                  rotate: 0,
                },
                show: {
                  rotate: -45,
                  y: -5,
                },
              }}
              className="w-6 bg-white h-[1px] block"
            ></motion.span>
          </motion.button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

"use client";

import React, { memo } from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/src/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/public/assets/images/OPTION 1 1.png";

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
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
];

const Navigation = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const pathaName = usePathname();
  const toggleMenu = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div className="w-full h-auto flex items-center fixed top-0 z-50 bg-white">
      <nav className="flex justify-between items-center w-[92%] mx-auto p-3">
        <Link
          href={"/"}
          className="relative w-12 h-12 flex justify-center items-center"
        >
          <Image
            src={logo}
            alt="zenith logo"
            className="absolute object-cover w-full h-full"
            draggable={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        <div
          className={`nav-links duration-500 md:static absolute md:min-h-fit left-0 ${
            mobileNav ? "top-[100%] min-h-[30vh] " : "top-[-150%] h-0"
          } md:w-auto w-full flex items-center px-5 md:bg-transparent bg-skyBlue`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            {links.map((link, index) => (
              <motion.li
                whileTap={{ scale: 0.5 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
                key={index}
                onClick={() => {
                  toggleMenu();
                }}
              >
                <Link
                  href={link.href}
                  className={`group md:hover:text-skyBlue transition ease-in-out duration-500 cursor-pointer ${
                    pathaName === link.href
                      ? "md:text-skyBlue text-projectOrange"
                      : "md:text-black text-white"
                  }`}
                >
                  <span
                    className={
                      pathaName === link.href
                        ? "md:text-skyBlue text-projectOrange"
                        : "text-transparent"
                    }
                  >
                    ●
                  </span>{" "}
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
        {/* button and hamburger */}
        <div className="flex items-center gap-6">
          <Button href="/letstalk" label="Let's Chat" color="skyBlue" />
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
              className="w-6 bg-smthGreen h-[1px] block"
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
              className="w-6 bg-smthGreen h-[1px] block"
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
              className="w-6 bg-smthGreen h-[1px] block"
            ></motion.span>
          </motion.button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import Button from "@/src/components/ui/Button";

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
    label: "Projects",
    href: "/works",
  },
  {
    label: "Contact",
    href: "/contact",
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
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <Button label="Let's Chat" color="blue" />
          {/* <IonIcon
              icon={menuOpen ? CloseOutline : MenuOutline}
              onClick={toggleMenu}
              className="text-3xl cursor-pointer md:hidden"
            /> */}
          <div className="curser-pointer md:hidden" onClick={toggleMenu}>
            {mobileNav ? <p>close</p> : <p>hamburg</p>}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

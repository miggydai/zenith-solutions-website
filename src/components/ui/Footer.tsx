import React from "react";
import Link from "next/link";

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
  {
    label: "Contact",
    href: "/letstalk",
  },
];

const Footer = () => {
  return (
    <div className="w-full h-[70vh] flex flex-col justify-center items-center md:relative">
      <footer className="pb-10 flex flex-col justify-end items-center max-sm:pt-[2rem] h-full max-sm:h-screen md:absolute w-full bottom-0 bg-projectOrange">
        {/* Footer details */}
        <div className="w-3/4 max-sm:w-full flex max-sm:flex-col p-5">
          {/* Left section */}
          <div className="w-3/4  max-sm:w-full flex flex-col gap-4 max-sm:pt-20">
            <h1>Logo</h1>
            <p className="text-sm w-3/4 font-montserrat">
              Zenith Solutions is dedicated to connecting businesses with
              top-tier talent that not only excels in their roles but also
              embodies the right attitude to drive your company forward.
            </p>
            <h4 className="sm:hidden font-bold font-montserrat">Contact us</h4>
            <p className="text-sm font-montserrat">Eqnuiry@znthsolutions</p>
            <p className="text-sm font-montserrat">Egg Harbor City, NJ 08215</p>
          </div>
          {/* Right section */}
          <div className="flex max-sm:flex-col-reverse max-sm:pt-10 justify-end w-1/2 gap-12">
            {/* Legal */}

            <div className="flex flex-col gap-3">
              <h3 className="font-semibold font-montserrat">Legal</h3>
              <p className="font-montserrat">Privacy Policy</p>
              <p className="font-montserrat">Terms of use</p>
            </div>
            {/* Company */}
            <div className="flex flex-col gap-3">
              <div className="sm:hidden">
                <h4 className="font-bold font-montserrat">Quick Links</h4>
              </div>
              <h3 className="font-montserrat font-semibold">Company</h3>
              {links.map((link, index) => (
                <Link key={index} href={link.href} className="font-montserrat">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="p-5 w-3/4 sm:border-t-2 flex justify-between">
          <h3 className="max-sm:hidden">Logos</h3>
          <p className="font-montserrat font-light">
            © 2024 Zenith Solutions. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

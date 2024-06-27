import React from "react";
import ContactUsCard from "@/src/components/ui/ContactUsCard";

const Footer = () => {
  return (
    <div className="w-full h-[160vh] flex flex-col justify-center items-center relative bg-slate-400">
      <ContactUsCard />
      <footer className="flex flex-col justify-center items-center h-[50%] pt-[10rem] absolute w-full bottom-0 bg-smthGreen">
        {/* Footer details */}
        <div className="w-3/4 flex p-5">
          {/* Left section */}
          <div className="w-1/2 flex flex-col gap-4">
            <h1>Logo</h1>
            <p className="text-sm">
              Zenith Solutions is dedicated to connecting businesses with
              top-tier talent that not only excels in their roles but also
              embodies the right attitude to drive your company forward.
            </p>
            <p className="text-sm">Eqnuiry@znthsolutions</p>
            <p className="text-sm">Egg Harbor City, NJ 08215</p>
          </div>
          {/* Right section */}
          <div className="flex justify-end w-1/2 gap-12">
            {/* Legal */}
            <div className="flex flex-col gap-3">
              <h3>Legal</h3>
              <p>Privacy Policy</p>
              <p>Terms of use</p>
            </div>
            {/* Company */}
            <div className="flex flex-col gap-3">
              <h3>Company</h3>
              <p>Home</p>
              <p>Services</p>
              <p>About</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
        <div className="p-5 w-3/4 border-t-2 flex justify-between">
          <h3>Logos</h3>
          <p>© 2024 Zenith Solutions. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import React from "react";
import ContactusCard from "./ContactusCard";

const FooterSection = () => {
  return (
    <div className="flex items-center justify-center flex-col relative h-screen">
      <div className="absolute w-full top-10 z-10">
        <ContactusCard />
      </div>

      <div className="flex flex-col justify-center items-center h-[60vh] pt-14 absolute w-full bottom-0 bg-smthGreen">
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
      </div>
    </div>
  );
};

export default FooterSection;

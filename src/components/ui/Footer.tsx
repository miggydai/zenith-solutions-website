import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[70vh] flex flex-col justify-center items-center md:relative">
      <footer className="pb-10 flex flex-col justify-end items-center max-sm:pt-[2rem] h-full max-sm:h-screen md:absolute w-full bottom-0 bg-smthGreen">
        {/* Footer details */}
        <div className="w-3/4 max-sm:w-full flex max-sm:flex-col p-5">
          {/* Left section */}
          <div className="w-3/4  max-sm:w-full flex flex-col gap-4 max-sm:pt-20">
            <h1>Logo</h1>
            <p className="text-sm w-3/4">
              Zenith Solutions is dedicated to connecting businesses with
              top-tier talent that not only excels in their roles but also
              embodies the right attitude to drive your company forward.
            </p>
            <h4 className="sm:hidden font-bold">Contact us</h4>
            <p className="text-sm">Eqnuiry@znthsolutions</p>
            <p className="text-sm">Egg Harbor City, NJ 08215</p>
          </div>
          {/* Right section */}
          <div className="flex max-sm:flex-col-reverse max-sm:pt-10 justify-end w-1/2 gap-12">
            {/* Legal */}
            
            <div className="flex flex-col gap-3">
          
              <h3>Legal</h3>
              <p>Privacy Policy</p>
              <p>Terms of use</p>
            </div>
            {/* Company */}
            <div className="flex flex-col gap-3">
            <div className="sm:hidden">
              <h4 className="font-bold">Quick Links</h4>
            </div>
              <h3>Company</h3>
              <p>Home</p>
              <p>Services</p>
              <p>About</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
        <div className="p-5 w-3/4 sm:border-t-2 flex justify-between">
          <h3 className="max-sm:hidden">Logos</h3>
          <p>© 2024 Zenith Solutions. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

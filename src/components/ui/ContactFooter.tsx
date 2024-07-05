import React from "react";
import ContactusCard from "./ContactusCard";
import Footer from "./Footer";

const ContactFooter = () => {
  return (
    <div className="sm:h-[160vh] h-[280vh] flex flex-col items-center justify-end">
      <div className="md:pt-48 pt-0 w-full md:h-[495px] h-[619px] flex sm:justify-center justify-start sm:items-center items-end z-10">
        <ContactusCard />
      </div>
      <Footer />
    </div>
  );
};

export default ContactFooter;

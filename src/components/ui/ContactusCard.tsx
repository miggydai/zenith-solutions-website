import React from "react";

const ContactusCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-start bg-blue-400 p-8 w-full md:w-[70%] md:h-[495px] md:rounded-2xl md:absolute md:z-20 md:top-36">
      {/* left */}
      <div className="w-full max-md:text-center md:w-1/2  flex flex-col gap-6">
        {/* Header of contacts */}
        <h1 className="text-5xl pb-5">Contact us</h1>
        {/* Email */}
        <div className="max-md:hidden">
          <h3 className="text-xs font-extralight">Email</h3>
          <p>enquiry@znthsolutions.com</p>
        </div>
        {/* Mobile number */}
        <div className="hidden md:block">
          <h3 className="text-xs font-extralight">Mobile</h3>
          <p>+6392736849234</p>
        </div>
        {/* Icons */}
        <div className="hidden md:block">
          <p>Icons</p>
        </div>
      </div>

      {/* right */}
      {/* Email form */}

      <form className="flex justify-left items-end w-full md:w-1/2 h-full flex-col gap-4 px-4 pt-16">
        {/* Text field */}

        <div className="flex flex-col w-full gap-8">
          <label className="text-sm font-extralight capitalize">
            Full name
          </label>
          <input
            type="text"
            className="w-full bg-transparent border-0 border-b-2 outline-none"
          />
        </div>

        <div className="flex flex-col w-full gap-8">
          <label className="text-sm font-extralight capitalize">Email</label>
          <input
            type="email"
            className="w-full bg-transparent border-0 border-b-2 outline-none"
          />
        </div>

        <div className="flex flex-col w-full gap-8">
          <label className="text-sm font-extralight capitalize">Mobile</label>
          <input
            type="text"
            className="w-full bg-transparent border-0 border-b-2 outline-none"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactusCard;

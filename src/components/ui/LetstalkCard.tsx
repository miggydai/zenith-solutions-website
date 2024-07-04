import React from "react";

const letstalkCard = () => {
  return (
    <div className="md:rounded-3xl md:w-[90%] bg-white p-8 shadow-md">
      <form className="flex max-md:flex-col gap-9 p-9">
        <div className="flex flex-col md:w-1/2 gap-2">
          <label className="text-black font-medium">First Name</label>
          <input
            type="text"
            className="border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
          />
          {/* Mao ni tong responsive last name */}
           <label className="text-black font-medium md md:hidden">Last Name *</label>
          <input
            type="text"
            className="md:hidden border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
          />
          <label className="text-black max-md:hidden font-medium">Email Address *</label>
          <input
            type="text"
            className="max-md:hidden border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
          />
          <label className="text-black font-medium">Job title*</label>
          <input
            type="text"
            className="border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
          />
          <label className="text-black font-medium">Country</label>
          <input
            type="text"
            className="border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col md:w-1/2 gap-2">
           {/* Mao ni tong responsive email add */}
           <label className="text-black font-medium md md:hidden">Email Address *</label>
          <input
            type="text"
            className="md:hidden border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
          />
          <label className="text-black max-md:hidden font-medium">Last name *</label>
          <input
            type="text"
            className="max-md:hidden border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
          />
          <label className="text-black font-medium">Phone number *</label>
          <input
            type="text"
            className="border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
          />
          <label className="text-black font-medium">Years of Experience</label>
          <input
            type="number"
            className="border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
          />
        </div>
      </form>
      <div className="p-2 flex justify-center items-center">
        <button className="bg-blue-800 w-[90%] h-16 text-center rounded-full">
          Submit
        </button>
      </div>
    </div>
  );
};

export default letstalkCard;

import React from "react";

const letstalkCard = () => {
  return (
    <div className="rounded-3xl w-[90%] bg-white p-8 shadow-md">
      <form className="flex gap-9 p-9">
        <div className="flex flex-col w-1/2 gap-2">
          <label className="text-black font-medium">First Name</label>
          <input
            type="text"
            className="border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
          />
          <label className="text-black font-medium">Email Address *</label>
          <input
            type="text"
            className="border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
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
        <div className="flex flex-col w-1/2 gap-2">
          <label className="text-black font-medium">Last Name</label>
          <input
            type="text"
            className="border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
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

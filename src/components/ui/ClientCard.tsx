import React from "react";

const ClientCard = () => {
  return (
    <form
      action=""
      className="md:w-[90%] w-full rounded-3xl p-8 bg-white shadow-md flex flex-col"
    >
      <div className="w-full flex flex-col">
        {/* name */}
        <div className="flex md:flex-row flex-col w-full gap-4">
          <div className="flex flex-col justify-start gap-2 mt-4 md:w-[50%] w-full">
            {/* first name */}
            <label className="text-black font-medium capitalize">
              First Name
            </label>
            <input
              type="text"
              className="border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col justify-start gap-2 mt-4 md:w-[50%] w-full">
            {/* last name */}
            <label className="text-black font-medium capitalize">
              last Name
            </label>
            <input
              type="text"
              className="border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col w-full gap-4">
          {/* email */}
          <div className="flex flex-col justify-start gap-2 mt-4 md:w-[50%] w-full">
            <label className="text-black font-medium">Email Address *</label>
            <input
              type="email"
              className="border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>
          {/* phone # */}
          <div className="flex flex-col justify-start gap-2 mt-4 md:w-[50%] w-full">
            <label className="text-black font-medium">Phone Number *</label>
            <input
              type="number"
              className="border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col w-full gap-4">
          {/* Company Name */}
          <div className="flex flex-col justify-start gap-2 mt-4 md:w-[50%] w-full">
            <label className="text-black font-medium">Company Name*</label>
            <input
              type="text"
              className="border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>
          {/* Country */}
          <div className="flex flex-col justify-start gap-2 mt-4 md:w-[50%] w-full">
            <label className="text-black font-medium capitalize">
              country*
            </label>
            <input
              type="text"
              className="border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col w-full mt-3 gap-3">
        <label className="text-black font-medium capitalize">Message*</label>
        <input
          type="text"
          className="border-b-2 border-black bg-transparent text-gray-700 placeholder-gray-500 p-2 focus:outline-none focus:ring-0 focus:border-blue-500"
        />
      </div>
      {/* Submit Button */}
      <div className="flex flex-col w-full mt-8 justify-center items-center">
        <button
          type="submit"
          className="bg-darkBlue w-[90%] h-16 text-center rounded-full"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ClientCard;

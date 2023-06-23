import React from "react";

const RightTourSchedule = () => {
  return (
    <div className="mt-6">
      <div className="top">
        <p className="font-bold text-2xl pb-4">Schedule a tour</p>
        <p>Please submit your info. we will contact you to schedule a tour</p>
      </div>

      <div className="bottom mt-4">
        <form action="submit" className="flex flex-col  gap-4">
          <input
            className="w-full px-3 py-2 bg-white placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            placeholder="Your name*"
            type="text"
          />
          <input
            className=" w-full px-3 py-2 bg-white placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            placeholder="Your email*"
            type="text"
          />
          <input
            className="w-full px-3 py-2 bg-white placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            placeholder="Your phone*"
            type="text"
          />
          <textarea
            className="w-full px-3 py-2 bg-white placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            placeholder="message"
            type="text"
            rows="4"
            cols="50"
          />
          <button className="bg-slate-700 w-full py-4 text-center my-2 text-white">
            Make enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default RightTourSchedule;

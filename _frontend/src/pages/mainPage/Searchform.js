import React from "react";

const Searchform = () => {
  return (
    <div>
      <form action="flex border">
        <div className="flex items-center">
          {/* Search */}
          <div className=" flex justify-start items-center  w-full relative">
            <input
              className="ring-1 ring-slate-900 text-sm leading-none text-left  text-gray-600 px-4 py-2 w-full rounded"
              type="text"
              placeholder="Search"
            />
            <svg
              className="absolute right-3 z-10 cursor-pointer"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                stroke="#4B5563"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 21L15 15"
                stroke="#4B5563"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* property Type */}
          {/* <div className="mt-7 relative">
            <p className="text-sm text-left font-medium leading-none text-gray-800 mb-3">
              Team Name
            </p>
            <div className=" flex justify-start items-center ">
              <input
                className="text-sm leading-none text-left text-gray-600 px-4 py-3  w-full border rounded border-gray-300 relative outline-none"
                type="text"
                placeholder="For example “Alpha”"
              />
            </div>
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default Searchform;

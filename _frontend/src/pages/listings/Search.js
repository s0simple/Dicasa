import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div>
      <div className="text-sm">
        <div class="relative flex items-center mt-4 md:mt-0">
          <span class="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>

          <input
            onChange={(e) => setSearch(() => e.target.value)}
            type="text"
            placeholder="Search"
            class="ring-1 ring-slate-400 block w-full py-1.5 pr-5 text-slate-800 border-2 border-gray-900 rounded md:w-72 placeholder-gray-400 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-500 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;

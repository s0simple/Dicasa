import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Mformcontext } from "../../views/payload/Payload";
import { checkbox_items } from "./check_items";

const checkboxValues = ["A/C", "Internet", "Electricity", "Gas"];

function TwoStep({ next, prev, handleChange }) {
  const [checkedValues, setCheckedValues] = useState([
    "Water",
    "Electricity",
    "Gas",
  ]);
  console.log(checkedValues);
  const { propInput } = useContext(Mformcontext);
  // console.log(propInput);

  // useEffect(() => {
  //   const newData = axios.get("lo")

  //   return () => {
  //     second
  //   }
  // }, [third])

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setCheckedValues([...checkedValues, value]);
    } else {
      setCheckedValues(checkedValues.filter((val) => val !== value));
    }
  };

  return (
    <div className=" ">
      {/* <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Utilities{" "}
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Let us know how many utilities are available in your property
          </p>
        </div>
      </div> */}
      <div className="md:mt-0">
        <form action="">
          <div className="">
            <div className=" space-y-6  px-4 py-5 sm:p-6 ">
              {/* checkboxes */}

              <input
                type="hidden"
                value={(propInput.facilities = checkedValues)}
                name="facilities"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <fieldset class="checkbox-group ">
            <div class="checkbox-group-legend mb-4">
              Select utilites available in your property
            </div>

            {checkbox_items.map((item, index) => (
              <div class="checkbox" key={index}>
                <label class="checkbox-wrapper">
                  <input
                    type="checkbox"
                    class="checkbox-input"
                    value={item.name}
                    checked={checkedValues.includes(item.name)}
                    onChange={handleCheckboxChange}
                  />

                  <span class="checkbox-tile">
                    <span class="checkbox-icon">{item.icon}</span>
                    <span class="checkbox-label">{item.name}</span>
                  </span>
                </label>
              </div>
            ))}
          </fieldset>
        </form>

        <div className=" w-full flex justify-between absolute bottom-0">
          <button
            onClick={prev()}
            class="inline-flex items-center px-6 py-3 text-gray-500 border-gray-300 bg-gray-200 border font-semibold  rounded-md shadow-sm"
          >
            <svg class="mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 22 22">
              <path
                fill-rule="evenodd"
                d="M5.41 11H21a1 1 0 010 2H5.41l5.3 5.3a1 1 0 01-1.42 1.4l-7-7a1 1 0 010-1.4l7-7a1 1 0 011.42 1.4L5.4 11z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Previous</span>
          </button>
          <button
            onClick={next()}
            class="inline-flex items-center  px-6 py-3 text-white font-semibold bg-blue-700 rounded-md shadow-sm"
          >
            <span>Next</span>
            <svg class="ml-3 w-5 h-5" fill="currentColor" viewBox="0 0 22 22">
              <path
                fill-rule="evenodd"
                d="M18.59 13H3a1 1 0 010-2h15.59l-5.3-5.3a1 1 0 111.42-1.4l7 7a1 1 0 010 1.4l-7 7a1 1 0 01-1.42-1.4l5.3-5.3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        {/* <div className=" px-4 py-3  sm:px-6  grid justify-items-end ">
          <div className="flex gap-x-5">
            <button
              onClick={prev()}
              type="submit"
              className="inline-flex justify-center rounded-md bg-indigo-300 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Previous
            </button>
            <button
              onClick={next()}
              type="submit"
              className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Next
            </button>
          </div>

         
        </div> */}
      </div>
    </div>
  );
}

export default TwoStep;

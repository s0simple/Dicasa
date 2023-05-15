import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Mformcontext } from "../../views/payload/Payload";

const checkboxValues = ["A/C", "Internet", "Electricity", "Gas"];

function TwoStep({ next, prev, handleChange }) {
  const [checkedValues, setCheckedValues] = useState([]);
  //  console.log(checkedValues);
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
    <div className="md:grid md:grid-cols-4 md:gap-6 mt-5">
      <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Utilities{" "}
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Let us know how many utilities are available in your property
          </p>
        </div>
      </div>
      <div className="mt-5 md:col-span-3  bg-white md:mt-0 shadow sm:rounded-md">
        <form action="">
          <div className="overflow-hidden ">
            <div className="space-y-6  px-4 py-5 sm:p-6 ">
              {/* checkboxes */}
              <div className="flex  space-x-10 justify-center">
                {checkboxValues.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex h-6 items-center">
                      <input
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        type="checkbox"
                        value={value}
                        checked={checkedValues.includes(value)}
                        onChange={handleCheckboxChange}
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label key={value} className="font-medium text-gray-900 ">
                        {value}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
              <input
                type="hidden"
                value={(propInput.facilities = checkedValues)}
                name="facilities"
                onChange={(e) => handleChange(e)}
              />
              {/* <fieldset>
                <legend className="contents text-sm font-semibold leading-6 text-gray-900">
                  Push Notifications
                </legend>
                <p className="text-sm text-gray-500">
                  These are delivered via SMS to your mobile phone.
                </p>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center">
                    <input
                      id="push-everything"
                      name="push-notifications"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="push-everything"
                      className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                    >
                      Everything
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="push-email"
                      name="push-notifications"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="push-email"
                      className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                    >
                      Same as email
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="push-nothing"
                      name="push-notifications"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="push-nothing"
                      className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                    >
                      No push notifications
                    </label>
                  </div>
                </div>
              </fieldset> */}
            </div>
          </div>
        </form>

        <div className=" px-4 py-3  sm:px-6  grid justify-items-end ">
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
        </div>
      </div>
    </div>
  );
}

export default TwoStep;

import React, { useState, useContext } from "react";
import "../form.css";
import { Mformcontext } from "../../views/payload/Payload";
// import "../scrpt.js";

function ThreeStep({ next, handleChange }) {
  const { propInput } = useContext(Mformcontext);

  // const [ischecked, setischecked] = useState(false);
  const [bedcount, setbedCount] = useState(0);
  const [bathcount, setbathCount] = useState(0);
  const [Inputs, setInputs] = useState({});
  //const [increase, setincrease] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   return setInputs((prev) => ({ ...prev, [name]: value }));
  // };

  return (
    <div className="md:grid md:grid-cols-4 md:gap-6 mt-5">
      <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Basic Information
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Provide us with basic information about your property
          </p>
        </div>
      </div>
      <div className="mt-5 md:col-span-3 md:mt-0 shadow sm:rounded-md bg-white">
        <form action="">
          <div className="overflow-hidden ">
            <div className=" px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-6">
                  <div className="grid grid-cols-6 ">
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Title of Property
                      </label>
                      <input
                        placeholder="Example.. Laxirious 3 bedroom Apartment for sale at Dansoman near roundabout "
                        type="text"
                        name="name"
                        autoComplete="name"
                        onChange={(e) => handleChange(e)}
                        className="h-12 px-5 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <fieldset>
                  <div className="flex gap-5">
                    <div>
                      <label
                        htmlFor="custom-input-number"
                        className="w-full text-gray-700 text-sm font-semibold"
                      >
                        Bedroom
                      </label>
                      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                        <span
                          onClick={() => setbedCount((count) => count - 1)}
                          className="text-center bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                        >
                          <span className=" m-auto text-2xl font-thin">−</span>
                        </span>
                        <input
                          type="number"
                          className="outline-none focus:outline-none text-center w-full border font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                          name="beds"
                          value={(propInput.beds = bedcount)}
                          onChange={(e) => handleChange(e)}
                        ></input>
                        <span
                          onClick={() => setbedCount((count) => count + 1)}
                          className="text-center bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                        >
                          <span className="m-auto text-2xl font-thin">+</span>
                        </span>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="custom-input-number"
                        className="w-full text-gray-700 text-sm font-semibold"
                      >
                        Bathroom
                      </label>
                      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                        <span
                          onClick={() => setbathCount((count) => count - 1)}
                          className="text-center bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                        >
                          <span className=" m-auto text-2xl font-thin">−</span>
                        </span>
                        <input
                          type="number"
                          className="outline-none focus:outline-none text-center w-full border font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                          name="bath"
                          value={(propInput.bath = bathcount)}
                          onChange={(e) => handleChange(e)}
                        ></input>
                        <span
                          onClick={() => setbathCount((count) => count + 1)}
                          className="text-center bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                        >
                          <span className="m-auto text-2xl font-thin">+</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </fieldset>

                <div className="col-span-6 sm:col-span-6 lg:col-span-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Region
                      </label>

                      <select
                        name="region"
                        onChange={(e) => handleChange(e)}
                        autoComplete="Region"
                        className="px-5 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12"
                      >
                        <option value="accra">
                          Greater Accra Dansoman, Roundabout
                        </option>
                        <option value="ashanti">
                          Ashanti Region Kumasi, Kumasi
                        </option>
                        <option value="volta">Volta Region Ho, Ho Town</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        City
                      </label>
                      <input
                        placeholder="Dansoman"
                        onChange={(e) => handleChange(e)}
                        type="text"
                        name="city"
                        autoComplete="city"
                        className="px-5 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Locality
                      </label>
                      <input
                        placeholder="Roundabout"
                        onChange={(e) => handleChange(e)}
                        type="text"
                        name="town"
                        id="postal-code"
                        autoComplete="street"
                        className="px-5 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className=" px-4 py-3 text-left sm:px-6 gap-5 grid justify-items-end">
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
  );
}

export default ThreeStep;

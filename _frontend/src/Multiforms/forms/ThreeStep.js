import React, { useState, useContext } from "react";
import "../form.scss";
import { Mformcontext } from "../../views/payload/Payload";
// import "../scrpt.js";

function ThreeStep({ next, handleChange }) {
  const { propInput } = useContext(Mformcontext);
  console.log(propInput);
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
    <div className="">
      {/* <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Basic Information
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Provide us with basic information about your property
          </p>
        </div>
      </div> */}
      <div className=" md:mt-0 shadow sm:rounded-md bg-white p-5 mb-20">
        <form action="">
          <div className="overflow-hidden ">
            <div className=" ">
              <div className=" flex flex-col gap-6 w-full">
                <div className="">
                  <div className="">
                    <div className="w-full">
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

                <div className="w-full">
                  <div className="flex flex-col gap-6">
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

                <fieldset>
                  <div className="grid grid-cols-4 gap-6">
                    <div className="grid grid-rows-2 gap-6">
                      {" "}
                      <div>
                        <label
                          htmlFor="custom-input-number"
                          className="w-full text-gray-700 text-sm font-semibold"
                        >
                          Bedroom
                        </label>
                        <div className="flex flex-row h-12 w-full rounded-lg relative bg-transparent mt-1">
                          <span
                            onClick={() => setbedCount((count) => count - 1)}
                            className="text-center flex justify-center items-center bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                          >
                            <span className=" m-auto text-2xl font-thin">
                              <svg
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                height="16px"
                                width="16px"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
                                />
                              </svg>
                            </span>
                          </span>
                          <input
                            type="number"
                            className=" focus:outline-none text-center w-full border border-gray-200 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                            name="beds"
                            value={(propInput.beds = bedcount)}
                            onChange={(e) => handleChange(e)}
                          ></input>
                          <span
                            onClick={() => setbedCount((count) => count + 1)}
                            className="flex justify-center items-center text-center bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                          >
                            <span className=" text-2xl font-thin">
                              <svg
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                height="16px"
                                width="16px"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z"
                                />
                              </svg>
                            </span>
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
                        <div className="flex flex-row h-12 w-full rounded-lg relative bg-transparent mt-1">
                          <span
                            onClick={() => setbathCount((count) => count - 1)}
                            className="flex justify-center items-center text-center bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                          >
                            <span className=" m-auto text-2xl font-thin">
                              {" "}
                              <svg
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                height="16px"
                                width="16px"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
                                />
                              </svg>
                            </span>
                          </span>
                          <input
                            type="number"
                            className=" focus:outline-none text-center w-full border border-gray-200 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                            name="bath"
                            value={(propInput.bath = bathcount)}
                            onChange={(e) => handleChange(e)}
                          ></input>
                          <span
                            onClick={() => setbathCount((count) => count + 1)}
                            className=" flex justify-center items-center text-center bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                          >
                            <span className="m-auto text-2xl font-thin">
                              {" "}
                              <svg
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                height="16px"
                                width="16px"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z"
                                />
                              </svg>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </form>
        <div className="mt-6 flex justify-end">
          <div>
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
        </div>
      </div>
    </div>
  );
}

export default ThreeStep;

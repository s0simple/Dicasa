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
    <div className="  h-full  px-2 mt-4  overflow-hidden">
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
      <div className=" md:mt-0    sm:rounded-md mb-20">
        <form action="">
          <div className="  ">
            <div className=" ">
              <div className=" flex flex-col gap-6 w-full">
                <div className="">
                  <div className="">
                    <div className="w-full">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Title of Property
                      </label>
                      <input
                        placeholder="Example.. Laxirious 3 bedroom Apartment for sale at Dansoman near roundabout "
                        type="text"
                        name="name"
                        autoComplete="name"
                        onChange={(e) => handleChange(e)}
                        className="h-14 px-5 mt-2 block w-full rounded-md border-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex flex-col gap-6">
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Region
                      </label>

                      <select
                        name="region"
                        onChange={(e) => handleChange(e)}
                        autoComplete="Region"
                        className="px-5 mt-2 block w-full rounded-md border-2 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-14"
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
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        City
                      </label>
                      <input
                        placeholder="Dansoman"
                        onChange={(e) => handleChange(e)}
                        type="text"
                        name="city"
                        autoComplete="city"
                        className="px-5 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-14"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-semibold leading-6 text-gray-900"
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
                        className="px-5 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-14"
                      />
                    </div>
                  </div>
                </div>

                <fieldset>
                  <div className="w-[50%]">
                    <div className="flex gap-10">
                      {" "}
                      <div>
                        <label
                          htmlFor="custom-input-number"
                          className="w-full text-gray-700 text-sm font-semibold"
                        >
                          Bedroom
                        </label>
                        <div className="flex flex-row h-12 w-full rounded-lg relative bg-transparent mt-2">
                          <span
                            onClick={() => setbedCount((count) => count - 1)}
                            className="flex  justify-center items-center text-center bg-gray-900 text-gray-100 hover:text-gray-100 hover:bg-gray-400 h-14 w-20 rounded-l cursor-pointer"
                          >
                            <span className=" m-auto text-2xl font-thin">
                              <p class="font-medium text-2xl">-</p>
                            </span>
                          </span>
                          <input
                            type="number"
                            className=" px-5 text-center  block w-full  border-0 py-1.5 text-gray-900 font-semibold ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:leading-6 h-14"
                            name="beds"
                            value={(propInput.beds = bedcount)}
                            onChange={(e) => handleChange(e)}
                          ></input>
                          <span
                            onClick={() => setbedCount((count) => count + 1)}
                            className="flex  justify-center items-center text-center bg-gray-900 text-gray-100 hover:text-gray-100 hover:bg-gray-400 h-14 w-20 rounded-r cursor-pointer"
                          >
                            <span className=" text-2xl font-thin ">
                              <p class="font-medium text-2xl">+</p>
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
                        <div className="flex flex-row h-12 w-full rounded-lg relative bg-transparent mt-2">
                          <span
                            onClick={() => setbathCount((count) => count - 1)}
                            className="flex  justify-center items-center text-center bg-gray-900 text-gray-100 hover:text-gray-100 hover:bg-gray-400 h-14 w-20 rounded-l cursor-pointer"
                          >
                            <span className=" m-auto text-2xl font-bold">
                              <p class="font-medium text-2xl">-</p>
                            </span>
                          </span>
                          <input
                            type="number"
                            className=" px-5 text-center  block w-full  border-0 py-1.5 text-gray-900 font-semibold ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:leading-6 h-14"
                            name="bath"
                            value={(propInput.bath = bathcount)}
                            onChange={(e) => handleChange(e)}
                          ></input>
                          <span
                            onClick={() => setbathCount((count) => count + 1)}
                            className=" flex  justify-center text-2xl items-center text-center bg-gray-900 text-gray-100 hover:text-gray-100 hover:bg-gray-400 h-14 w-20 rounded-r cursor-pointer"
                          >
                            <span className="m-auto text-2xl bold">
                              <p class="font-medium text-2xl">+</p>
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

        <div className="absolute bottom-0 right-0">
          <button
            onClick={next()}
            class="inline-flex items-center  px-6 py-3 text-white font-semibold bg-indigo-600 rounded-md shadow-sm"
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
  );
}

export default ThreeStep;

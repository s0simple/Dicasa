import React, { useState, useContext } from "react";
import "../form.scss";
import CurrencyInput from "react-currency-input-field";
import { Mformcontext } from "../../views/payload/Payload";

function OneStep({ next, prev, handleChange }) {
  const [showmonth, setShowMonth] = useState(false);
  const [currencypref, setcurrencypref] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const { propInput } = useContext(Mformcontext);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // console.log(propInput);

  const permonth = () => {
    return setShowMonth(true);
  };
  return (
    <div className="">
      {/* <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Terms
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>
        </div>
      </div> */}
      <div className="md:mt-0 shadow sm:rounded-md bg-white p-5 mb-20">
        <form action="">
          <div className=" sm:overflow-hidden ">
            <div className="">
              {/* tryyyyy */}

              <ul className="flex flex-cols w-full   ">
                <li className="relative">
                  <input
                    className="sr-only peer"
                    type="radio"
                    value="sale"
                    name="offer"
                    id="sale"
                    checked={propInput.offer === "sale"}
                    onChange={(e) => handleChange(e)}
                  />
                  <label
                    className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent"
                    htmlFor="sale"
                    onClick={() => setShowMonth(false)}
                  >
                    Sale
                  </label>

                  {/* <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                    i
                  </div> */}
                </li>
                <li className="relative">
                  <input
                    className="sr-only peer"
                    type="radio"
                    value="rent"
                    name="offer"
                    id="rent"
                    checked={propInput.offer === "rent"}
                    onChange={(e) => handleChange(e)}
                  />
                  <label
                    className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent"
                    htmlFor="rent"
                    onClick={() => setShowMonth(true)}
                  >
                    Rent
                  </label>
                </li>
              </ul>
              <div className="mt-6">
                <label
                  htmlFor="company-website"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Price
                </label>

                <div className=" rounded-md shadow-sm">
                  <div className="flex">
                    <select
                      name=""
                      id=""
                      className="text-center   ring-1 ring-inset ring-gray-300 shadow-sm mt-2 h-12 inline-flex items-center rounded-l-md border-0 border-r-0  px-3 text-gray-500 sm:text-sm"
                    >
                      <option
                        onClick={() => setcurrencypref(true)}
                        value="GHC"
                        className="text-center"
                      >
                        GHC
                      </option>
                      <option
                        onClick={() => setcurrencypref(false)}
                        value="USD"
                      >
                        USD
                      </option>
                    </select>

                    <div className="relative mt-2 w-full">
                      <input
                        // prefix={currencypref ? "$" : "₵"}
                        type="number"
                        // className="border px-5 py-4  w-full  h-12 "
                        className="h-12 px-5 w-full border-l-0 rounded-r-md  block   border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="price"
                        placeholder="Please enter a number"
                        defaultValue={1000}
                        // decimalsLimit={2}
                        onChange={(e) => handleChange(e)}
                      />

                      <div className="absolute inset-y-0 right-0 flex items-center">
                        <label htmlFor="currency" className="sr-only">
                          Price
                        </label>

                        <div className="rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                          {showmonth ? <p>/ Month</p> : <p></p>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-cols gap-5 mt-6">
                {/* <div className="">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Advance deposit
                    </label>
                    <CurrencyInput
                      prefix={currencypref ? "$" : "₵"}
                      className="px-5 h-12 mt-2 block w-[150px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                      id="input-example"
                      name="Advance_Depo"
                      placeholder="Please enter a number"
                      defaultValue={1000}
                      decimalsLimit={2}
                      onChange={(e) => handleChange(e)}
                    />
                    <Input
                      prefix={currencypref ? "$" : "₵"}
                      className="px-5 h-12 mt-2 block w-[150px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                      id="input-example"
                      name="Advance_Depo"
                      placeholder="Please enter a number"
                      defaultValue={1000}
                      decimalsLimit={2}
                      onChange={(e) => handleChange(e)}
                    />

                  
                  </div> */}

                <div className="w-full">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Duration
                  </label>
                  <select
                    onChange={(e) => handleChange(e)}
                    name="advance"
                    id="advance"
                    className="dropdown  border-0 ring-1 ring-inset ring-gray-300 mt-2 h-12 w-full rounded-md  bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  >
                    <option className="" value="1 Month">
                      1 Month
                    </option>
                    <option value="3 Months" className="">
                      3 Months
                    </option>
                    <option value="6 Months">6 Months</option>
                    <option value="1 year">1 year</option>
                    <option value="2 years">2 years</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="mt-10 w-full flex justify-between">
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
      </div>
    </div>
  );
}

export default OneStep;

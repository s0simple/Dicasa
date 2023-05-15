import React, { useState, useContext } from "react";
import "../form.css";
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
    <div className="md:grid md:grid-cols-4 md:gap-6 mt-5">
      <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Terms
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>
        </div>
      </div>
      <div className="mt-5 md:col-span-3 md:mt-0 sm:rounded-md shadow bg-white">
        <form action="">
          <div className=" sm:overflow-hidden ">
            <div className="space-y-6  px-4 py-5 sm:p-6">
              {/* tryyyyy */}

              <ul className="grid grid-cols-3 gap-x-5 m-10 max-w-md mx-auto">
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

                <div className="col-span-3 sm:col-span-3 mt-10">
                  <label
                    htmlFor="company-website"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Price
                  </label>

                  <div className="mt-2  rounded-md shadow-sm">
                    <div className="flex">
                      <select
                        name=""
                        id=""
                        className="text-center shadow-sm mt-2 h-12 inline-flex items-center rounded-l-md border border-r-0  px-3 text-gray-500 sm:text-sm"
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

                      <div className="relative mt-2 rounded-md shadow-sm ">
                        <input
                          // prefix={currencypref ? "$" : "₵"}
                          type="number"
                          className="border px-5 py-4 rounded-r-md  h-12 "
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

                <div className="flex gap-5 mt-10">
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
                  <div className="">
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
                      className="dropdown mt-2 h-12 rounded-md border bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
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
              </ul>
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

export default OneStep;

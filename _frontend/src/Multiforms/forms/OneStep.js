import React, { useState, useContext, Fragment, useEffect } from "react";
import "../form.scss";
import CurrencyInput from "react-currency-input-field";
import { Mformcontext } from "../../views/payload/Payload";
import { RadioGroup } from "@headlessui/react";
import "./fiveStep.scss";

const plans = ["Rent", "Sale"];

function OneStep({ next, prev, handleChange }) {
  const [showmonth, setShowMonth] = useState(false);
  const [currencypref, setcurrencypref] = useState(false);
  const [checked, setChecked] = useState("rent");
  let [plan, setPlan] = useState(0);
  const { propInput } = useContext(Mformcontext);

  useEffect(() => {
    const fetch = () => {
      let data = propInput;
      return data;
    };

    fetch();
  }, [propInput]);

  const isRadioSelected = (value) => {
    return propInput.offer === value;
  };

  propInput.offer = plans[plan];

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

      <div className=" h-full   mt-4  overflow-hidden ">
        <form action="">
          <div className="  ">
            <div className="flex flex-col gap-y-6">
              {/* radio switch */}
              <div className="w-full ">
                <p className="block text-sm font-medium leading-6 text-gray-900">
                  Offer:
                </p>
                <RadioGroup value={plan} onChange={setPlan}>
                  {/* <RadioGroup.Label className="">
              <p className="flex flex-col items-center text-gray-500 ">
                Please Select a picture to use as main
              </p>
            </RadioGroup.Label> */}
                  <div className=" flex items-center gap-2 mt-2">
                    {plans.map((item, index) => (
                      <RadioGroup.Option
                        key={index}
                        value={index}
                        as={Fragment}
                      >
                        {({ checked }) => (
                          <div
                            type="button"
                            className=" ring-2 ring-inset ring-gray-400 rounded-lg  transform active:scale-95 transition-transform"
                          >
                            <span
                              className={
                                checked
                                  ? "ring-blue-500 ring-2 text-blue-500 font-semibold rounded-lg ring-inset shadow-lg bg-gray-100 cursor-pointer relative flex items-center gap-2"
                                  : "  overflow-hidden rounded-lg  shadow-lg cursor-pointer"
                              }
                            >
                              <div className="font-medium py-8 px-16 ">
                                for {item}
                              </div>
                              <div className="absolute top-0 right-0 p-2 forPhotos">
                                <label class="checkbox">
                                  <input type="checkbox" readOnly />
                                </label>
                              </div>

                              {checked && (
                                <div className="absolute top-0 right-0 p-2 forPhotos">
                                  <label class="checkbox bounce">
                                    <input type="checkbox" checked readOnly />
                                    <svg viewBox="0 0 21 21">
                                      <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                                    </svg>
                                  </label>
                                </div>
                              )}
                            </span>
                          </div>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
              {/* price section*/}

              <div className="">
                <label
                  htmlFor="company-website"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Price:
                </label>

                <div className=" rounded-md ">
                  <div className="flex mt-2 ring-1 ring-inset  ring-gray-400 focus:ring-indigo-600 rounded-md">
                    <select
                      name=""
                      id=""
                      className="px-5  block w-[10%]   border-l-1 py-1.5 text-gray-900   placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 h-14"
                    >
                      <option value="GHC" className="text-center">
                        GHC
                      </option>
                      <option value="USD" className="text-center">
                        USD
                      </option>
                    </select>

                    <div className="relative  w-full">
                      <input
                        // prefix={currencypref ? "$" : "₵"}
                        type="number"
                        // className="border px-5 py-4  w-full  h-12 "
                        className=" px-5  block w-full rounded-r-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-14"
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
              {/* duration */}
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
                  className=" px-5 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-14"
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
        </form>
        <div className=" w-full flex justify-between  absolute bottom-0">
          <button
            onClick={prev()}
            class="inline-flex items-center px-6 py-3  text-gray-500 border-gray-300 bg-gray-200 border font-semibold  rounded-md shadow-sm"
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
            class="inline-flex items-center  px-6 py-3 text-white font-semibold bg-blue-700 rounded-md shadow-sm "
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

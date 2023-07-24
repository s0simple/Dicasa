import axios from "axios";
import React, { useEffect, useState, Fragment } from "react";
import { RadioGroup } from "@headlessui/react";
import { BsCheckCircleFill } from "react-icons/bs";
import { CheckIcon } from "@heroicons/react/20/solid";
import "./fiveStep.scss";
import { arrayMoveMutable } from "array-move";
import { useNavigate } from "react-router-dom";

// const plans = [
//   { id: 1, name: "Startup" },
//   { id: 2, name: "Business" },
//   { id: 3, name: "Enterprise" },
// ];

const FiveStep = ({ next }) => {
  const [files, setfiles] = useState([]);
  const [plan, setPlan] = useState(0);
  const [planURL, setPlanURL] = useState({});
  const [selectedfile, setSelectedfile] = useState([]);
  const [newarr, setNewarray] = useState([]);

  const listingsID = JSON.parse(localStorage.getItem("Listings_ID"));
  // useEffect(() => {
  //   const fetchdata = async () => {
  //     await axios
  //       .get(`http://localhost:5000/uploader/getmultipleFile/${listingsID}`)
  //       .then((fetch) => {
  //         setfiles(() => fetch.data.response);

  //         // setIsLoading(false);
  //       });
  //   };
  //   fetchdata();
  // }, []);

  useEffect(() => {
    const fetchdata = async () => {
      await axios
        .get(`http://localhost:5000/uploader/getmultipleFile/${listingsID}`)
        .then((fetch) => {
          setfiles(() => fetch.data);
        });
    };
    fetchdata();
  }, []);

  function comparePlans(a, b) {
    return a.name.toLowerCase() === b.name.toLowerCase();
  }

  const MoveArrayIndex = async (currentIndex) => {
    let arr = files;

    const fromIndex = currentIndex; // 👉️ 0
    const toIndex = 0;

    arrayMoveMutable(arr, fromIndex, toIndex);

    console.log(arr[0]);
    // return err

    const productID = JSON.parse(localStorage.getItem("Listings_ID"));
    await axios
      .post(`http://localhost:5000/listings/uploadsingle/${productID}`, arr[0])
      .then(() => {
        setTimeout(next(), 3000);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="shadow bg-white p-6 rounded">
      <div>
        <div className="flex flex-col items-center   ">
          <RadioGroup value={plan} onChange={setPlan}>
            <RadioGroup.Label className="">
              <p className="flex flex-col items-center text-gray-500 ">
                Please Select a picture to use as main
              </p>
            </RadioGroup.Label>
            <div className="mt-10 flex items-center gap-4 ">
              {files.map((item, index) => (
                <RadioGroup.Option key={index} value={index} as={Fragment}>
                  {({ checked }) => (
                    <div
                      type="button"
                      className="ring-slate-100 ring-2 rounded ring-offset-1 transform active:scale-95 transition-transform"
                    >
                      <span
                        className={
                          checked
                            ? "ring-blue-500 ring rounded ring-offset-2 shadow-lg bg-white cursor-pointer relative flex items-center gap-2"
                            : "  overflow-hidden rounded-lg  shadow-lg cursor-pointer"
                        }
                      >
                        <img
                          src={`http://localhost:5000/${item.filePath}`}
                          alt=""
                          className="object-cover w-48 h-48 shadow-lg rounded"
                        />

                        {checked && (
                          <div className="absolute top-0 right-0 p-2 forPhotos">
                            {/* <BsCheckCircleFill size={24} /> */}
                            <label class="checkbox bounce">
                              <input type="checkbox" checked readOnly />
                              <svg viewBox="0 0 21 21">
                                <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                              </svg>
                              {setPlanURL(() => item)}
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
        <div className="mt-10">
          <div className="w-full flex justify-center">
            <div className="">
              <button
                onClick={() => MoveArrayIndex(plan)}
                class="inline-flex items-center  px-6 py-3 text-white font-semibold bg-green-600 hover:bg-green-700 rounded-md shadow-sm"
              >
                <span>Yes! Use this photo</span>
                {/* <svg class="ml-3 w-5 h-5" fill="currentColor" viewBox="0 0 22 22">
              <path
                fill-rule="evenodd"
                d="M18.59 13H3a1 1 0 010-2h15.59l-5.3-5.3a1 1 0 111.42-1.4l7 7a1 1 0 010 1.4l-7 7a1 1 0 01-1.42-1.4l5.3-5.3z"
                clip-rule="evenodd"
              ></path>
            </svg> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiveStep;

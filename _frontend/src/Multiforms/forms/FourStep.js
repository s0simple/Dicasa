import React, { useContext, useState } from "react";
import { Mformcontext } from "../../views/payload/Payload";
import avater from "../../assets/avatar-1577909_1280.webp";
import axios from "axios";

function FourStep({ next, prev, handleChange }) {
  const { propInput } = useContext(Mformcontext);
  const [imageURL, setimageURL] = useState(avater);
  const [image, setImage] = useState(null);

  const onChangePicture = (e) => {
    setimageURL(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const productID = JSON.parse(localStorage.getItem("Listings_ID"));
  console.log(productID);

  const getFileInfo = async () => {
    const formData = new FormData();
    formData.append("Image", image);
    formData.append("Listings", productID);

    await axios
      .post("http://localhost:5000/listings/upload", formData)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="md:grid md:grid-cols-4 md:gap-6 mt-5">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Add some images
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Provide us with basic information about your property
            </p>
          </div>
        </div>
        <div className="mt-5 sm:rounded-md shadow bg-white md:col-span-3 md:mt-0">
          <form action="">
            <div className=" sm:overflow-hidden ">
              <div className="space-y-6  px-4 py-5 sm:p-6">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Main Image
                </label>

                <div className="flex items-center space-x-6">
                  <div className="shrink-0">
                    <img
                      className="h-32 w-32 object-fill rounded-md"
                      src={imageURL}
                      alt="Current profile photo"
                    />
                  </div>
                  <label className="block">
                    <span
                      onClick={() => setimagechange(true)}
                      className="sr-only"
                    >
                      Choose profile photo
                    </span>
                    <input
                      name={"image"}
                      onChange={(e) => onChangePicture(e)}
                      type="file"
                      className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
                    />
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Cover photo
                  </label>
                  <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
          </form>
        </div>
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
              onClick={getFileInfo}
              type="submit"
              className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourStep;

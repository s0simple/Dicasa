import React, { useCallback, useContext, useState, Fragment } from "react";
import { Mformcontext } from "../../views/payload/Payload";
import avater from "../../assets/avatar-1577909_1280.webp";
import axios from "axios";
import DropBox from "./DropBox";
import { Dialog, Transition } from "@headlessui/react";

import { singleFileUpload, multipleFileUpload } from "../../api";
import { Line, Circle } from "rc-progress";
import { v4 as uuid } from "uuid";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DropImage = ({ image, idd, images, setimages, files, setFiles }) => {
  const handleClickDelete = (id) => {
    // console.log(id);
    // setDeleteId(id);
    const newdata = images.filter((e, index) => {
      return index !== id;
    });
    setimages(() => newdata);
    const newfileset = files.filter((e, index) => {
      return index !== id;
    });
    setFiles(() => newfileset);
  };

  return (
    <div className="mt-5">
      <div
        class="relative bg-cover rounded bg-bottom h-80 md:h-48 w-64 text-white text-lg text-right"
        style={{
          backgroundImage: `url(${image.src})`,
        }}
      >
        <div className=" w-full h-full bg-black  opacity-20 p-3 rounded"></div>
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          height="2em"
          width="2em"
          className=" cursor-pointer absolute top-0  right-0 hover:text-red-400 p-1"
          onClick={() => handleClickDelete(idd)}
        >
          <path d="M20 6.91L17.09 4 12 9.09 6.91 4 4 6.91 9.09 12 4 17.09 6.91 20 12 14.91 17.09 20 20 17.09 14.91 12 20 6.91z" />
        </svg>
      </div>
    </div>
  );
};

const ShowImage = ({ images, setimages, files, setFiles }) => {
  const show = (image, index) => {
    return (
      <div key={index}>
        <DropImage
          image={image}
          idd={index}
          images={images}
          files={files}
          setFiles={setFiles}
          setimages={setimages}
        />
      </div>
    );
  };
  return (
    <div
      className=" flex flex-wrap gap-2
  "
    >
      {images.map(show)}
    </div>
  );
};

function FourStep({ next, prev, step, steps, setstep, handleChange }) {
  const { propInput } = useContext(Mformcontext);
  const [imageURL, setimageURL] = useState(avater);
  const [images, setImages] = useState([]);
  const [submitting, setsubmitting] = useState(true);
  const [multiPhotoProgress, setmultiPhotoProgress] = useState("");
  const [showprogress, setshowprogress] = useState(false);
  const [files, setFiles] = useState([]);
  let [isOpen, setIsOpen] = useState(false);
  // const [listingsID, setlistingsID] = useState

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file, index) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: index, src: e.target.result },
        ]);
      };

      // console.log(file);
      reader.readAsDataURL(file);

      // let dee = [];
      // dee.push(file);

      // setFiles((prev) => [{ file }]);

      // console.log(typeof files);

      console.log(acceptedFiles);

      setFiles((prevState) => [...prevState, file]);

      return file;
    });

    // console.log(acceptedFiles);
  }, []);

  const uploadMultipleFile = async () => {
    setIsOpen(true);
    setshowprogress(true);
    // setIsOpen(true);
    // console.log(multipleFiles);
    setsubmitting(false);
    const listingsID = JSON.parse(localStorage.getItem("Listings_ID"));
    const formData = new FormData();
    formData.append("listing_ID", listingsID);

    for (let i = 0; i < files.length; i++) {
      // const element = array[i];
      formData.append("files", files[i]);
    }
    await multipleFileUpload(formData, multiFileOptions);
    setTimeout(next(), 3000);
  };

  const multiFileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      let percentage = Math.floor((loaded * 100) / total);
      console.log(`${loaded}kb of ${total}kb | ${percentage}%`);

      if (total > 135) {
        setshowprogress(true);
        setmultiPhotoProgress(percentage);
      }
    },
  };

  // const trynew = () => {
  //   console.log(files);
  //   console.log(images);
  // };
  const percentage = 66;

  const submission = () => {
    return (
      <ul className="max-w-md space-y-2 text-gray-500 list-inside dark:text-gray-400">
        <li class="flex items-center">
          <div role="status">
            <svg
              aria-hidden="true"
              class="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
          Uploading...
        </li>
      </ul>
    );
  };

  const onChangePicture = (e) => {
    // setimageURL(URL.createObjectURL(e.target.files));
    // setImage(e.target.files);
    console.log(e.target.files);
  };

  const productID = JSON.parse(localStorage.getItem("Listings_ID"));
  // console.log(images);

  const getFileInfo = async () => {
    const formData = new FormData();
    formData.append("Image", images);
    formData.append("Listings", productID);
    await axios
      .post("http://localhost:5000/listings/upload", formData)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const uploaddialog = () => {
    return isOpen;
  };
  return (
    <div>
      <div className="flex flex-col gap-6 mt-5">
        <div className="mt-5 sm:rounded-md  md:col-span-3 md:mt-0 p-5">
          <DropBox onDrop={onDrop} />
          <div className="flex flex-col text-center justify-center items-center">
            {images.length != 0 && (
              <button
                onClick={() => uploadMultipleFile()}
                class="inline-flex items-center  px-6 py-3 text-white font-semibold bg-green-700 rounded-md shadow-sm"
              >
                <span>{submitting ? "Upload" : submission()}</span>
              </button>
            )}

            <ShowImage
              images={images}
              setimages={setImages}
              files={files}
              setFiles={setFiles}
            />
          </div>

          <div className=" ">
            <Dialog
              open={isOpen}
              onClose={() => setIsOpen(false)}
              className="relative z-50"
            >
              {/* The backdrop, rendered as a fixed sibling to the panel container */}
              <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

              {/* Full-screen container to center the panel */}
              <div className="fixed inset-0 flex items-center justify-center p-4">
                {/* The actual dialog panel  */}
                <Dialog.Panel className="mx-auto max-w-sm rounded">
                  <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar
                      value={multiPhotoProgress}
                      text={`${multiPhotoProgress}%`}
                      styles={{
                        // Customize the root svg element
                        root: {},
                        // Customize the path, i.e. the "completed progress"
                        path: {
                          // Path color
                          stroke: `rgba(62, 152, 199, ${
                            multiPhotoProgress / 100
                          })`,
                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: "butt",
                          // Customize transition animation
                          transition: "stroke-dashoffset 0.5s ease 0s",
                          // Rotate the path
                          transform: "rotate(0.25turn)",
                          transformOrigin: "center center",
                        },
                        // Customize the circle behind the path, i.e. the "total progress"
                        trail: {
                          // Trail color
                          stroke: "#d6d6d6",
                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: "butt",
                          // Rotate the trail
                          transform: "rotate(0.25turn)",
                          transformOrigin: "center center",
                        },
                        // Customize the text
                        text: {
                          // Text color
                          fill: "#fffff",
                          // Text size
                          fontSize: "16px",
                        },
                        // Customize background - only used when the `background` prop is true
                        background: {
                          fill: "#00000",
                        },
                      }}
                    />
                  </div>
                </Dialog.Panel>
              </div>
            </Dialog>
          </div>

          <div className="mt-10 w-full text-center justify-between">
            <button
              onClick={() => setIsOpen(!isOpen)}
              class="inline-flex items-center px-6 py-3 text-gray-500 border-gray-300 bg-gray-200 border font-semibold  rounded-md shadow-sm"
            >
              dialogg
            </button>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourStep;

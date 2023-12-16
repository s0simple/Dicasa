import React, { useEffect, useState } from "react";
import { Loader } from "../../components";
import "./charts.css";
import { singleFileUpload, multipleFileUpload } from "../../api";
// import { Progress } from "react-sweet-progress";
// import "react-sweet-progress/lib/style.css";
// import { Line, Circle } from "rc-progress";

function Charts() {
  const [singleFile, setsingleFile] = useState("");
  const [multipleFiles, setMultipleFiles] = useState("");
  const [loading, setloading] = useState(false);
  const [showprogress, setshowprogress] = useState(false);
  const [photoprogress, setphotoprogress] = useState(0);
  const [multiPhotoProgress, setmultiPhotoProgress] = useState("");

  // useEffect(() => {
  //   first;

  //   return () => {
  //     second;
  //   };
  // }, [third]);

  const singleFileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      let percentage = Math.floor((loaded * 100) / total);
      console.log(`${loaded}kb of ${total}kb | ${percentage}%`);

      if (total > 135) {
        setshowprogress(true);
        setphotoprogress(percentage);
      }
    },
  };

  // const singleFileOptions = {
  //   onUploadProgress: (progressEvent) => {
  //     const { loaded, total } = progressEvent;
  //     const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
  //     setphotoprogress(percentage);
  //   },
  // };
  // const singleFileOptions = {
  //   onUploadProgress: (progressEvent) => console.log(progressEvent.loaded),
  // };

  console.log(photoprogress);

  const multiFileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
    },
  };

  const singleFileChange = (e) => {
    setsingleFile(e.target.files[0]);
  };

  const multipleFilesChange = (e) => {
    setMultipleFiles(e.target.files);
  };

  const uploadSingleFile = async () => {
    // console.log(singleFile);
    const formData = new FormData();
    formData.append("file", singleFile);
    await singleFileUpload(formData, singleFileOptions);
  };

  const uploadMultipleFile = async () => {
    // console.log(multipleFiles);
    const formData = new FormData();

    for (let i = 0; i < multipleFiles.length; i++) {
      // const element = array[i];
      formData.append("files", multipleFiles[i]);
    }
    console.log(multipleFiles);
    await multipleFileUpload(formData, multiFileOptions);
  };

  if (loading) {
    return (
      <div className="">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="bg-white shadow rounded p-5">
        <div className=" flex justify-between gap-5 form-wrapper">
          <div className="flex flex-col">
            <div className="">
              <div className="label">single file</div>
              <input type="file" onChange={(e) => singleFileChange(e)} />
            </div>
            <div>
              <button
                className="bg-blue-500 mt-2 py-2 px-6 text-white"
                onClick={() => uploadSingleFile()}
              >
                Upload
              </button>
            </div>

            {showprogress && (
              <div className="mt-5">
                {/* <Progress percent={photoprogress} strokeWidth={1} /> */}
                {/* <Line
                  percent={photoprogress}
                  strokeWidth={1}
                  strokeColor="#0577e3"
                />{" "} */}
                <p>loading...</p>
              </div>
            )}
          </div>

          <div className="flex flex-col ">
            <div className="">
              <div className="label">multiple files</div>
              <input
                type="file"
                onChange={(e) => multipleFilesChange(e)}
                multiple
              />
            </div>
            <button
              className="bg-blue-500 mt-2 py-2 px-6 text-white"
              onClick={() => uploadMultipleFile()}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charts;

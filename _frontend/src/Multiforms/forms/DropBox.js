import { useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
const getColor = (props) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isFocused) {
    return "#2196f3";
  }
  return "#d1d5db";
};
const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border-width: 2px;
  border-radius: 10px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: transparent;
  color: black;
  font-weight: bold;
  font-size: 1.4rem;
  outline: none;
  transition: border 0.24s ease-in-out;
`;
function DropBox({ onDrop }) {
  const [imageSent, setImageSent] = useState([]);
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    open,
    isDragActive,
    isDragAccept,
    isFocused,
    isDragReject,
  } = useDropzone({
    accept: { "image/*": [".jpeg", ".jpg", ".png"] },
    onDrop,
    noClick: true,
    noKeyboard: true,
  });
  const lists = acceptedFiles.map((list) => (
    <div className="shadow-sm p-2 text-sm rounded text-gray-500 border-b max-w-sm pl-2 ">
      <li className="" key={list.path}>
        {list.path} - {list.size} bytes
      </li>
    </div>
  ));

  const handleFile = (e) => {
    setImageSent(e.target.files[0]);
  };

  const uploadMultipleFile = async () => {
    console.log(imageSent);
    // const formData = new FormData();

    // for (let i = 0; i < images.length; i++) {
    //   // const element = array[i];
    //   formData.append("files", images[i]);
    // }
    // await multipleFileUpload(formData, multiFileOptions);
  };

  const uploadFiles = () => {
    const formData = new FormData();

    // formData.append('image', imageSent);
    // formData.append('key', 'Your Api key goes here');
    // Axios.post('https://api.imgbb.com/1/upload', formData).then((response) => {
    //   console.log(response);
    // });
  };

  return (
    <>
      {" "}
      <section className="dropbox ">
        <Container
          className="dropbox mb-4"
          {...getRootProps({ isDragAccept, isFocused, isDragReject })}
        >
          <input
            {...getInputProps({
              onChange: handleFile,
            })}
          />
          <button
            type="button"
            className="w-64 flex flex-col  items-center text-blue-500 px-4 py-6  rounded-lg shadow-lg tracking-wide  border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white"
            onClick={open}
          >
            <svg
              className="mx-auto h-12 w-12 "
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
            Choose a file
          </button>
          <p className="text-sm mt-5 font-normal ">
            {isDragActive ? (
              <p className="dropzone-content">Release to drop the files here</p>
            ) : (
              <p className="dropzone-content">
                Drag’n’drop some files here, or click to select files
              </p>
            )}
          </p>
          <p className="text-xs font-medium text-gray-500 ">
            PNG, JPG, GIF up to 10MB
          </p>
        </Container>
      </section>
      <aside>
        <div className="mt-5">
          {/* <Progress percent={photoprogress} strokeWidth={1} /> */}
        </div>
        {/* <h4 className=" ">List</h4> */}
        {/* <p className="my-5">{lists}</p> */}
      </aside>
    </>
  );
}
export default DropBox;

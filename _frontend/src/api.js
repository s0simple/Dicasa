import axios from "axios";

const apiURL = "http://localhost:5000/uploader/";

export const singleFileUpload = async (data, options) => {
  try {
    await axios.post(apiURL + "singleFile", data, options);
  } catch (error) {
    throw error;
  }
};

export const multipleFileUpload = async (data, option) => {
  try {
    await axios.post(apiURL + "multipleFile", data, option);
  } catch (error) {
    throw error;
  }
};

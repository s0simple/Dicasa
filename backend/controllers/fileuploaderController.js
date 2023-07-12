"use strict";

const singleFileUpload = require("../models/singleFileUpload");
const multipleFileUpload = require("../models/multipleUpload");

const SingleFileUpload = async (req, res, next) => {
  try {
    const file = new singleFileUpload({
      fileName: req.file.originalname,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      fileSize: fileSizeFormatter(req.file.size, 2), // 2 = 0.00  if 3 = 0.000 if 4 = 0.0000 and so on
    });

    await file.save();

    res
      .status(201)
      .json({ msg: "File Upload Successfully", value: file, id: file._id });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const MultipleFileUpload = async (req, res, next) => {
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      const file = {
        fileName: element.originalname,
        filePath: element.path,
        fileType: element.mimetype,
        fileSize: fileSizeFormatter(element.size, 2), // 2 = 0.00  if 3 = 0.000 if 4 = 0.0000 and so on
      };
      filesArray.push(file);
    });

    const multiplefiles = new multipleFileUpload({
      listing_ID: req.body.listing_ID,
      files: filesArray,
    });

    await multiplefiles.save();

    res.status(201).json({
      msg: "File Upload Successfully",
      value: multiplefiles,
      id: multiplefiles._id,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return "0 Bytes";
  }

  const dm = decimal || 2;
  const sizes = ["Bytes", "KB", "MB", "BG", "TB", "PB", "EB", "YB", "ZB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));

  return (
    parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + " " + sizes[index]
  );
};

module.exports = {
  SingleFileUpload,
  MultipleFileUpload,
};

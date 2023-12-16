"use strict";
const Listings = require("../models/Properties_Model");
const singleFileUpload = require("../models/singleFileUpload");
const multipleFileUpload = require("../models/multipleUpload");
const cloudinary = require("../services/utils/cloudinary");

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

const cloudyfiles = (path, file) => {
  let something;
  cloudinary.uploader.upload(path, async (err, result) => {
    if (err) return res.status(400).json({ message: "Error uploading file" });

    file.cloudinaryID = result.asset_id;
    file.cloudinaryURL = result.secure_url;
  });
};

const cloudinaryImageUploadMethod = async (file, element) => {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(file, (err, result) => {
      if (err) return res.status(500).send("upload image error");
      resolve({
        // res: res.secure_url,
        fileName: element.originalname,
        filePath: element.path,
        fileType: element.mimetype,
        fileSize: fileSizeFormatter(element.size, 2),
        cloudinaryID: result.asset_id,
        cloudinaryURL: result.secure_url,
        cloudinary_publicID: result.public_id,
      });
    });
  });
};
const MultipleFileUpload = async (req, res, next) => {
  try {
    const urls = [];
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newPath = await cloudinaryImageUploadMethod(path, file);
      urls.push(newPath);
    }

    console.log();

    const multiplefiles = new multipleFileUpload({
      listing_ID: req.body.listing_ID,
      files: urls,
    });

    const multifileId = multiplefiles._id.toString();

    let id = req.body.listing_ID;
    const up_data = {
      photo_gallary: multifileId,
    };

    await multiplefiles.save();

    await Listings.findByIdAndUpdate(id, up_data)
      .then(() => console.log("Profile picture updated successfully"))
      .catch((e) => console.log(e.message));

    res.status(201).json({
      msg: "File Upload Successfully",
      value: multiplefiles,
      id: multiplefiles._id,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
// const MultipleFileUpload = async (req, res, next) => {
//   try {
//     let filesArray = [];
//     req.files.forEach((element) => {
//       const file = {
//         fileName: element.originalname,
//         filePath: element.path,
//         fileType: element.mimetype,
//         fileSize: fileSizeFormatter(element.size, 2),

//         // cloudinaryID: result.asset_id,
//         // cloudinaryURL: result.secure_url,

//         // 2 = 0.00  if 3 = 0.000 if 4 = 0.0000 and so on
//       };
//       cloudinary.uploader.upload(element.path, async (err, result) => {
//         if (err)
//           return res.status(400).json({ message: "Error uploading file" });

//         file.cloudinaryID = result.asset_id;
//         file.cloudinaryURL = result.secure_url;
//         //  const something = {cloudinaryID:result.asset_id,cloudinaryURL:result.secure_url}

//         // console.log(file);
//         filesArray.push(file); //   const newfile = {...file, ...something}
//       });
//     });

//     // console.log(filesArray);

//     const multiplefiles = new multipleFileUpload({
//       listing_ID: req.body.listing_ID,
//       files: filesArray,
//     });

//     const multifileId = multiplefiles._id.toString();

//     let id = req.body.listing_ID;
//     const up_data = {
//       photo_gallary: multifileId,
//     };

//     await multiplefiles.save();

//     await Listings.findByIdAndUpdate(id, up_data)
//       .then(() => console.log("Profile picture updated successfully"))
//       .catch((e) => console.log(e.message));

//     res.status(201).json({
//       msg: "File Upload Successfully",
//       value: multiplefiles,
//       id: multiplefiles._id,
//     });
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };

const getSingleFiles = async (req, res, next) => {
  try {
    const files = await SingleFile.find();
    res.status(200).send(files);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
const getMultipleFiles = async (req, res, next) => {
  const { id } = req.params;

  let data = {
    listing_ID: id,
  };

  await multipleFileUpload
    .find(data)
    .then((response) => res.json(response[0].files))
    .catch((e) => res.send(e.message));
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
  getSingleFiles,
  getMultipleFiles,
};

const express = require("express");
const { upload } = require("../services/utils/multer");
const {
  SingleFileUpload,
  MultipleFileUpload,
  getSingleFiles,
  getMultipleFiles,
} = require("../controllers/fileuploaderController");
const router = express.Router();

router.post("/singleFile", upload.single("file"), SingleFileUpload);
router.post("/multipleFile", upload.array("files"), MultipleFileUpload);
router.get("/getsingleFile", upload.single("file"), getSingleFiles);
router.get("/getmultipleFile/:id", getMultipleFiles);

module.exports = {
  routes: router,
};

const express = require("express");
const { upload } = require("../services/utils/multer");
const {
  SingleFileUpload,
  MultipleFileUpload,
} = require("../controllers/fileuploaderController");
const router = express.Router();

router.post("/singleFile", upload.single("file"), SingleFileUpload);
router.post("/multipleFile", upload.array("files"), MultipleFileUpload);

module.exports = {
  routes: router,
};

const express = require("express");
const router = express.Router();
const Listings = require("../models/Properties_Model");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
// photo upload imports
const cloudinary = require("../services/utils/cloudinary");
const { upload } = require("../services/utils/multer");

require("dotenv").config();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post("/upload", upload.single("Image"), function (req, res, next) {
  // The file is uploaded and stored in the 'uploads' directory
  res.json({ value: req.file });

  const fileURL = req.file.path;

  // Upload the image to Cloudinary
  cloudinary.uploader.upload(req.file.path, async (err, result) => {
    if (err) return res.status(400).json({ message: "Error uploading file" });

    console.log(result);
    console.log(req.body.Listings);

    let id = req.body.Listings;
    up_data = {
      photo_main: result.secure_url,
      image_main: fileURL,
    };

    await Listings.findByIdAndUpdate(id, up_data)
      .then(() => console.log("Profile picture updated successfully"))
      .catch((e) => console.log(e.message));

    // // Update the user's profile picture URL in the database
    // User.findByIdAndUpdate(
    //   req.user._id,
    //   { profilePictureUrl: result.secure_url },
    //   function (err, user) {
    //     if (err)
    //       return res
    //         .status(400)
    //         .json({ message: " Error updating user profile"});

    //     res.json({ message: "Profile picture updated" });
    //   }
    // );
  });
});

// get ALL listings
router.get("/", async (req, res) => {
  await Listings.find()
    .then((response) => res.json({ response }))
    .catch((e) => res.json({ msg: e.message }));
});

// get ONE property
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  await Listings.findById(id)
    .then((response) => res.json({ response }))
    .catch((e) => res.send(e.message));
});

// post a property
router.post("/", (req, res) => {
  const {
    name,
    city,
    town,
    region,
    address,
    country,
    landmarks,
    price,
    rating,
    postedBy,
    offer,
    size,
    beds,
    bath,
    facilities,
    description,
    photo_main,
    photo_gallary,
  } = req.body;
  Listings.create({
    name,
    city,
    town,
    region,
    address,
    country,
    landmarks,
    price,
    rating,
    postedBy,
    offer,
    size,
    beds,
    bath,
    facilities,
    description,
    photo_main,
    photo_gallary,
  })
    .then((response) => res.json({ response }))
    .catch((e) => res.json({ msg: e.message }));
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const up_data = req.body;
  Listings.findByIdAndUpdate(id, up_data)
    .then((response) => res.json({ response }))
    .catch((e) => res.json({ msg: e.message }));
});
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Listings.findByIdAndDelete(id)
    .then((response) => res.json({ response }))
    .catch((e) => res.json({ msg: e.message }));
});

module.exports = router;

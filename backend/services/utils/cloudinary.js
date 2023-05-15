const cloudinary = require("cloudinary").v2;

// Configuration
cloudinary.config({
  cloud_name: "dyxiuinie",
  api_key: "498432725395863",
  api_secret: "E3kNmYHB6dDtZKY7km7FX6aAaMQ",
});

module.exports = cloudinary;

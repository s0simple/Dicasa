const mongoose = require("mongoose");

const schema = mongoose.Schema;

const properties_schema = new schema({
  product: { type: String },
  name: { type: String },
  city: { type: String },
  town: { type: String },
  region: { type: String },
  address: { type: String },
  country: { type: String },
  landmarks: { type: String },
  price: { type: Number },
  currency: { type: String },
  advance: { type: String },
  rating: { type: Number },
  postedBy: { type: mongoose.SchemaTypes.ObjectId },
  offer: { type: String },
  size: { type: String },
  beds: { type: Number },
  bath: { type: Number },
  facilities: { type: [String] },
  description: { type: String },
  photo_main: { type: String },
  image_main: { type: String },
  photo_gallary: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "multiplefileuploads",
  },
  categories: { type: [String] },
  rating: { type: Number },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const listing = mongoose.model("properties", properties_schema);

module.exports = listing;

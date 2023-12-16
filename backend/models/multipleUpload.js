const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const MultipleFileUploadSchema = new Schema(
  {
    listing_ID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "properties",
    },

    files: [Object],
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "multiplefileuploads",
  MultipleFileUploadSchema
);

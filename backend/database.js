"use strict";
const mongoose = require("mongoose");

module.exports = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect("mongodb://localhost:27017/CRUDAPP", {
      useNewUrlParser: true,
    })
    .then(() => console.log("Connected to Mongodb ...."));
};

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
  },

  dateOfBirth: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("Users", userSchema);

module.exports = User;

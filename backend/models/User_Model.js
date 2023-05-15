const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  user_name: {
    type: String,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("app_users", UserSchema);

module.exports = User;

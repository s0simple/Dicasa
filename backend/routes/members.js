const express = require("express");
const router = express.Router();
//const Users = require("./Users");
const bodyParser = require("body-parser");
const User = require("../models/UsersModel");
require("dotenv").config;
router.use(bodyParser.urlencoded({ extended: false }));
const jwt = require("jsonwebtoken");

router.use(bodyParser.json());

const userAuth = async (req, res, next) => {
  try {
    let tokenHead = req.headers.authorization.split(" ");
    let token = tokenHead[1];
    //jwt.verify(secret);
    //let token = req.headers.authorization;

    await jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    res
      .status(404)
      .json({ msg: "Please login to your account to gain access", err });
    // res.json({ msg: `Please login ${err}` });
  }
};

router.get("/", userAuth, (req, res) => {
  //res.send(Users);
  User.find()
    .then((user) => res.json({ msg: "all users found", users: user }))
    .catch((err) => res.json({ msg: "Error retrieving users", error: err }));
});

router.get("/members/:id", (req, res) => {
  const { id } = req.params;

  // let member = Users.find((user) => {
  //   return user.id == id;
  // });
  // // console.log(member);
  // res.send(member);

  User.findById(id)
    .then((user) => res.json({ msg: "user found", users: user }))
    .catch((err) => res.json({ msg: "user not found", error: err }));
});

router.post("/", (req, res) => {
  const data = req.body;
  const id = req.body.id;

  // let found = Users.find((user) => {
  //   return user.id == id;
  // });

  // if (found) {
  //   res.send("User already exist");
  // } else {
  //   Users.push(data);
  //   res.send("Added successfully");
  // }

  User.create(req.body)
    .then((user) => res.json({ msg: `New user created`, member: user }))
    .catch((err) => res.json({ msg: `Error creating user`, Err: err }));
});

router.put("/:id", (req, res) => {
  const Updata = req.body;
  const { id } = req.params;

  //res.json({ msg: "user info updated successfully" });

  User.updateOne({ _id: id }, Updata)
    .then((user) => res.json({ msg: `User Updated`, member: user }))
    .catch((err) => res.json({ msg: `Error Upddating user`, Err: err }));

  // let found = Users.find((user) => {
  //   return user.id == id;
  // });

  // if (found) {
  //   Users.forEach((user) => {
  //     if (user.id == id)
  //       user.first_name = Updata.first_name
  //         ? Updata.first_name
  //         : user.first_name;
  //     user.last_name = Updata.last_name ? Updata.last_name : user.last_name;
  //     user.email = Updata.email ? Updata.email : user.email;
  //     user.gender = Updata.gender ? Updata.gender : user.gender;
  //   });
  // }
});

router.delete("/:id", (req, res) => {
  //const id = parseInt(req.params.id);
  const id = req.params.id;

  User.deleteOne({ _id: id })
    .then(() => res.json({ msg: "User was deleted successfully" }))
    .catch((err) => res.json({ msg: "error deleting user", member: err }));

  // const found = Users.some((user) => user.id === id);
  // console.log(found);

  // if (found) {
  //   res.json({
  //     msg: "Delete was successful",
  //     message: Users.filter((user) => user.id !== id),
  //   });
  // } else {
  //   res.status(400).json({ msg: "nothing to delete" });
  // }
});

module.exports = router;

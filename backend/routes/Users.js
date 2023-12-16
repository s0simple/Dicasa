const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User_Model");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
require("dotenv").config();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const saltrounds = 10;
const secret = process.env.JWT_SECRET;

// Middleware for authentication ==> this is needed to verify token presented in the request
const userAuth = (req, res, next) => {
  try {
    let tokenHead = req.headers.authorization.split(" ");
    let token = tokenHead[1];
    //jwt.verify(secret)
    // console.log(token);

    jwt.verify(token, secret);

    next();
  } catch (err) {
    res.status(404).json({ msg: "Invalid token - Please input token", err });
  }
};

// Get all users on localhost:5000
router.get("/", userAuth, (req, res) => {
  User.find()
    .then((response) => res.json({ msg: "all good", value: response }))
    .catch((err) => res.json({ msg: "an error has occured", value: err }));
});

router.get("/user", (req, res) => {
  //   res.status(200).
  res
    .json({ msg: "All is well" })
    .then((response) => res.json({ msg: "all good", value: response }))
    .catch((err) => res.json({ msg: "an error has occured", value: err }));
});

router.post("/", (req, res) => {
  //   res.status(200).
  const { password, first_name, last_name, user_name, email } = req.body;

  bcrypt.hash(password, saltrounds, (err, hash) => {
    if (err) {
      res.json({ msg: "an error has occured", value: err });
    } else {
      const newuser = new User({
        first_name,
        last_name,
        user_name,
        email,
        password: hash,
      });

      newuser
        .save()
        .then((response) =>
          res.json({ msg: "new user created", value: response })
        )
        .catch((err) => res.json({ msg: "an error has occured", value: err }));
    }
  });

  // res
  //   .json({ msg: "All is well" })
  //   .then((response) => res.json({ msg: "all good", value: response }))
  //   .catch((err) => res.json({ msg: "an error has occured", value: err }));
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const logged_user = await User.findOne({ email });
    const { user_name } = logged_user;

    const token = genJwt(logged_user);

    if (!bcrypt.compare(password, logged_user.password) || !logged_user.email) {
      return res.send("oopsy! wrong password");
    } else {
      res.json({ token, user_name });
    }
  } catch (err) {
    res.json({ msg: "wrong email or password", err });
  }
  // console.log("connected");
  // res.send(token);
});

router.delete("/:id", (req, res) => {
  //   res.status(200).
  res
    .json({ msg: "All is well" })
    .then((response) => res.json({ msg: "all goo", value: response }))
    .catch((err) => res.json({ msg: "an error has occured", value: err }));
});

const genJwt = (user) => {
  let user_name = user.user_name;
  let email = user.email;

  let expiresIn = "1hr";
  let payload = { user_name: user_name, email: email };

  // jwt.sign(payload, secret, { expiresIn }, (err, response) => {
  //   return err ? console.log(`Oh Snap!! ${err}`) : console.log(response);
  // });
  const token = jwt.sign(payload, secret, { expiresIn });

  return token;
};
module.exports = router;

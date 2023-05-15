const jwt = require("jsonwebtoken");

const userAuth = (req, res, next) => {
  try {
    let tokenHead = req.headers.authorization.split(" ");
    let token = tokenHead[1];
    //jwt.verify(secret)
    // console.log(token);

    jwt.verify(token, secret);

    next();
  } catch (err) {
    //console.log(`Ooops1 ${err}`);

    res.status(404).json({ msg: "Invalid token - Please input token", err });
  }
};

module.export = userAuth;

const jwt = require("jsonwebtoken");

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

module.exports = genJwt;

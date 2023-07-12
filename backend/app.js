const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

//routes imports
const members = require("./routes/members");
const users = require("./routes/Users");
const listings = require("./routes/Listings");
const fileRoutes = require("./routes/file-upload-routes");

//Database imports
require("./database")();

// ==================   end of imports  =====================

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// ==================   routes   =====================
app.use("/api", members);
app.use("/users", users);
app.use("/listings", listings);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/uploader", fileRoutes.routes);

// ============= Middleware section start =================

// const trymid = (req, res, next) => {
//   console.log("heyy Mr. Middle");

//   next();
// };

// ============= Middleware section end =================

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`app is listening on port ${PORT}`);
  }
});

const express = require("express");

//routes imports
const members = require("./routes/members");
const users = require("./routes/Users");
const listings = require("./routes/Listings");

//Database imports
const mongoose = require("mongoose");
const cors = require("cors");

// ==================   end of imports  =====================

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/CRUDAPP", {
  useNewUrlParser: true,
});

const app = express();
const PORT = 5000;

app.use(cors());

const trymid = (req, res, next) => {
  console.log("heyy Mr. Middle");

  next();
};

app.use("/api", trymid, members);
app.use("/users", users);
app.use("/listings", listings);

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`app is listening on ${PORT}`);
  }
});

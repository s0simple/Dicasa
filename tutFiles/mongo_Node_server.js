const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const app = express();
const port = 3000;
const url = "mongodb://localhost:27017";
const dbName = "mydatabase";

app.get("/users", (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) throw err;

    const db = client.db(dbName);

    db.collection("users")
      .find({})
      .toArray((findErr, users) => {
        if (findErr) throw findErr;
        res.send(users);
        client.close();
      });
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

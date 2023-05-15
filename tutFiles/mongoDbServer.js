const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "mydatabase";

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) throw err;

  console.log("Connected to MongoDB");

  const db = client.db(dbName);

  db.collection("users").insertOne(
    {
      name: "John",
      age: 30,
    },
    (insertErr, result) => {
      if (insertErr) throw insertErr;

      console.log("Inserted a document into the users collection");
      client.close();
    }
  );
});

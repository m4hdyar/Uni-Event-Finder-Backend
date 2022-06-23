var express = require('express');
var router = express.Router();

const MongoClient = require("mongodb").MongoClient;

// Create Express app
const app = express();

// Initialize parameters
const port = eval("process.env.PORT") || 3600;
const dbName = "user_database";
const collectionName = "user_collection"
const dbPassword = process.env.MONGO_DB_PASSWORD
const dbUrl = "mongodb+srv://admin:" + dbPassword + "@uef.a8snj.mongodb.net/?retryWrites=true&w=majority";

// Create database object
let db;

module.exports = router;

// Define server routes

/* GET home page. */
app.route("/").get(async (req, res) => {
  let users = [];
  users = await db.collection(collectionName).find({}).toArray();
  res.json(users);
});

// Start server and listen for requests
app.listen(port, function () {
  console.log("Listening on " + port + ".");
});

// Connect to database
MongoClient.connect(dbUrl, (err, client) => {
  if (err) {
    console.error(err);
    return;
  }

  db = client.db(dbName);

  console.log("Connected to database");
});
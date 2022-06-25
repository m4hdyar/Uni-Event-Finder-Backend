var express = require('express');
const router = require("../router");
const port = eval("process.env.PORT") || 3600;

// Create Express app
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

// Start server and listen for requests
app.listen(port, function () {
  console.log("Listening on " + port + ".");
});

// Initialize database parameters
const MONGODB_URL = "mongodb+srv://admin:" + process.env.MONGO_DB_PASSWORD + "@unieventfinder.a8snj.mongodb.net/?retryWrites=true&w=majority";

// Connect to database
const mongoose = require("mongoose");
mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Mongo database");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = router;
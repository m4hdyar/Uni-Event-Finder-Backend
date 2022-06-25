const express = require("express");
const router = express.Router();


// User and admin related routing
router.use(require("./user"));
router.use(require("./admin"));

//profile related routing
router.use("/profiles", require("./profile"));

// event related routing
router.use("/events", require("./event"));

// category related routing
router.use(require("./category"));

module.exports = router;
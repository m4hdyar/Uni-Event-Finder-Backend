const express = require("express");
const router = express.Router();


// User and admin related routing
router.use(require("./user"));
//router.use(require("./admin"));

//Profile related routing
router.use("/profile", require("./profile"));

//Event related routing
router.use("/event",require("./event"));

//Interest related routing
router.use("/interest",require("./interest"));

module.exports = router;
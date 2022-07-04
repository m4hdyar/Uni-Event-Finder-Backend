const express = require("express");
const router = express.Router();


// User and admin related routing
router.use(require("./user"));
//router.use(require("./admin"));

//profile related routing
router.use("/profile", require("./profile"));

// event related routing
router.use("/event",require("./event"));

// interest related routing
router.use("/interest",require("./interest"));

module.exports = router;
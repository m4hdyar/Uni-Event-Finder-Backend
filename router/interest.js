const express = require("express");
const interestCtrl = require("../controller/interest");

const router = express.Router();

// Get interest 
router.get("/:username", interestCtrl.getinterest);


module.exports = router;

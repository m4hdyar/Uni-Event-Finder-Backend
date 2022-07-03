const express = require("express");
const interestCtrl = require("../controller/interest");
const interestValidator = require("../validator/interest")
const auth = require("../middleware/auth");

const router = express.Router();

// Get interest 
router.get("/:username", auth, interestValidator.validateUser,interestCtrl.getInterest);
//router.get("/:username", auth,interestCtrl.getInterest);
//router.get("/:username",interestCtrl.getInterest);


module.exports = router;

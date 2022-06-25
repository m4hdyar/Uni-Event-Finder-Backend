const express = require("express");
const profileCtrl = require("../controller/profile");

const router = express.Router();

// Get Profile 
router.get("/:username", profileCtrl.getProfile);

module.exports = router;

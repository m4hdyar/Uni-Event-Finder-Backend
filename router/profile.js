const express = require("express");
const profileCtrl = require("../controller/profile");
const auth = require("../middleware/auth");
const profileValidator = require("../validator/profile")
const router = express.Router();

// Get Profile 
router.get("/:username", auth,profileValidator.profileExist,profileValidator.validateUser ,profileCtrl.getProfile);
// Create Profile
router.post("/", auth, profileValidator.createProfile,profileCtrl.createProfile );
// Update Profile
router.put("/:username", auth, profileValidator.profileExist,profileValidator.validateUser,profileCtrl.updateProfile );



module.exports = router;

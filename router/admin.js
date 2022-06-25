const express = require("express");
const adminCtrl = require("../controller/admin");
const adminValidator = require("../validator/admin");
const auth = require("../middleware/auth");


const router = express.Router();

// Admin Authentication 
router.post("/admins/login", adminValidator.login, adminCtrl.login);

//admin Registration
router.post("/admins",adminValidator.register,adminCtrl.register); 

// Get Current admin 
router.get("/admin", auth, adminCtrl.getCurrentAdmin);

// Update admin 
router.put("/admin", auth, adminCtrl.updateAdmin);

module.exports = router;




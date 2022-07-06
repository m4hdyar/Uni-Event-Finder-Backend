const express = require("express");
const userCtrl = require("../controller/user");
const userValidator = require("../validator/user");
const auth = require("../middleware/auth");

const router = express.Router();

// User Authentication 
router.post("/users/login", userValidator.login, userCtrl.login);

//User  Registration 
router.post("/users",userValidator.register,userCtrl.register); 


module.exports = router;




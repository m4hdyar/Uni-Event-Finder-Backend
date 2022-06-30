const express = require("express");
const categoryCtrl = require("../controller/category");

const router = express.Router();

// Get Categories
router.get("/categories", categoryCtrl.getCategories);

module.exports = router;

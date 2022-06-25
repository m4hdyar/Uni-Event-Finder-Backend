const express = require("express");
const router = express.Router();


// 用户相关路由
router.use(require("./user"));
router.use(require("./admin"));

// 用户资料相关路由，挂载以/profiles开头路由
router.use("/profiles", require("./profile"));

// 文章相关路由
router.use("/events", require("./event"));

// 标签相关路由
router.use(require("./category"));

module.exports = router;
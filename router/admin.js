const express = require("express");
const adminCtrl = require("../controller/admin");
const adminValidator = require("../validator/admin");
const auth = require("../middleware/auth");


const router = express.Router();

// Authentication 用户登录
router.post("/admins/login", adminValidator.login, adminCtrl.login);

// Registration 用户注册
//前端也需要验证，但是后端验证是必须的
router.post("/admins",adminValidator.register,adminCtrl.register); // 3. 通过验证，执行具体的控制器处理

// Get Current admin 获取当前登录用户
router.get("/admin", auth, adminCtrl.getCurrentAdmin);

// Update admin 更新用户
router.put("/admin", auth, adminCtrl.updateAdmin);

module.exports = router;




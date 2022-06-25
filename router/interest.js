const express = require("express");
const interestCtrl = require("../controller/interest");

const router = express.Router();

// Get interest 获取指定用户资料
router.get("/:username", interestCtrl.getinterest);

/* // Follow user 关注用户
router.post("/:username/follow",interestCtrl.followUser);

// Unfollow user 取消关注用户
router.delete("/:username/follow", interestCtrl.unfollowUser); */

module.exports = router;

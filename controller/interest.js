// Get Interest 获取指定用户资料
exports.getInterest = async (req, res, next) => {
    try {
      // 处理请求
      res.send("get /Interest/:username");
    } catch (err) {
      next(err);
    }
};

/* // Follow user 关注用户
exports.followUser =  async (req, res, next) => {
    try {
      // 处理请求
      res.send("post /Interest/:username/follow");
    } catch (err) {
      next(err);
    }
};

// Unfollow user 取消关注用户
exports.unfollowUser = async (req, res, next) => {
    try {
      // 处理请求
      res.send("delete /Interest/:username/follow");
    } catch (err) {
      next(err);
    }
}; */
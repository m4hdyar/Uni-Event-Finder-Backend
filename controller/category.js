// Get Categories
exports.getCategories = async (req, res, next) => {
    try {
      // 处理请求
      res.send("get /Categories");
    } catch (err) {
      next(err);
    }
}
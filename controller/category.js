// Get Categories
exports.getCategories = async (req, res, next) => {
    try {
      //handle the request
      res.send("get /Categories");
    } catch (err) {
      next(err);
    }
}
// Get Interest 
exports.getInterest = async (req, res, next) => {
    try {
      // handle the request
      res.send("get /Interest/:username");
    } catch (err) {
      next(err);
    }
};

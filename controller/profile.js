// Get Profile 
exports.getProfile = async (req, res, next) => {
    try {
      // handle the request
      res.send("get /profile/:username");
    } catch (err) {
      next(err);
    }
};


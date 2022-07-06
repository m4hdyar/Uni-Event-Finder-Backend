const { Profile } = require("../model");
// Get Interest 
exports.getInterest = async (req, res, next) => {
    try {
      const userInterest = {};
      const profile = await Profile.findOne({user:req.user._id});
      
      userInterest.interest_List = profile.interest_List? profile.interest_List : null;
      userInterest.is_International = profile.is_International? profile.is_International : null;
      userInterest.need_Job = profile.need_Job? profile.need_Job : null;

      res.status(200).json({
        userInterest
      })

    } catch (err) {
      next(err);
    }
};

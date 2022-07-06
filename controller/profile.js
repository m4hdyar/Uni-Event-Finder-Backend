const { Profile } = require("../model");

// Create Profile 
exports.createProfile = async (req, res, next) => {
  try {
    const profile = new Profile(req.body.profile); 
    profile.user = req.user._id;

    await profile.save();
    res.status(201).json({
      profile,
    });
  } catch (err) {
    next(err);
  }
};

 //Get Profile 
exports.getProfile = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({user:req.user._id});
    if (!profile) {
      return res.status(404).end();
    };
    res.status(200).json({
      profile,
    });
  } catch (err) {
    next(err);
  }
};
//update Profile
exports.updateProfile = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({user:req.user._id});
    const bodyProfile = req.body.profile;
    profile.username = bodyProfile.username || profile.username;
    profile.is_International = bodyProfile.is_International || profile.is_International;
    profile.need_Job = bodyProfile.need_Job || profile.need_Job;
    profile.program = bodyProfile.program || profile.program;
    profile.major = bodyProfile.major || profile.major;
    profile.interest_List= bodyProfile.interest_List|| profile.is_Job_Profile;
    await profile.save();
    res.status(200).json({
      profile,
    });
  } catch (err) {
    next(err);
  }
};
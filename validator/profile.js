const { body } = require("express-validator");
const validate = require("../middleware/validate");
const { Profile, User } = require('../model')

exports.profileExist =[
  validate([validate.isValidObjectId(["params"], "userId"),]),
  // validate if profile exist
async (req, res, next) => {
    const userId = req.params.userId;
    const expectProfile = await Profile.findOne({user:userId});     
    req.profile = expectProfile;
  if (!expectProfile) {
    return res.status(404).end();
  }
  next();
}
];

exports.validateUser = [  
    //determine if the profie belong to the current logged in user
    async (req, res, next) => {
      //console.log(typeof(req.user._id), typeof(req.profile.user));// object object
      if (req.user._id.toString() !== req.profile.user.toString()) {
        return res.status(403).end();
      }
      next();
    },
]

exports.createProfile = [// validate if current user has a profile 
async (req, res, next) => {
    //const expectUser = await User.findOne({username:req.params.username});
    const profile = await Profile.findOne({user:req.user._id});   
    req.profile = profile;
  if (profile) {
    return res.status(400).json("Your profile already exists");
  }
  next();
}
];
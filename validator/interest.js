const { User } = require('../model');

exports.validateUser = [  
    //determine if the profie belong to the current logged in user
    async (req, res, next) => {
        const expectUser = await User.findOne({username:req.params.username});
      //console.log(typeof(req.user._id), typeof(req.profile.user));// object object
      if (req.user._id.toString() !== expectUser._id.toString()) {
        return res.status(403).end();
      }
      next();
    },
]
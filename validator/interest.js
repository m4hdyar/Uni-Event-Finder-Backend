const { User } = require('../model');

exports.validateUser = [  
    //determine if the profie belong to the current logged in user
    async (req, res, next) => {
      if (req.user._id.toString() !== req.params.userId.toString()) {
        return res.status(403).end();
      }
      next();
    },
]
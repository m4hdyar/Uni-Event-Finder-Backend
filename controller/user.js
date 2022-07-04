const { User } = require('../model')
const jwt = require("../util/jwt");
const { jwtSecret } = require("../config/config.default");

// User Registration 
exports.register = async (req, res, next) => {
    try {
        let user = new User(req.body.user);
        //save to datebase
        await user.save();

        user = user.toJSON();
        delete user.password;

        // 4. Send successful response
        res.status(201).json({
            user
        });    
    } catch (err) {
        next(err); 
    }
};

// User Authentication 
exports.login = async (req, res, next) => {
    try {
      // handle the request
      // get JSON User infomation
      const user = req.user.toJSON();
      const token = await jwt.sign(
        {userId: user._id},
        jwtSecret,
        { expiresIn: 60 * 60 * 24 }//lifetime for token is 1 hour
        );
      //Removes the password attribute before sending a successful response
      delete user.password;
      // Send success response (user information with token)
      res.status(200).json({
        ...user,
        token
      });
    
    } catch (err) {
      next(err);
    }
};
  
/*  // Get Current User 
exports.getCurrentUser = async (req, res, next) => {
  try {
    // handle the request
    res.status(200).json({
      user: req.user,
    });
  } catch (err) {
    next(err);
  }
}; 
 */
/*  // Update User 
exports.updateUser = async (req, res, next) => {
  try {
      // handle the request
      res.send("put /user");
  } catch (err) {
      next(err);
  }
};  */

  

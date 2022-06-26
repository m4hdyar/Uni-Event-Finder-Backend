const { User } = require('../model')
const jwt = require("../util/jwt");
const { jwtSecret } = require("../config/config.default");

// User Authentication 
exports.login = async (req, res, next) => {
    try {
      // handle the request
      // get JSON User infomation
      const user = req.user.toJSON();
      
      //Removes the password attribute before sending a successful response
      delete user.password;
      // Send success response (user information with token)
      res.status(200).json({
        ...user
      });
      res.send("post /users/login");
    } catch (err) {
      next(err);
    }
};
  
  
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
  

  

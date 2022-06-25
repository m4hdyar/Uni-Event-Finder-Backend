const { Admin } = require('../model')
const jwt = require("../util/jwt");
const { jwtSecret } = require("../config/config.default");

// Admin Authentication
exports.login = async (req, res, next) => {
    try {
      // handle the request
      // Get user information 
      const admin = req.admin.toJSON();
      // generate token
      const token = await jwt.sign({adminId: admin._id,},jwtSecret);
      //Remove the password attribute before sending a successful response
      delete admin.password;
      // Send a successful response (including the admin information of the token)
      res.status(200).json({
        ...admin,
        token,
      });
    } catch (err) {
      next(err);
    }
};
  
  
// Admin Registration
exports.register = async (req, res, next) => {
    try {
        // 1. Get the request body data
        // 2. Data verification: ①Basic data verification; ②Business data verification (such as: mailbox, user name cannot be repeated)
        // 3. After the verification is passed, save the data to the database
        let admin = new Admin(req.body.admin);
        //save to database
        await admin.save();
        //Without this line, the password cannot be deleted. Admin is a data object provided by mongoose, which needs to be converted into JSON to be removed.
        admin = admin.toJSON();
        delete admin.password;

        // 4. Send a successful response
        res.status(201).json({
            admin
        });    
    } catch (err) {
        next(err); 
    }
};
  
// Get Current Admin 
exports.getCurrentAdmin = async (req, res, next) => {
    try {
     // handle the request
      res.status(200).json({
        admin: req.admin,
      });
    } catch (err) {
      next(err);
    }
};

 
// Update Admin 
exports.updateAdmin = async (req, res, next) => {
    try {
        // handle the request
        res.send("put /Admin");
    } catch (err) {
        next(err);
    }
  };
  

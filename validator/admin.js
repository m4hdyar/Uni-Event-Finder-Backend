
const { body } = require("express-validator");
const validate = require("../middleware/validate");
const {Admin} = require('../model')//Error messages are printed uniformly through the model, so it's not '... /model/user'
const md5 = require("../util/md5");

exports.register = validate([
    // 1. Configure authentication rules
    body("admin.username")
      .notEmpty().withMessage("Username cannot be empty")
      .custom(async (value) => {
        // Query the database to see if the data exists
        const admin = await Admin.findOne({ username: value });
        if (admin) {
          return Promise.reject("Admin already exists");
        }
    }),
      
    body("admin.password").notEmpty().withMessage("Password cannot be empty"),
    
    body("admin.email")
      .notEmpty().withMessage("Email cannot be empty")
      .isEmail().withMessage("Incorrect email format")
      .bail() // No downward execution if error
      .custom(async (value) => {
        // Query the database to see if the data exists
        const admin = await Admin.findOne({ email: value });
        if (admin) {
          return Promise.reject("Email already exists");
        }
    }),
]);

//Export logins as arrays, configure multiple validates
exports.login = [
    validate([
      body("admin.email").notEmpty().withMessage("Email cannot be empty"),
      body("admin.password").notEmpty().withMessage("Password cannot be empty"),
    ]),
    // Verify that the user exists
    validate([
      body("admin.email").custom(async (email, { req }) => {
        //In . /model/user.js set user.password to select:false, i.e. it does not return the password and needs to be called with the select method
        const admin = await Admin.findOne({ email }).select([
          "email",
          "password",
          "username"
        ]);
        // Query the database to see if the data exists
        if (!admin) {
          return Promise.reject("Admin does not exist");
        }
        // By mounting the data into the request object, the subsequent middleware can also be used directly, so there is no need to repeat the query
        req.admin = admin;
      }),
    ]),
    // Verify that the password is correct
    validate([
      body("admin.password").custom(async (password, { req }) => {        
        if (md5(password) !== req.admin.password) {
          return Promise.reject("Password wrong");
        }
      }),
    ]),
]


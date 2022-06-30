const { body } = require("express-validator");
const validate = require("../middleware/validate");
const {User} = require('../model')
const md5 = require("../util/md5");

exports.register = validate([
    body("user.username")
      .notEmpty().withMessage("Username cannot be empty")
      .custom(async (value) => {

        const user = await User.findOne({ username: value });
        if (user) {
          return Promise.reject("User already exists");
        }
    }),
      
    body("user.password").notEmpty().withMessage("Password cannot be empty"),
    
    body("user.email")
      .notEmpty().withMessage("Email cannot be empty")
      .isEmail().withMessage("Incorrect email format")
      .bail() 
      .custom(async (value) => {

        const user = await User.findOne({ email: value });
        if (user) {
          return Promise.reject("Email already exists");
        }
    }),
]);


exports.login = [
    validate([
      body("user.email").notEmpty().withMessage("Email cannot be empty"),
      body("user.password").notEmpty().withMessage("Password cannot be empty"),
    ]),

    validate([
      body("user.email").custom(async (email, { req }) => {

        const user = await User.findOne({ email }).select([
          "email",
          "password",
          "username"
        ]);

        if (!user) {
          return Promise.reject("User does not exist");
        }
        // Mount the data into the request object, so that subsequent middleware can also be used directly, eliminating the need for repeated queries
        req.user = user;
      }),
    ]),

    validate([
      body("user.password").custom(async (password, { req }) => {        
        if (md5(password) !== req.user.password) {
          return Promise.reject("Password wrong");
        }
      }),
    ]),
]


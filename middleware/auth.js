const { Admin } = require("../model");
const { verify } = require("../util/jwt");
const { jwtSecret } = require("../config/config.default");


module.exports = async (req, res, next) => {
  // Get token data from request header
  let token = req.headers.authorization;
  // Verify the existence of the token
  token = token ? token.split("Bearer ")[1] : null;
  //If not present, send response 401 to end the response

  if (!token) {
    return res.status(401).end();
  }
  try {
    //Verify that the token is valid
    const decodedToken = await verify(token, jwtSecret);
    
    // Mount the admin information to the request object
    req.admin = await Admin.findById(decodedToken.adminId);
    next();
  } catch (err) {
    return res.status(401).end();
  }
  //If valid, read the user information, mount it on the req request object, and continue with the rest of the execution
};

//Invalid->Response 401 status code

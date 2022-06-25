const crypto = require("crypto");

module.exports = (str) => {
  return crypto.createHash("md5")//The algorithm needs to be a crypto-supported hashing algorithm obtained with the getHashes method
  .update("UEF"+ str) //Add an obfuscated string for better security 
  .digest("hex");//Decimal
};


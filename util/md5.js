const crypto = require("crypto");

module.exports = (str) => {
  return crypto.createHash("md5")//算法需要是用getHashes方法获取的crypto 支持的散列算法
  .update("st"+ str) //加了一个混淆字符串，安全性更好 
  .digest("hex");//十进制方式
};

//md5相同的字符串加密后得到的结果相同，不能反向解密，但是有可能会被暴力破解（被一个一个挨个比对）
//bcrypt包，相同的密码每次生成的都不一样
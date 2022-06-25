const { Admin } = require("../model");
const { verify } = require("../util/jwt");
const { jwtSecret } = require("../config/config.default");


module.exports = async (req, res, next) => {
  // 从请求头获取token数据
  let token = req.headers.authorization;
  // 验证token是否存在
  token = token ? token.split("Bearer ")[1] : null;
  // 如果不存在， 发送响应 401 结束响应
  //console.log(token);
  if (!token) {
    return res.status(401).end();
  }
  try {
    //验证token是否有效
    const decodedToken = await verify(token, jwtSecret);
    
    // 将用户信息挂载到请求对象上
    req.admin = await Admin.findById(decodedToken.adminId);
    next();
  } catch (err) {
    return res.status(401).end();
  }
  // 如果有效，将用户信息读取，挂载到req请求对象上，继续往后执行
};

//无效->响应401状态码

const { User } = require('../model')
const jwt = require("../util/jwt");
const { jwtSecret } = require("../config/config.default");

// Authentication 用户登录
exports.login = async (req, res, next) => {
    try {
      // 处理请求
      // 得到用户信息[mongosse数据对象 转换成 json数据对象，方便操作]
      const user = req.user.toJSON();
      // 生成token
      const token = await jwt.sign(
        {
          userId: user._id,
          //是数据验证成功后的数据库里对应的user的id，不是new User后的user的id
        },
        jwtSecret
      );
      //发送成功响应前移除密码属性
      delete user.password;
      // 发送成功响应（包含token的用户信息）
      res.status(200).json({
        ...user,
        token,
      });
      res.send("post /users/login");
    } catch (err) {
      next(err);
    }
};
  
  
// Registration 用户注册
exports.register = async (req, res, next) => {
    try {
        // 1.获取请求体数据
        // 2.数据验证:①基本数据验证；②业务数据验证（如：邮箱、用户名不能重复）
        
        // 3. 验证通过，将数据保存到数据库
        let user = new User(req.body.user);
        //保存到数据库
        await user.save();
        //不加这一行，密码删不掉，user是mongoose提供的数据对象，需要转化成JSON才能移除
        user = user.toJSON();
        delete user.password;

        // 4. 发送成功响应
        res.status(201).json({
            user
        });    
    } catch (err) {
        next(err); 
    }
};
  
/* // Get Current User 获取当前登录用户
exports.getCurrentUser = async (req, res, next) => {
    try {
      // 处理请求
      res.status(200).json({
        user: req.user,
      });
    } catch (err) {
      next(err);
    }
};
  
 
// Update User 更新用户
exports.updateUser = async (req, res, next) => {
    try {
        // 处理请求
        res.send("put /user");
    } catch (err) {
        next(err);
    }
  }; */
  

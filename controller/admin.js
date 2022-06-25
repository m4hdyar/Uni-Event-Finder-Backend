const { Admin } = require('../model')
const jwt = require("../util/jwt");
const { jwtSecret } = require("../config/config.default");

// Authentication 用户登录
exports.login = async (req, res, next) => {
    try {
      // 处理请求
      // 得到用户信息[mongosse数据对象 转换成 json数据对象，方便操作]
      const admin = req.admin.toJSON();
      // 生成token
      const token = await jwt.sign(
        {
          adminId: admin._id,
          //是数据验证成功后的数据库里对应的Admin的id，不是new Admin后的Admin的id
        },
        jwtSecret
      );
      //发送成功响应前移除密码属性
      delete admin.password;
      // 发送成功响应（包含token的用户信息）
      res.status(200).json({
        ...admin,
        token,
      });
      //res.send("post /admins/login");
    } catch (err) {
      next(err);
    }
};
  
  
// Admin Registration 用户注册
exports.register = async (req, res, next) => {
    try {
        // 1.获取请求体数据
        // 2.数据验证:①基本数据验证；②业务数据验证（如：邮箱、用户名不能重复）
        // 3. 验证通过，将数据保存到数据库
        let admin = new Admin(req.body.admin);
        //保存到数据库
        await admin.save();
        //不加这一行，密码删不掉，Admin是mongoose提供的数据对象，需要转化成JSON才能移除
        admin = admin.toJSON();
        delete admin.password;

        // 4. 发送成功响应
        res.status(201).json({
            admin
        });    
    } catch (err) {
        next(err); 
    }
};
  
// Get Current Admin 获取当前登录用户
exports.getCurrentAdmin = async (req, res, next) => {
    try {
      // 处理请求
      res.status(200).json({
        admin: req.admin,
      });
    } catch (err) {
      next(err);
    }
};

 
// Update Admin 更新用户
exports.updateAdmin = async (req, res, next) => {
    try {
        // 处理请求
        res.send("put /Admin");
    } catch (err) {
        next(err);
    }
  };
  

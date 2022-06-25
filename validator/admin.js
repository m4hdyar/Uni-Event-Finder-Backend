//将【验证规则】抽离出来，依赖需要加载
const { body } = require("express-validator");
const validate = require("../middleware/validate");
const {Admin} = require('../model')//错误消息是通过model统一打印，因此不是'../model/user'
const md5 = require("../util/md5");

exports.register = validate([
    // 1. 配置验证规则
    body("admin.username")
      .notEmpty().withMessage("用户名不能为空")
      .custom(async (value) => {
        // 查询数据库查看数据是否存在
        const admin = await Admin.findOne({ username: value });
        if (admin) {
          return Promise.reject("用户已存在");
        }
    }),
      
    body("admin.password").notEmpty().withMessage("密码不能为空"),
    
    body("admin.email")
      .notEmpty().withMessage("邮箱不能为空")
      .isEmail().withMessage("邮箱格式不正确")
      .bail() // 如果错误就不向下执行
      .custom(async (value) => {
        // 查询数据库查看数据是否存在
        const admin = await Admin.findOne({ email: value });
        if (admin) {
          return Promise.reject("邮箱已存在");
        }
    }),
]);

//将login导出为数组，配置多个validate
exports.login = [
    validate([
      body("admin.email").notEmpty().withMessage("邮箱不能为空"),
      body("admin.password").notEmpty().withMessage("密码不能为空"),
    ]),
    // 验证用户是否存在
    validate([
      body("admin.email").custom(async (email, { req }) => {
        //在./model/user.js中把user.password设置为了select:false，即不返回密码，需要用select方法调用出来
        //除了password还需要其他数据，写成数组，查询出来方便比对
        const admin = await Admin.findOne({ email }).select([
          "email",
          "password",
          "username"
        ]);
        // 查询数据库查看数据是否存在
        if (!admin) {
          return Promise.reject("用户不存在");
        }
        // 将数据挂载到请求对象中，后续的中间件也可以直接使用，就不需要重复查询了
        req.admin = admin;
      }),
    ]),
    // 验证密码是否正确
    validate([
      body("admin.password").custom(async (password, { req }) => {        
        if (md5(password) !== req.admin.password) {
          return Promise.reject("密码错误");
        }
      }),
    ]),
]


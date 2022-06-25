const { body } = require("express-validator");
const validate = require("../middleware/validate");
const { Event } = require('../model');

exports.createEvent = validate([
    body("event.title").notEmpty().withMessage("文章标题不能为空"),
    body("event.description").notEmpty().withMessage("文章摘要不能为空"),
    body("event.start_Date").notEmpty().withMessage("event.start_Date不能为空"),
    body("event.end_Date").notEmpty().withMessage("event.end_Date不能为空"),
     
  ]);
  
  exports.getEvent = validate([
    validate.isValidObjectId(["params"], "eventId"),
    // param("eventId").custom(async (value) => {
    //   if (!mongoose.isValidObjectId(value)) {
    //     return Promise.reject("文章ID类型错误");
    //   }
    // }),
  ]);
  
  exports.updateEvent = [
    // 校验id是否是ObjectID
    validate([validate.isValidObjectId(["params"], "eventId"),]),
  
  // 校验文章是否存在
    async (req, res, next) => {
      const eventId = req.params.eventId;
      const event = await Event.findById(eventId);
      req.event = event;
      if (!event) {
        return res.status(404).end();
      }
      next();
    },
    // 判断 修改的文章作者是否是当前登录用户
    async (req, res, next) => {
      //console.log(typeof(req.admin._id), typeof(req.event.publisher));// object object
      if (req.admin._id.toString() !== req.event.publisher.toString()) {
        return res.status(403).end();
      }
      next();
    },
  
  ]
  
  exports.deleteEvent = exports.updateEvent;
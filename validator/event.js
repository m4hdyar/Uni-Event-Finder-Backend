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
  ]);
  
  exports.updateEvent = [

    validate([validate.isValidObjectId(["params"], "eventId"),]),
  
  // Verify that the article exists
    async (req, res, next) => {
      const eventId = req.params.eventId;
      const event = await Event.findById(eventId);
      req.event = event;
      if (!event) {
        return res.status(404).end();
      }
      next();
    },
    
    // Determine if the author of the modified article is the currently logged-in admin
    async (req, res, next) => {
      if (req.admin._id.toString() !== req.event.publisher.toString()) {
        return res.status(403).end();
      }
      next();
    },
  
  ]
  
  exports.deleteEvent = exports.updateEvent;
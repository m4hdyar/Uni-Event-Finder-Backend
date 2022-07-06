const { body } = require("express-validator");
const validate = require("../middleware/validate");
const { Event } = require('../model');

exports.createEvent = validate([
    body("event.title").notEmpty().withMessage("Event title can't be empty"),
    body("event.description").notEmpty().withMessage("Event description can't be empty"),
    body("event.start_Date").notEmpty().withMessage("Please enter a start date"),
    body("event.end_Date").notEmpty().withMessage("Please enter a end date"),
  ]);
  
  exports.getEvent = validate([
    validate.isValidObjectId(["params"], "eventId"),
  ]);
  
  exports.updateEvent = [

    validate([validate.isValidObjectId(["params"], "eventId"),]),
  
  // Verify that the event exists
    async (req, res, next) => {
      const eventId = req.params.eventId;
      const event = await Event.findById(eventId);
      req.event = event;
      if (!event) {
        return res.status(404).end();
      }
      next();
    }, 
  ]
  
  exports.deleteEvent = exports.updateEvent;
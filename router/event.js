const express = require("express");
const eventCtrl = require("../controller/event")
const eventValidator = require('../validator/event')
const auth = require("../middleware/auth");

const router = express.Router();

// List Events
router.get("/", eventCtrl.listEvents);

/* // Feed Events
router.get("/feed", eventCtrl.feedEvents); */

// Get event
router.get("/:eventId", eventValidator.getEvent, eventCtrl.getEvent);

// Create event
router.post("/", auth, eventValidator.createEvent,eventCtrl.createEvent );

// Update event
router.put("/:eventId", auth, eventValidator.updateEvent , eventCtrl.updateEvent );
// Delete event
router.delete("/:eventId", auth, eventValidator.deleteEvent , eventCtrl.deleteEvent );


module.exports = router;
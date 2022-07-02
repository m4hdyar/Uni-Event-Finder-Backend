const express = require("express");
const eventCtrl = require("../controller/event")
const eventValidator = require('../validator/event')
const isAdmin = require("../middleware/auth_admin")

const router = express.Router();

// List Events
router.get("/", eventCtrl.listEvents);

// Get event
router.get("/:eventId", eventValidator.getEvent, eventCtrl.getEvent);

// Create event
router.post("/", isAdmin, eventValidator.createEvent,eventCtrl.createEvent );

// Update event
router.put("/:eventId", isAdmin, eventValidator.updateEvent , eventCtrl.updateEvent );
// Delete event
router.delete("/:eventId", isAdmin, eventValidator.deleteEvent , eventCtrl.deleteEvent );


module.exports = router;
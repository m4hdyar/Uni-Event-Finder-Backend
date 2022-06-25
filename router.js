const router = require("express").Router();
const { getEvents, createEvent, updateEvent, deleteEvent } = require("./controllers/Event");

// Define server routes

/* GET home page. */
router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

router.get("/events", getEvents);
router.post("/events", createEvent);
router.put("/events/:eventID", updateEvent);
router.delete("/events/:eventID", deleteEvent);

module.exports = router;
const Event = require("../model/Event");

const createEvent = (req, res) => {
  console.log(req.body)
  const event = new Event({
    title: req.body.title,
    description: req.body.description,
    category_id: req.body.category_id,
    is_job_event: req.body.is_job_event,
    is_very_important: req.body.is_very_important,
    start_date: req.body.start_date,
    end_date: req.body.end_date
  });

  event.save((err, event) => {
    if (err) {
      res.send(err);
    }
    res.json(event);
  });
};

const getEvents = (req, res) => {
  Event.find((err, events) => {
    if (err) {
      res.send(err);
    }
    res.json(events);
  });
};

const updateEvent = (req, res) => {
  Event.findOneAndUpdate(
    { _id: req.params.eventID },
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
        category_id: req.body.category_id,
        is_job_event: req.body.is_job_event,
        is_very_important: req.body.is_very_important,
        start_date: req.body.start_date,
        end_date: req.body.end_date
      },
    },
    { new: true },
    (err, event) => {
      if (err) {
        res.send(err);
      } else res.json(event);
    }
  );
};

const deleteEvent = (req, res) => {
  var eventID = req.params.eventID
  Event.deleteOne({ _id: eventID })
    .then(() => res.json({ message: "Event " + eventID + " Deleted" }))
    .catch((err) => res.send(err));
};
  
module.exports = {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent
};
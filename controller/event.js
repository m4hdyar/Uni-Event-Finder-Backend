
const { Event } = require("../model");

// List Events
exports.listEvents = async (req, res, next) => {
  try {
    // Parse data parameters and set default values
    const { limit = 5, category } = req.query;

   // define a filter object
    const filter = {};
    if (category) {
      filter.category = category;// As long as it contains a category, it can be queried
    }

    const events = await Event.find(filter)
      .limit(+limit); // How many bars to take
    const eventsCont = await Event.countDocuments();
    res.status(200).json({
      events,
      eventsCont,
    });
  } catch (err) {
    next(err);
  }
};


//Get Event
exports.getEvent = async (req, res, next) => {
  try {
    // handle the request
    const event = await Event.findById(req.params.eventId);
    if (!event) {
      return res.status(404).end();
    }
    res.status(200).json({
      event,
    });
  } catch (err) {
    next(err);
  }
};

//create Event
exports.createEvent = async (req, res, next) => {
  try {
    // handle the request
    const event = new Event(req.body.event); 
    await event.save();
    res.status(201).json({
      event,
    });
  } catch (err) {
    next(err);
  }
};

//update Event
exports.updateEvent = async (req, res, next) => {
  try {
    const event = req.event;
    const bodyEvent = req.body.event;
    event.title = bodyEvent.title || event.title;
    event.description = bodyEvent.description || event.description;
    event.start_Date = bodyEvent.start_Date || event.start_Date;
    event.end_Date = bodyEvent.end_Date || event.end_Date;
    event.category = bodyEvent.category || event.category;
    event.is_International = bodyEvent.is_International || event.is_International;
    event.is_Job_Event = bodyEvent.is_Job_Event || event.is_Job_Event;
    event.is_Very_Important = bodyEvent.is_Very_Important || event.is_Very_Important;
    event.cost = bodyEvent.cost || event.cost;
    await event.save();
    res.status(200).json({
      event,
    });
  } catch (err) {
    next(err);
  }
};

//delete Article
exports.deleteEvent = async (req, res, next) => {
  try {
    // handle the request
    const event = req.event;
    await event.remove();
    res.status(204).end();
  } catch (err) {
    next(err);
  }
} 




// List Events
const { Event } = require("../model");

// List Events
exports.listEvents = async (req, res, next) => {
  try {
    // Parse data parameters and set default values
    const { limit = 20, offset = 0, tag } = req.query;

   // define a filter object
    const filter = {};
    if (tag) {
      filter.categoryList = category;// As long as it contains a categor, it can be queried
    }

    const events = await Event.find(filter)
      .skip(+offset) // How many entries are skipped
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


//Get Events
exports.getEvent = async (req, res, next) => {
  try {
    // handle the request
    const event = await Event.findById(req.params.eventId).populate("publisher");
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

//creat Event
exports.createEvent = async (req, res, next) => {
  try {
    // handle the request
    const event = new Event(req.body.event);
    
    // Get the id attribute of the admin object resolved by authentication
    event.publisher = req.admin._id;
    // Map the data to admin and execute the following
    event.populate("publisher");
    
    await event.save();
    res.status(201).json({
      event,
    });
  } catch (err) {
    next(err);
  }
};

//update Article
exports.updateEvent = async (req, res, next) => {
  try {
    const event = req.event;
    const bodyEvent = req.body.event;
    event.title = bodyEvent.title || event.title;
    event.description = bodyEvent.description || event.description;
    event.start_Date = bodyEvent.start_Date || event.start_Date;
    event.end_Date = bodyEvent.end_Date || event.end_Date;
    event.categoryList = bodyEvent.categoryList || event.categoryList;
    event.is_International = bodyEvent.is_International || event.is_International;
    event.is_Job_Event = bodyEvent.is_Job_Event || event.is_Job_Event;
    event.is_Very_Important = bodyEvent.is_Very_Important || event.is_Very_Important;
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
  } catch (err) {
    next(err);
  }
} 




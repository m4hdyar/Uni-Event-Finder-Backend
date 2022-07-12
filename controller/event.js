
const { Event } = require("../model")

// List Events
exports.listEvents = async (req, res, next) => {
  try {

    const { limit, category, is_International, is_Job_Event, is_Very_Important, filterMethod } = req.query
    const filterList = new Array()

    // As long as it contains a category, it can be queried
    if (category) {
      const categoryArr = category.split(",")
      const newCategory = categoryArr.join("|")
      let regCategory = new RegExp(newCategory)
      filterList.push({ 'category': regCategory })
    }

    if (is_International) {
      filterList.push({ 'is_International': is_International })
    }

    if (is_Job_Event) {
      filterList.push({ 'is_Job_Event': is_Job_Event })
    }
    if (is_Very_Important) {
      filterList.push({ 'is_Very_Important': is_Very_Important })
    }

    if (filterMethod == 'and') {
      filter = { $and: filterList }
    } else {
      filter = { $or: filterList }
    }

    const events = await Event.find(filter)
      .limit(+limit)

    const eventsCont = await Event.countDocuments()
    res.status(200).json({
      events,
      eventsCont,
    })
  } catch (err) {
    next(err)
  }
}


//Get Event
exports.getEvent = async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.eventId)
    if (!event) {
      return res.status(404).end()
    }
    res.status(200).json({
      event,
    })
  } catch (err) {
    next(err)
  }
}

//Create Event
exports.createEvent = async (req, res, next) => {
  try {
    const event = new Event(req.body.event)
    await event.save()
    res.status(201).json({
      event,
    })
  } catch (err) {
    next(err)
  }
}

//Update Event
exports.updateEvent = async (req, res, next) => {
  try {
    const event = req.event
    const bodyEvent = req.body.event
    event.title = bodyEvent.title || bodyEvent.title
    event.description = bodyEvent.description || bodyEvent.description
    event.start_Date = bodyEvent.start_Date || bodyEvent.start_Date
    event.end_Date = bodyEvent.end_Date || bodyEvent.end_Date
    event.category = bodyEvent.category || bodyEvent.category
    event.is_International = bodyEvent.is_International || bodyEvent.is_International
    event.is_Job_Event = bodyEvent.is_Job_Event || bodyEvent.is_Job_Event
    event.is_Very_Important = bodyEvent.is_Very_Important || bodyEvent.is_Very_Important
    event.cost = bodyEvent.cost || bodyEvent.cost
    await event.save()
    res.status(200).json({
      event,
    })
  } catch (err) {
    next(err)
  }
}

//Delete Article
exports.deleteEvent = async (req, res, next) => {
  try {
    const event = req.event
    await event.remove()
    res.status(204).end()
  } catch (err) {
    next(err)
  }
}




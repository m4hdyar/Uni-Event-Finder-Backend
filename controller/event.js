// List Events
const { Event } = require("../model");

// List Events
exports.listEvents = async (req, res, next) => {
  try {
    // 解析数据参数，并设置默认值
    const { limit = 20, offset = 0, tag } = req.query;

    // 定义一个过滤对象
    const filter = {};
    if (tag) {
      filter.categoryList = category;//只要包含tag就能查询出来
    }

    const events = await Event.find(filter)
      .skip(+offset) // 跳过多少条
      .limit(+limit); // 取多少条
    const eventsCont = await Event.countDocuments();
    res.status(200).json({
      events,
      eventsCont,
    });
    //res.send("get /articles/");
  } catch (err) {
    next(err);
  }
};
/* // Feed Events
exports.feedEvents = async (req, res, next) => {
  try {
    // 处理请求
    res.send("get /Events/feed");
  } catch (err) {
    next(err);
  }
} */

//Get Events
exports.getEvent = async (req, res, next) => {
  try {
    // 处理请求
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
    // 处理请求
    const event = new Event(req.body.event);
    
    // 通过身份认证解析到的用户对象，获取id属性
    event.publisher = req.admin._id;
    // 将数据映射到User并执行以下
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
    // 处理请求
    const event = req.event;
    await event.remove();
  } catch (err) {
    next(err);
  }
} 

/* //// Add Comments to an Article
exports.addCommentsToArticle = async (req, res, next) => {
  try {
    // 处理请求
    res.send("post /Events/:slug/comments");
  } catch (err) {
    next(err);
  }
}

// Get Comments from an Article
exports.getCommentsFromArticle =  async (req, res, next) => {
  try {
    // 处理请求
    res.send("get /Events/:slug/comments");
  } catch (err) {
    next(err);
  }
}

// Delete Comment
exports.deleteComment = async (req, res, next) => {
  try {
    // 处理请求
    res.send("delete /Events/:slug/comments/:id");
  } catch (err) {
    next(err);
  }
}

// Favorite Article
exports.favoriteArticle = async (req, res, next) => {
  try {
    // 处理请求
    res.send("post /Events/:slug/favorite");
  } catch (err) {
    next(err);
  }
}

//Unfavorite Article
exports.unfavoriteArticle = async (req, res, next) => {
  try {
    // 处理请求
    res.send("delete /Events/:slug/favorite");
  } catch (err) {
    next(err);
  }
} */


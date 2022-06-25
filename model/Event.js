const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category_id: {
    type: Number,
    default: 0,
  },
  is_job_event: {
    type: Boolean,
    default: false,
  },
  is_very_important: {
    type: Boolean,
    default: false,
  },
  start_date: {
    type: Date,
    default: Date.now,
  },
  end_date: {
    type: Date,
  },
});

module.exports = mongoose.model("Event", EventSchema);
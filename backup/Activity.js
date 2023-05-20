// Model === class == Object Generated

const mongoose = require("mongoose");

// const ACTIVITY_CONST = require("../models/activityType");
// const { Timestamp } = require("mongodb");

const ActivitySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: User,
  },
  activityType: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
    distance: {
      type: Number,
    require: true
  },
  description: {
    type: String,
    required: true,
  },
});

const ActivityModel = new mongoose.model("Activity", ActivitySchema);

module.exports = ActivityModel;
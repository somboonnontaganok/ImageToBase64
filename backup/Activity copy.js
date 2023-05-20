// Model === class == Object Generated

const mongoose = require("mongoose");

const ACTIVITY_CONST = require("../models/activityType");
const { Timestamp } = require("mongodb");

const ActivitySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: User,
  },
  lastHour: { // not use now
    type: Timestamp,
    required: true,
  },
  activityType: {
    type: String,
    required: true,
  },
  heartRate: { // not use
    type: Number,
    required: true,
  },
  caloriesBurned: { // not use
    type: Number,
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
  
  pace: { //calculate distance / minutes not use
    type: Number,
    require: true
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
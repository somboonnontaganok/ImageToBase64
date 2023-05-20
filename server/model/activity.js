import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
  activity_name: { type: String, required: true },
  activity_date: { type: String, required: true },
  description: { type: String },
  activity_start_time: { type: String, required: true },
  activity_finish_time: { type: String, required: true },
  activity_type: {
    type: String,
    enum: ["Running", "Walking", "Bike cycling", "Swimming", "Badminton"],
    required: true,
  },
  distance: { type: Number },
});

const activityModel = mongoose.model("activity", activitySchema);

export default activityModel;

// Model === class == Object Generated

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: { // jwt token
    type: String,
    required: true,
  },
  confirmPassword: { // option
    type: String,
    required: true,
  },
  birthDate: { // calculate to age
    type: Date,
    default: Date.now,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  bmi: { // add height and weight
    type: Number,
    required: true,
  }
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
// module.exports = mongoose.model('Users', UserSchema);


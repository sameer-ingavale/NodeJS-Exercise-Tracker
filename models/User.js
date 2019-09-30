const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  "date-created": { type: String, default: Date.now },
  "time-created": { type: String, default: Date.now },
  exercises: [
    {
      "exercise-name": String,
      duration: String,
      "date-added": { type: String, default: Date.now },
      "time-added": { type: String, default: Date.now }
    }
  ]
});

module.exports = mongoose.model("User", userSchema);

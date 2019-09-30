const express = require("express");
const router = express.Router();
const dateTime = require("date-time");
const humanizeDuration = require("humanize-duration");

const User = require("../models/User");

router.post("/add-exercise", async (req, res) => {
  const { username } = req.body;
  const { exercisename } = req.body;
  const { duration } = req.body;

  let newDuration = humanizeDuration(duration * 60 * 1000);

  let dateTimeArray = dateTime().split(" ");
  let date = dateTimeArray[0];
  let time = dateTimeArray[1];

  const update = {
    "exercise-name": exercisename,
    duration: newDuration,
    "date-added": date,
    "time-added": time
  };

  try {
    let user = await User.findOne({ username });

    if (user) {
      user.exercises.push(update);
      user.save();
      res.json({ username: user.username, "exercise-log": user.exercises });
    } else {
      res.json({
        "Error Message": "username does not exist",
        "Go back to homepage":
          "https://sameers-exercise-tracker.herokuapp.com/",
        "Log an Exercise":
          "https://sameers-exercise-tracker.herokuapp.com/add-exercise"
      });
    }
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const dateTime = require("date-time");

const User = require("../models/User");

router.post("/add-user", async (req, res) => {
  const { username } = req.body;
  let dateTimeArray = dateTime().split(" ");
  let date = dateTimeArray[0];
  let time = dateTimeArray[1];

  let user = await User.findOne({ username });

  if (!user) {
    user = new User({
      username,
      "date-created": date,
      "time-created": time
    });

    user.save();
    res.json({
      Message: "Username succesfully created!",
      "Log an Exercise":
        "https://sameers-exercise-tracker.herokuapp.com/add-exercise"
    });
  } else {
    res.json({
      "Error Message": "Username taken. Try a different username",
      "Go back to homepage": "https://sameers-exercise-tracker.herokuapp.com/",
      "Log an Exercise":
        "https://sameers-exercise-tracker.herokuapp.com/add-exercise"
    });
  }
});

module.exports = router;

const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));

app.get("/add-exercise", (req, res) => {
  res.sendFile(__dirname + "/public/" + "add-exercise.html");
});

app.use("/api", require("./routes/addUser"));
app.use("/api", require("./routes/add-exercise"));

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

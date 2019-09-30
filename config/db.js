const mongooose = require("mongoose");
const config = require("config");

const db = config.get("MONGO_URI");

const connectDB = async () => {
  try {
    await mongooose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB connected...");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

const mongooseForPm10 = require("mongoose");

const pm10Schema = new mongooseForPm10.Schema(
  {
    particle: String,
    particles: [
      {
        timeInHours: String,
        delhi: Number,
        mumbai: Number,
        kerala: Number,
      },
    ]
  },
  { timestamps: true }
);

module.exports = mongooseForPm10.model("PM10", pm10Schema);
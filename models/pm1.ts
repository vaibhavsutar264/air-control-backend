const mongooseForPm1 = require("mongoose");

const pm1Schema = new mongooseForPm1.Schema(
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

module.exports = mongooseForPm1.model("PM1", pm1Schema);
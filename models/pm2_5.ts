const mongooseForpm2_5 = require("mongoose");

const pm2_5Schema = new mongooseForpm2_5.Schema(
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

module.exports = mongooseForpm2_5.model("PM_2_5", pm2_5Schema);
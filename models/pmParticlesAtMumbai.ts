const mongooseForMumbai = require("mongoose");

const pmParticlesAtMumbaiSchema = new mongooseForMumbai.Schema(
  {
    location: String,
    particles: [
      {
        timeInHours: Number,
        pm1: Number,
        pm2_5: Number,
        pm10: Number,
      },
    ]
  },
  { timestamps: true }
);

module.exports = mongooseForMumbai.model("pmParticlesAtMumbai", pmParticlesAtMumbaiSchema);

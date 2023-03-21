const mongooseForDelhi = require("mongoose");

const pmParticlesAtDelhiSchema = new mongooseForDelhi.Schema(
  {
    location: String,
    particles: [
      {
        timeInHours: String,
        pm1: Number,
        pm2_5: Number,
        pm10: Number,
      },
    ]
  },
  { timestamps: true }
);

module.exports = mongooseForDelhi.model("pmParticlesAtDelhi", pmParticlesAtDelhiSchema);

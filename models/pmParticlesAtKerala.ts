const mongooseForKerala = require("mongoose");

const pmParticlesAtKeralaSchema = new mongooseForKerala.Schema(
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

module.exports = mongooseForKerala.model("pmParticlesAtKerala", pmParticlesAtKeralaSchema);

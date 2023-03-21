const mongooseForMostwindy = require("mongoose");

const mostWindyDaysSchema = new mongooseForMostwindy.Schema(
  {
    most_windy_days: [
      {
        date: String,
        delhi: Number,
        mumbai: Number,
        kerala: Number,
      },
    ]
  },
  { timestamps: true }
);

module.exports = mongooseForMostwindy.model("Most_Windy_Days", mostWindyDaysSchema);
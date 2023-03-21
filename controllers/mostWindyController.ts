export {};
const mostWindyDays = require("../models/mostWindyDays");

const windyData = async (req, res) => {
  try {
    const windyReadings = await mostWindyDays.find();

    res.status(200).json(windyReadings[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

module.exports = {
    windyData
}
export {};
const pm1 = require("../models/pm1");
const pm2_5 = require("../models/pm2_5");
const pm10 = require("../models/pm10");

const pm1Data = async (req, res) => {
  try {
    const pm1Readings = await pm1.find();

    res.status(200).json(pm1Readings[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const pm2_5Data = async (req, res) => {
  try {
    const pm2_5Readings = await pm2_5.find();

    res.status(200).json(pm2_5Readings[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const pm10Data = async (req, res) => {
  try {
    const pm10Readings = await pm10.find();

    res.status(200).json(pm10Readings[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  pm1Data,
  pm2_5Data,
  pm10Data
}

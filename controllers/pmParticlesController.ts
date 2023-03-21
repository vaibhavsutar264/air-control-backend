export {};
const DelhiModel = require("../models/pmParticlesAtDelhi");
const KeralaModel = require("../models/pmParticlesAtKerala");
const MumbaiModel = require("../models/pmParticlesAtMumbai");

const delhiPmParticles = async (req, res) => {
  try {
    const delhiData = await DelhiModel.find();

    res.status(200).json(delhiData[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const keralaPmParticles = async (req, res) => {
  try {
    const keralaData = await KeralaModel.find();

    res.status(200).json(keralaData[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const mumbaiPmParticles = async (req, res) => {
  try {
    const mumbaiData = await MumbaiModel.find();

    res.status(200).json(mumbaiData[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
    delhiPmParticles,
    keralaPmParticles,
    mumbaiPmParticles
}

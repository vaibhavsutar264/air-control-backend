export {};
const expressData = require("express");
const { delhiPmParticles,keralaPmParticles,mumbaiPmParticles } = require("../controllers/pmParticlesController");

const router = expressData.Router();

router.get("/delhi", delhiPmParticles);
router.get("/kerala", keralaPmParticles);
router.get("/mumbai", mumbaiPmParticles);

module.exports = router;
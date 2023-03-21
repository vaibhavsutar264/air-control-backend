export {};
const expressData = require("express");
const { pm1Data,pm2_5Data,pm10Data } = require("../controllers/pmLocationController");

const router = expressData.Router();

router.get("/pm1", pm1Data);
router.get("/pm2_5", pm2_5Data);
router.get("/pm10", pm10Data);

module.exports = router;
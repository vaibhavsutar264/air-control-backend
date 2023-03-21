export {};
const expressData = require("express");
const { windyData } = require("../controllers/mostWindyController");

const router = expressData.Router();

router.get("/peak", windyData);

module.exports = router;
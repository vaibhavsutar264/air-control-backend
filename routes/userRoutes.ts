export {};
const expressData = require("express");
const { signinController,signupController } = require("../controllers/userController");

const router = expressData.Router()

router.post("/signin", signinController)
router.post("/signup", signupController)

module.exports = router;
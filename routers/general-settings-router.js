const express = require("express");
const router = express.Router();

const generalSettingsController = require("../controllers/general-settings-controller.js");

router.post("/add-role", generalSettingsController.addRole);

module.exports = router;

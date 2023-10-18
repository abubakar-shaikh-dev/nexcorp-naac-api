const express = require("express");
const router = express.Router()

//Controller
const iqacAuthorController = require("../controllers/iqac-author-controller")

//EXECUTIVE SUMMARY
router.post("/executive-summary",iqacAuthorController.createExecutiveSummary);
router.put("/executive-summary/:id",iqacAuthorController.updateExecutiveSummary);
router.get("/executive-summary",iqacAuthorController.getExecutiveSummary)

//PROFILE OF INSTITUTION
//a)Basic Information
router.post("/profile-of-institution/basic-information",iqacAuthorController.createBasicInformation)
router.put("/profile-of-institution/basic-information/:id",iqacAuthorController.updateBasicInformation)
router.get("/profile-of-institution/basic-information",iqacAuthorController.getAllBasicInformation)

//b)For Communication
router.post("/profile-of-institution/for-communication",iqacAuthorController.createForCommunication)
// router.put("/profile-of-institution/for-communication/:id",iqacAuthorController.updateForCommunication)

module.exports = router;

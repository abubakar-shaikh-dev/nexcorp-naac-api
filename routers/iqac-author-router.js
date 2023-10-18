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
router.put("/profile-of-institution/for-communication/:id",iqacAuthorController.updateForCommunication)
router.get("/profile-of-institution/for-communication/:id",iqacAuthorController.getForCommunicationById)
router.get("/profile-of-institution/for-communication",iqacAuthorController.getAllForCommunications)

//c)Status of Institution
router.post("/profile-of-institution/status-of-institution",iqacAuthorController.createStatusOfInstitution)
router.put("/profile-of-institution/status-of-institution/:id",iqacAuthorController.updateStatusOfInstitution)
router.get("/profile-of-institution/status-of-institution/:id",iqacAuthorController.getStatusOfInstitutionById)
router.get("/profile-of-institution/status-of-institution",iqacAuthorController.getAllStatusOfInstitution)

//d) Type of Institution
router.post("/profile-of-institution/type-of-institution",iqacAuthorController.createTypeOfInstitution)
// router.put("/profile-of-institution/type-of-institution/:id",iqacAuthorController.updateTypeOfInstitution)
// router.get("/profile-of-institution/type-of-institution/:id",iqacAuthorController.getTypeOfInstitutionById)
// router.get("/profile-of-institution/type-of-institution",iqacAuthorController.getAllTypeOfInstitution)

module.exports = router;

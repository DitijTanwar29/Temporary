const express = require("express");
const router = express.Router();


//importing the controllers

//Job controllers Import
const { createJob, showAllJobs, updateJob, deleteJob, getJobDetails } = require("../controllers/Job");

//Import middlewares
const { auth, isCompany, isCandidate, isAdmin} = require("../middleware/auth");

//************************************************************************************************
//                                   Job routes
// *************************************************************************************************


//Service can only be created by Admin
router.post("/createJob", auth , isCompany, createJob);
router.get("/showAllJobs", showAllJobs);
router.post("/editJob", auth, isCompany, updateJob);
router.post("/deleteJob", auth, isCompany, deleteJob);

module.exports = router;
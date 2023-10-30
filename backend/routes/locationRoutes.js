// routes/locationRoutes.js
const express = require("express");
const router = express.Router();
const Location = require("../models/locationModel");
const locationController = require("../controllers/locationController");

router.post("/updateLocation", locationController.updateLocation);
router.get("/getLocationData", locationController.getLocationData);

module.exports = router;

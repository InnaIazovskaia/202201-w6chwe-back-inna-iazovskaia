const express = require("express");
const getRobots = require("../contrillers/robotsControllers");

const router = express.Router();

router.get("/", getRobots);

module.exports = router;

const express = require("express");
const {
  getRobots,
  getRobot,
  createRobot,
} = require("../contrillers/robotsControllers");
const { loginUser } = require("../contrillers/usersControllers");
const { authUser } = require("../middlewares/authUser");

const router = express.Router();

router.get("/", getRobots);

router.get("/:idRobot", getRobot);

router.post("/create", authUser, createRobot);

router.post("/login", loginUser);

module.exports = router;

const express = require("express");
const {
  getRobots,
  getRobot,
  createRobot,
  updateRobot,
} = require("../contrillers/robotsControllers");
const { loginUser } = require("../contrillers/usersControllers");
const { authUser } = require("../middlewares/authUser");

const router = express.Router();

router.get("/", getRobots);

router.get("/:idRobot", authUser, getRobot);

router.post("/create", authUser, createRobot);

router.post("/login", loginUser);

router.put("/update", authUser, updateRobot);

module.exports = router;

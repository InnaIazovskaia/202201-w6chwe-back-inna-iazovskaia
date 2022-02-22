const Robot = require("../../db/models/Robot");

const getRobots = async (req, res) => {
  const robots = await Robot.find();
  res.json({ robots });
};

const getRobot = async (req, res, next) => {
  const { idRobot } = req.params;
  try {
    const robot = await Robot.findById(idRobot);
    if (robot) {
      res.json({ robot });
    } else {
      const error = new Error("Robot doesn’t exist");
      error.code = 404;
      next(error);
    }
  } catch (error) {
    error.code = 400;
    next(error);
  }
};

const createRobot = async (req, res, next) => {
  if (!req.body.robot) {
    const error = new Error("The body doesn't have 'robot'");
    error.code = 400;
    next(error);
  } else {
    try {
      const createdRobot = await Robot.create(req.body.robot);
      res.status(201).json(createdRobot);
    } catch (error) {
      error.code = 400;
      next(error);
    }
  }
};

const updateRobot = async (req, res, next) => {
  try {
    const robotToUpdate = req.body;
    const { id } = robotToUpdate;
    const updatedRobot = await Robot.findByIdAndUpdate(id, robotToUpdate, {
      new: true,
    });
    if (updatedRobot) {
      res.json({ updatedRobot });
    } else {
      const error = new Error("Robot doesn’t exist");
      error.code = 404;
      next(error);
    }
  } catch (error) {
    error.code = 400;
    next(error);
  }
};

module.exports = { getRobots, getRobot, createRobot, updateRobot };

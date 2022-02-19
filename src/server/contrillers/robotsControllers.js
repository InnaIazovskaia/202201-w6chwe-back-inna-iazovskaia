const Robot = require("../../db/models/Robot");

const getRobots = async (req, res) => {
  const robots = await Robot.find();
  res.json({ robots });
};

module.exports = getRobots;

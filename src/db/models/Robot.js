const { model, Schema } = require("mongoose");

const RobotSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  speed: {
    type: Number,
    minlength: 0,
    maxlength: 9,
    required: true,
  },
  strenght: {
    type: Number,
    minlength: 0,
    maxlength: 9,
    required: true,
  },
  date_of_creation: {
    type: String,
    required: true,
  },
});

const Robot = model("Robot", RobotSchema, "robots");

module.exports = Robot;

const chalk = require("chalk");
const mongoose = require("mongoose");
const debug = require("debug")("my-robots:database");

const connectDataBase = (connectingString) =>
  new Promise((resolve, reject) => {
    mongoose.set("debug", true);
    mongoose.set("toJSON", {
      virtuals: true,
      transform: (doc, ret) => {
        // eslint-disable-next-line no-param-reassign, no-underscore-dangle
        delete ret._id;
        // eslint-disable-next-line no-param-reassign, no-underscore-dangle
        delete ret.__v;
      },
    });
    mongoose.connect(connectingString, (error) => {
      if (error) {
        reject(new Error(`Database not connected: ${error.message}`));
        return;
      }
      debug(chalk.yellow("Database connected"));
      resolve();
    });
  });

module.exports = connectDataBase;

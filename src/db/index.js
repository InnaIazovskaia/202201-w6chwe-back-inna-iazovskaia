const chalk = require("chalk");
const mongoose = require("mongoose");
const debug = require("debug")("my-robots:database");

const connectDataBase = (connectingString) =>
  new Promise((resolve, reject) => {
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

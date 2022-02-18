require("dotenv").config();
const debug = require("debug")("my-robots:root");
const chalk = require("chalk");
const onServer = require("./server");

const port = process.env.SERVER_PORT || 4000;

(async () => {
  try {
    await onServer(port);
  } catch (error) {
    debug(chalk.red(error.message));
  }
})();

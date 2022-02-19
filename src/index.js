require("dotenv").config();
const debug = require("debug")("my-robots:root");
const chalk = require("chalk");
const onServer = require("./server");
const connectDataBase = require("./db");

const port = process.env.SERVER_PORT || 4000;
const connectingString = process.env.DATABASE_STRING;

(async () => {
  try {
    await connectDataBase(connectingString);
    await onServer(port);
  } catch (error) {
    debug(chalk.red(error.message));
  }
})();

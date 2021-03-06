require("dotenv").config();
const debug = require("debug")("my-robots:root");
const chalk = require("chalk");
const onServer = require("./server/onServer");
const connectDataBase = require("./db");
const app = require("./server/index");

const port = process.env.PORT || 4000;
const connectingString = process.env.DATABASE_STRING;

(async () => {
  try {
    await connectDataBase(connectingString);
    await onServer(port, app);
  } catch (error) {
    debug(chalk.red(error.message));
  }
})();

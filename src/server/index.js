const express = require("express");
const debug = require("debug")("my-robots:server");
const chalk = require("chalk");
const morgan = require("morgan");
const { notFoundError, globalError } = require("./middlewares/errors");

const app = express();

const onServer = (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.green(`Server can hear you in http://localhost${port}`));
      resolve();
    });

    server.on("error", (error) => {
      reject(new Error(`Error on server: ${error.message}`));
    });
  });

app.use(morgan("dev"));
app.use(express.json());

app.use(notFoundError);
app.use(globalError);

module.exports = onServer;

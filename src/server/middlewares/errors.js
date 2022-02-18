const debug = require("debug")("alumnos:server:middlewares:errors");
const chalk = require("chalk");

const notFoundError = (req, res) => {
  res.status(404).json({ error: true, message: "Rusurce not found" });
};

// eslint-disable-next-line no-unused-vars
const globalError = (err, req, res, next) => {
  debug(chalk.red(`Error on server: ${err.message}`));
  res.status(500);
  res.json({ error: "Error on server" });
};

module.exports = {
  notFoundError,
  globalError,
};

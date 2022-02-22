const debug = require("debug")("my-robots:server");
const chalk = require("chalk");

const onServer = (port, app) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.green(`Server can hear you in http://localhost${port}`));
      resolve();
    });

    server.on("error", (error) => {
      reject(new Error(`Error on server: ${error.message}`));
    });
  });

module.exports = onServer;

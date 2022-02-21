const notFoundError = (req, res) => {
  res.status(404).json({ error: true, message: "Rusurce not found" });
};

// eslint-disable-next-line no-unused-vars
const globalError = (err, req, res, next) => {
  res.json({
    error: true,
    message: err,
  });
};

module.exports = {
  notFoundError,
  globalError,
};

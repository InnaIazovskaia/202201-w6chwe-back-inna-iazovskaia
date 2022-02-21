const jwt = require("jsonwebtoken");

const authUser = (req, res, next) => {
  const headerAuth = req.header("Authorization");
  if (!headerAuth) {
    const error = new Error("Token not found");
    error.code = 401;
    next(error);
  } else {
    const token = headerAuth.replace("Bearer ", "");
    if (!jwt.verify(token, process.env.JWT_SECRET)) {
      const error = new Error("Incorrect token");
      error.code = 401;
      next(error);
    } else {
      next();
    }
  }
};

module.exports = { authUser };

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../db/models/User");

const loginUser = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    const error = new Error("User not found");
    error.code = 401;
    next(error);
  } else {
    const correctPassword = await bcrypt.compare(password, user.password);
    if (!correctPassword) {
      const error = new Error("Passowrd not recognized");
      error.code = 401;
      next(error);
    } else {
      const userDate = {
        username: user.username,
        id: user.id,
      };
      const token = jwt.sign(userDate, process.env.JWT_SECRET);
      res.json({ token });
    }
  }
};

module.exports = { loginUser };

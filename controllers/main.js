const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");
const { StatusCodes } = require("http-status-codes");
const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new CustomAPIError(
      "User must provide username and password",
      StatusCodes.BAD_REQUEST
    );
  }
  const id = Date.now();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(201).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  res.status(200).json({ msg: `Hello, ${req.user.username}` });
};

module.exports = {
  login,
  dashboard,
};

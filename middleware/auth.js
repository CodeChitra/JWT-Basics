const CustomAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");
const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization.split(" ");
  if (token[0] !== "Bearer")
    throw new CustomAPIError("Please provide valid token", 401);
  const decoded = jwt.verify(token[1], process.env.JWT_SECRET);
  const { username, id } = decoded;
  req.user = { username, id };
  next();
};

module.exports = authMiddleware;

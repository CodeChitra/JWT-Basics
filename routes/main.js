const { login, dashboard } = require("../controllers/main");

const express = require("express");
const authMiddleware = require("../middleware/auth");

const authRouter = express.Router();

authRouter.route("/login").post(login);
authRouter.route("/dashboard").get(authMiddleware, dashboard);

module.exports = authRouter;

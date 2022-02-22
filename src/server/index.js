const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const { notFoundError, globalError } = require("./middlewares/errors");
const robotsRouter = require("./routers/robotRouter");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());

app.use("/robots", robotsRouter);

app.use(notFoundError);
app.use(globalError);

module.exports = app;

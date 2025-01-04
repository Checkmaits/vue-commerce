require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan("tiny")); // remove on production?
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  let version = require("../package.json").version;
  res.status(200).json({ message: `VueCommerce v${version} by @checkmaits ✔️` });
});

app.use((req, res, next) => {
  let error = new Error("Endpoint not found ❌");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) =>
  res.status(error.status || 500).json({ message: error.message || "Internal server error ❌" })
);

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => {
    let port = process.env.PORT || 1234;
    app.listen(port, () => console.log(`[VueCommerce]: Server listening on port ${port}`));
  })
  .catch((error) => console.error(error));

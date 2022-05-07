const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
require("dotenv").config({ path: "./config/.env" });
require("./config/db.js");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("tiny"));
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});

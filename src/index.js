const express = require("express");
const { PORT } = require("./constants");
const expressConfig = require("./configs/expressConfig");
const handlebarsConfig = require("./configs/handlebarsConfig");
const mongooseConfig = require("./configs/mongooseConfig");

const app = express();
async function startApp(app) {
  try {
    expressConfig(app);
    handlebarsConfig(app);
    mongooseConfig(app);
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}
startApp(app);

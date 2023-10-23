const express = require("express");
const app = express();
const { PORT } = require("./constants");
app.get("/", (req, res) => {
  res.send("Welcome to Express.");
});
app.listen(PORT, () => console.log(`App is listening on ${PORT}`));

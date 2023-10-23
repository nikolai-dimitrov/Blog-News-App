const router = require("express").Router();

router.get("/login", (req, res) => {
  res.send("Login page");
});

router.post("/login", (req, res) => {});

router.get("/register", (req, res) => {
  res.send("Register page");
});

router.post("/register", (req, res) => {});

router.get("/logout", (req, res) => {});
module.exports = router;

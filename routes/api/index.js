const express = require("express");
const router = express.Router();
const topicRoutes = require("./topic");
const responseRoutes = require("./response");
const userRoutes = require("./users");

router.use("/topic", topicRoutes);
router.use("/responses", responseRoutes);
router.use("/users", userRoutes);
router.get("/test", (req, res) => {
  res.send("Hello")
});

module.exports = router;

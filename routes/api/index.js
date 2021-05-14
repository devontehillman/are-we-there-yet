const express = require("express");
const router = express.Router();
const topicRoutes = require("./topic");
// const responseRoutes = require("./response");

// router.use("/topic", topicRoutes);
// router.use("/responses", responseRoutes);
router.get("/test", (req, res) => {
  res.send("Hello")
});

module.exports = router;

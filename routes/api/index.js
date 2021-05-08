const router = require("express").Router();
const topicRoutes = require("./topic");
const responseRoutes = require("./response");

// Book routes
router.use("/topics", topicRoutes);
router.use("/responses", responseRoutes);

module.exports = router;
const router = require("express").Router();
const topicRoutes = require("./topic");
const responseRoutes = require("./response");

router.use("/topic", topicRoutes);
// router.use("/responses", responseRoutes);
router.get("/test", () => {console.log("hello")});

module.exports = router;
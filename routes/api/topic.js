const router = require("express").Router();
const topicController = require("../../controllers/TopicController");

router.get("/topic", topicController.findAll)
router.post("/topic", topicController.create)
// router.route("/")
//     .get(topicController.findAll)
//     .post(topicController.create);

router.get("/topic/:id", topicController.findById)
    // .route("/:id");
    // .delete(topicController.remove);

module.exports = router;
const router = require("express").Router();
const topicController = require("../../controllers/TopicController");

router.get("/", topicController.findAll)
router.post("/", topicController.create)
// router.route("/")
//     .get(topicController.findAll)
//     .post(topicController.create);

// router
//     .route("/:id")
//     .get(topicController.findById);
//     .delete(topicController.remove);

module.exports = router;
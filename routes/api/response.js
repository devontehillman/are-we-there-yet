const router = require("express").Router();
const responseController = require("../../controllers/ResponseController");

router.route("/").get(topicController.findAll).post(topicController.create);

router
  .route("/:id")
  .get(topicController.findById)
  .delete(topicController.remove);

module.exports = router;

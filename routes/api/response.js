const router = require("express").Router();
const responseController = require("../../controllers/ResponseController");

router
  .route("/")
  .get(responseController.findAll)
  .post(responseController.create);

router
  .route("/:topicID")
  // .get(responseController.findById)
  .get(responseController.findAllAnswers);

router.get("/test", (req, res) => {
  res.send("Responses");
});

module.exports = router;

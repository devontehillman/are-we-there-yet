const router = require("express").Router();
const responseController = require("../../controllers/ResponseController");

router
  .route("/")
  .get(responseController.findAll)
  .post(responseController.create);

router.route("/:id").get(responseController.findById);

module.exports = router;

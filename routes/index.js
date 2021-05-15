const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// router.get("/test", () => {console.log("hello")});

// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
//   });

module.exports = router;

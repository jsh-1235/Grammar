var express = require("express");
var router = express.Router();

/* GET study_immutable page. */
router.get("/", function (req, res, next) {
  res.render("study_immutable", { title: "study_immutable" });
});

module.exports = router;

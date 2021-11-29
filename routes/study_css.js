var express = require("express");
var router = express.Router();

/* GET study_css page. */
router.get("/", function (req, res, next) {
  res.render("study_css", { title: "study_css" });
});

module.exports = router;

var express = require("express");
var router = express.Router();

/* GET study_oop page. */
router.get("/", function (req, res, next) {
  res.render("study_oop", { title: "study_oop" });
});

module.exports = router;

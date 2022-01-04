var express = require("express");
var router = express.Router();

var rectangle = require("../public/study_js/js/rectangle");

/* GET study_dream_coding page. */
router.get("/", function (req, res, next) {
  res.render("study_dream_coding", { title: "study_dream_coding", area: rectangle.area(10, 10) });
});

module.exports = router;

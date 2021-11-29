var express = require("express");
var router = express.Router();

var rectangle = require("../public/study_js/js/rectangle");

/* GET study_js page. */
router.get("/", function (req, res, next) {
  res.render("study_js", { title: "study_js", area: rectangle.area(10, 10) });
});

module.exports = router;

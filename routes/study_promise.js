var express = require("express");
var router = express.Router();

/* GET study_promise page. */
router.get("/", function (req, res, next) {
  res.render("study_promise", { title: "study_promise" });
});

module.exports = router;

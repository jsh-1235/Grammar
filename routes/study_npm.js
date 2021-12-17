var express = require("express");
var router = express.Router();

var math = require("@jsh-1235/math");

/* GET study_npm page. */
router.get("/", function (req, res, next) {
  const numbers = [1, 2, 3, 4];

  res.render("study_npm", { title: "study_npm", numbers: numbers, sum: math.sum(numbers) });
});

module.exports = router;

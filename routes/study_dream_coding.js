var express = require("express");
var router = express.Router();

var rectangle = require("../public/study_js/js/rectangle");

function sum1(args) {
  let result = 0;

  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }

  return result;
}

// Conditional Breakpoint
// Expression : i = 10
// Hit Count : = 10, > 10, < 10, >= 10, 10 <=
// Log Message
function sum2(args) {
  return args.reduce((result, value) => result + value, 0);
}

/* GET study_dream_coding page. */
router.get("/", function (req, res, next) {
  console.log("sum1", sum1([1, 2, 3, 4, 5]));
  console.log("sum2", sum2([1, 2, 3, 4, 5]));

  res.render("study_dream_coding", { title: "study_dream_coding", area: rectangle.area(10, 10) });
});

module.exports = router;

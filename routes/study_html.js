var express = require("express");
var router = express.Router();

/* GET study_html page. */
router.get("/", function (req, res, next) {
  if (req.query != null) {
    console.log(req.query);

    var color = req.query.color;

    res.render("study_html", { title: "study_html", color: color });
  } else {
    res.render("study_html", { title: "study_html" });
  }
});

router.post("/", function (req, res, next) {
  console.log(req.body);
});

module.exports = router;

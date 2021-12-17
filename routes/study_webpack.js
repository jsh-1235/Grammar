var express = require("express");
var router = express.Router();

/* GET study_webpack listing. */
router.get("/", function (req, res, next) {
  res.render("study_webpack", { title: "study_webpack" });
});

module.exports = router;

// Bundler
// Webpack, Browserify, Parcel

// 하나의 파일로 묶는다.
// 모듈화 및 Cross Browser Issue 해결 (구형 브라우저에서도 모듈화가 가능하다.)

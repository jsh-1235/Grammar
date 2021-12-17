var express = require("express");
var router = express.Router();

/* GET study_redux page. */
router.get("/", function (req, res, next) {
  res.render("study_redux", { title: "study_redux" });
});

module.exports = router;

// Redux
// A predictable state container for JavaScript apps
// 코드의 복잡성을 낯추어서 예측 가능하게 해준다.

// Single Source Truth (state = {})
// 단 하나의 State를 갖는다.
// 외부로 부터 접근 차단

// Easy : Undo & Redo (복제된 객체 사용)
// 디버깅 시 이전 상태도 레코딩 가능하다.
// Hot Module Reloading

// state - reducer - dispatch(변경), subscribe, getState - render
// store는 직접 접근 불가능

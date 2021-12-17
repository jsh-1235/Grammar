var express = require("express");
var router = express.Router();
var moment = require("moment");
var momentTimezone = require("moment-timezone");

var rectangle = require("../public/study_js/js/rectangle");

/* GET study_web_browser page. */
router.get("/time", function (req, res, next) {
  const data = new Date();

  console.log(data);

  res.send(data);
});

router.post("/time", function (req, res, next) {
  const data = new Date();

  console.log(data);

  res.send(data);
});

router.post("/date", function (req, res, next) {
  console.log(req.url, req.body.timezone, req.body.format);

  const data = `${req.body.timezone} ${req.body.format}`;

  res.send(data);
});

router.get("/ajax_basic", function (req, res, next) {
  console.log(req.url, req.method, req.baseUrl);

  const arr = ["정승훈", "강아름", "정순", "정윤"];

  const arr_string = arr.join();

  console.log(typeof arr_string, arr_string);

  res.send(arr_string);
});

router.post("/ajax_json", function (req, res, next) {
  // console.log(req.url, req.method, req.baseUrl, req.statusCode, req.hostname, req.httpVersion);
  // console.log(req.headers.host, req.headers.method, req.headers.statusCode);

  console.log(req.body.family);

  const arr = req.body.family;

  res.send(JSON.stringify(arr));
});

router.post("/ajax_jquery", function (req, res, next) {
  console.log(req.url, req.method, req.baseUrl, req.statusCode, req.hostname, req.httpVersion);
  // console.log(req.body.timezone, req.body.format);

  const date = new Date();
  console.log(date.toISOString(), date.toJSON());
  console.log(`moment => ${moment()}`);
  console.log(`포맷 지정 출력 => ${moment().format("YYYY년 MM월 DD일")}`);
  console.log(`포맷 지정 출력 => ${moment().format("YYYY-MM-DD HH:mm:ss")}`);

  const result = moment().tz(req.body.timezone).format(req.body.format);
  console.log(result);
  console.log(moment().tz(req.body.timezone).format("LL"));
  console.log(momentTimezone.tz(req.body.timezone).format(req.body.format));

  res.send(result);
});

router.get("/", function (req, res, next) {
  res.render("study_web_browser", { title: "study_web_browser" });
});

module.exports = router;

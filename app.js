var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var study_html = require("./routes/study_html");
var study_css = require("./routes/study_css");
var study_js = require("./routes/study_js");
var study_web_browser = require("./routes/study_web_browser");
var study_oop = require("./routes/study_oop");
var study_immutable = require("./routes/study_immutable");
var study_redux = require("./routes/study_redux");
var study_npm = require("./routes/study_npm");
var study_webpack = require("./routes/study_webpack");
var study_promise = require("./routes/study_promise");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "/node_modules")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/study_html", study_html);
app.use("/study_css", study_css);
app.use("/study_js", study_js);
app.use("/study_web_browser", study_web_browser);
app.use("/study_oop", study_oop);
app.use("/study_immutable", study_immutable);
app.use("/study_redux", study_redux);
app.use("/study_npm", study_npm);
app.use("/study_webpack", study_webpack);
app.use("/study_promise", study_promise);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

var createError = require("http-errors");
var express = require("express");
var path = require("path");
//var cookieParser = require('cookie-parser');
var logger = require("morgan");
const dotenv = require("dotenv");
var cors = require("cors");
const mongoose = require("mongoose");
const fast2sms = require('fast-two-sms');

dotenv.config({ path: "../.env" });

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var adminRouter = require("./routes/admin");
var localityRouter = require("./routes/locality");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser);
app.use(express.static(path.join(__dirname, "public")));

app.post("/predict", (req, res) => {
  console.log("predict");
  let spawn = require("child_process").spawn;
  let gender = 0;
  let density = 10644;
  let age = 35;
  let income = 5600;
  let policestationcount = 4;
  let petrolingvans = 2;
  let moralitylevel = 8;

  var process = spawn("python", [
    "../predict_crimerate.py",
    gender,
    density,
    age,
    income,
    policestationcount,
    petrolingvans,
    moralitylevel,
  ]);

  process.stdout.on("data", (data) => {
    let d = data.toString();
    console.log(d);
    var str = d.split("\r\n");
    str.pop();
    console.log(str);
  });
});

app.post("/predict_locality", (req, res) => {
  //take co-ordinates from user/auto co-ordinates
  let x = 85.762672;
  let y = 25.768281;

  let spawn = require("child_process").spawn;

  let process = spawn("py", ["../predict_locality.py", x, y]);

  process.stdout.on("data", (data) => {
    let d = data.toString();
    console.log(d);
  });
});

app.post('/sendMessage', async (req,res)=>{
  const response = fast2sms.sendMessage({authorization : process.env.API_KEY, message : "I'm in danger! help!", numbers :[req.body.number]});
  res.send(response);
})

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/admin", adminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection to DB Successful!");
  })
  .catch((err) => {
    console.log(err);
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

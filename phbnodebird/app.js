const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");
const nunjucks = require("nunjucks");
const dotenv = require("dotenv");
const passport = require("passport");

dotenv.config();
const pageRouter = require("./routes/page"); // page라우팅 기능을 다 가지고 있음
const authRouter = require("./routes/auth");
const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const gameRouter = require("./routes/game"); // game
const { sequelize } = require("./models"); // sequelize 기능으로 데이터 베이스를 만듬 [ (""./models") 뒤에 없으면 default로 index.js 실행 ]
const passportConfig = require("./passport"); // ("./passport") 뒤에 없으면 default로 index.js 실행

const app = express();
passportConfig(); // 패스포트 설정
app.set("port", process.env.PORT || 8001);
app.set("view engine", "html");

// nunjucks이 html파일 실행
nunjucks.configure("views", {
  express: app,
  watch: true,
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  }); // sequelize DB 객체 생성

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "game")));
app.use("/img", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", pageRouter); // localhost:8001/  --> "/" 페이지 객체로 라우터 시키겠다.
app.use("/auth", authRouter);
app.use("/post", postRouter);
app.use("/user", userRouter);
app.use("/game", gameRouter); // game Router

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});

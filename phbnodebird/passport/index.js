// 패스포트 모듈 작성

const passport = require("passport");
const local = require("./localStrategy");
const kakao = require("./kakaoStrategy");
const User = require("../models/user"); // 로그인 하기 위해서 User 테이블을 가져옴

module.exports = () => {
  // serializeUser : 세션에 사용자 아이디만 넣겠다.
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // deserializeUser : DB의 User 테이블에 아이디가 있는 확인
  passport.deserializeUser((id, done) => {
    console.log("deserialize");
    User.findOne({
      where: { id },
      include: [
        {
          model: User,
          attributes: ["id", "nick"],
          as: "Followers",
        },
        {
          model: User,
          attributes: ["id", "nick"],
          as: "Followings",
        },
      ],
    })
      .then((user) => {
        console.log("user", user);
        done(null, user);
      })
      .catch((err) => done(err));
  });

  local();
  kakao();
};

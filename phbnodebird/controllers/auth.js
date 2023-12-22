// routes파일에 auth.js랑 controllers 파일에 auth.js 분리
const bcrypt = require("bcrypt");
const passport = require("passport");
const User = require("../models/user");

exports.join = async (req, res, next) => {
  const { email, nick, password } = req.body;
  try {
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      return res.redirect("/join?error=exist");
    }
    const hash = await bcrypt.hash(password, 12); // 암호화
    // User 테이블
    await User.create({
      email,
      nick,
      password: hash,
    });
    return res.redirect("/");
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

exports.login = (req, res, next) => {
  passport.authenticate("local", (authError, user, info) => {
    // local 전략을 통해 로그인 하겠다.
    // 아래 코드들이 그것을 확인하는 코드이다.
    if (authError) {
      // 에러 부분이다.
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      // not user은 그러한 user 사용자가 없다
      return res.redirect(`/?error=${info.message}`);
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.redirect("/");
    });
  })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
};

exports.logout = (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
};

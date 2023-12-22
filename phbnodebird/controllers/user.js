const User = require("../models/user");

exports.follow = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.user.id } });
    if (user) {
      // req.user.id가 followerId, req.params.id가 followingId
      await user.addFollowing(parseInt(req.params.id, 10));
      res.send("success");
    } else {
      res.status(404).send("no user");
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.unfollow = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.user.id } });
    if (user) {
      // req.user.id가 followerId, req.params.id가 followingId
      await user.removeFollowing(parseInt(req.params.id, 10));
      res.send("success");
    } else {
      res.status(404).send("no user");
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.nick = async (req, res, next) => {
  try {
    const newNick = req.body.nick;
    if (!newNick) {
      return res.send(
        '<script>alert("닉네임을 입력하세요."); window.location="/profile";</script>'
      );
    }
    await User.update({ nick: req.body.nick }, { where: { id: req.user.id } });
    res.redirect("/profile");
  } catch (error) {
    console.error(error);
    next(error);
  }
};

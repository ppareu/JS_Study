/**
 * routes/page.js랑 controllers/page.js 분리한 이유
 * 비지니스 로직 분리
 *
 */

const express = require("express");
const { isLoggedIn, isNotLoggedIn } = require("../middlewares");
const {
  renderProfile,
  renderJoin,
  renderMain,
  renderHashtag,
  renderMainMyPosts,
} = require("../controllers/page"); // ../controllers/page 객체 불러옴

const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = req.user;
  res.locals.followerCount = req.user?.Followers?.length || 0; // 내가 팔로우한거
  res.locals.followingCount = req.user?.Followings?.length || 0; // 다른 사람이 팔로잉
  res.locals.followingIdList = req.user?.Followings?.map((f) => f.id) || [];
  next();
}); // res.locals기능 : 다음으로 넘겨주는 기능

router.get("/profile", isLoggedIn, renderProfile);

router.get("/join", isNotLoggedIn, renderJoin);

router.get("/", renderMain);

router.get("/hashtag", renderHashtag);

router.get("/myposts", isLoggedIn, renderMainMyPosts);

module.exports = router;

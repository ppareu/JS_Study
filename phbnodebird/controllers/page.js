/*
req : 요청 객체 
res : 요청을 받으면 보내주는 객체
render - 화면을 그린다 (화면 랜더링)

profile : 자기 정보 (자신의 정보 랜더링)
join : 회원가입
main : 메인 화면
twits : 댓글, 게시글 DB에서 가져옴
*/
const { User, Post, Hashtag } = require("../models");

exports.renderProfile = (req, res) => {
  res.render("profile", { title: "내 정보 - NodeBird" });
};

exports.renderJoin = (req, res) => {
  res.render("join", { title: "회원가입 - NodeBird" });
};

// Main Page
exports.renderMain = async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["id", "nick"],
        },
        {
          model: User,
          attributes: ["id", "nick"],
          as: "Liker",
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    console.log(posts);
    res.render("main", {
      title: "NodeBird",
      twits: posts,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.renderHashtag = async (req, res, next) => {
  const query = req.query.hashtag;
  if (!query) {
    return res.redirect("/");
  }
  try {
    const hashtag = await Hashtag.findOne({ where: { title: query } });
    let posts = [];
    if (hashtag) {
      posts = await hashtag.getPosts({ include: [{ model: User }] });
    }

    return res.render("main", {
      title: `${query} | NodeBird`,
      twits: posts,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

exports.renderMainMyPosts = async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      where: { UserId: req.user.dataValues.id },
      include: {
        model: User,
        attributes: ["id", "nick"],
      },
      order: [["createdAt", "DESC"]],
    });
    console.log(posts);
    return res.render("main", {
      title: "NodeBird",
      twits: posts,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

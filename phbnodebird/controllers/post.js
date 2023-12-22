const { Post, Hashtag } = require("../models");

exports.afterUploadImage = (req, res) => {
  console.log(req.file);
  res.json({ url: `/img/${req.file.filename}` });
};

exports.uploadPost = async (req, res, next) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      img: req.body.url,
      UserId: req.user.id,
    });
    const hashtags = req.body.content.match(/#[^\s#]*/g);
    if (hashtags) {
      const result = await Promise.all(
        hashtags.map((tag) => {
          return Hashtag.findOrCreate({
            where: { title: tag.slice(1).toLowerCase() },
          });
        })
      );
      await post.addHashtags(result.map((r) => r[0]));
    }
    res.redirect("/");
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    await Post.destroy({
      where: { id: req.params.id, userId: req.user.id },
    });
    res.send("OK");
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.like = async (req, res, next) => {
  try {
    const post = await Post.findByPk(req.params.id);
    // console.log("출력 결과 >>>>" + post);
    await post.addLiker(req.user.id);
    res.send("OK");
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.unlike = async (req, res, next) => {
  try {
    const post = await Post.findByPk(req.params.id);
    await post.removeLiker(req.user.id);
    res.send("OK");
  } catch (error) {
    console.error(error);
    next(error);
  }
};

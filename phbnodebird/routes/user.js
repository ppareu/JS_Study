const express = require("express");

const router = express.Router();
const { isLoggedIn } = require("../middlewares");
const { follow } = require("../controllers/user");
const { unfollow } = require("../controllers/user");
const { nick } = require("../controllers/user");
// POST /user/:id/follow
router.post("/:id/follow", isLoggedIn, follow);

router.post("/:id/unfollow", isLoggedIn, unfollow);

router.post("/profile", nick);

module.exports = router;

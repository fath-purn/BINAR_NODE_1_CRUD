const express = require("express");

const router = express.Router();

const {
  create,
  index,
  show,
  update,
  destroy,
} = require("../handlers/v1/post/posts");

router.get("/", (req, res) => {
  res.status(200).json({
    true: true,
    message: "Welcome to api v1",
  });
});

router.get("/posts", index);
router.get("/posts/:id", show);
router.post("/posts", create);
router.put("/posts/:id", update);
router.delete("/posts/:id", destroy);

module.exports = router;

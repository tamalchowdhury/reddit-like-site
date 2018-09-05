const router = require('express').Router();
const Message = require('../models/Message');
const Post = require('../models/Post');

router.get('/all', async (req, res) => {
  try {
    const posts = await Post.find({}).sort({ posted: -1 });
    res.send(posts);
  } catch (error) {
    res.sendStatus(404);
  }
});

router.post('/post', async (req, res) => {
  try {
    res.sendStatus(200);
    const post = new Post(req.body);
    await post.save();
  } catch (error) {
    res.sendStatus(403);
  }
});

module.exports = router;

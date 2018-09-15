const router = require('express').Router();
const Post = require('../models/Post');

router.get('/all', async (req, res) => {
  try {
    const posts = await Post.find({})
      .limit(100)
      .sort({ posted: -1 });
    res.send(posts);
  } catch (error) {
    res.sendStatus(404);
  }
});

router.post('/signup', (req, res) => {
  try {
    req.session.cookie.username = req.body.username;
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(403);
  }
});

router.post('/logout', (req, res) => {
  try {
    req.session.destroy();
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(403);
  }
});

router.post('/post', async (req, res) => {
  try {
    res.sendStatus(200);
    const post = new Post(req.body);
    await post.save();
  } catch (error) {
    console.log('Error in here!' + error.message);
    res.sendStatus(403);
  }
});

router.post('/vote', async (req, res) => {
  try {
    const post = await Post.findOneAndUpdate({ _id: req.body.id }, req.body, {
      new: true,
      runValidators: true
    });
    // res.sendStatus(200);
    res.json(req.body);
  } catch (error) {
    if (error) {
      console.log(error.message);
    }
    res.sendStatus(404);
  }
});

module.exports = router;

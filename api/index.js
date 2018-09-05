const router = require('express').Router();
const Message = require('../models/Message');

router.get('/all', async (req, res) => {
  try {
    const messages = await Message.find({});
    res.send(messages);
  } catch (error) {
    res.sendStatus(404);
  }
});

router.post('/post', async (req, res) => {
  try {
    res.sendStatus(200);
    const message = new Message(req.body);
    await message.save();
  } catch (error) {
    res.sendStatus(403);
  }
});

module.exports = router;

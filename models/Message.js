const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  message: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Message', messageSchema);

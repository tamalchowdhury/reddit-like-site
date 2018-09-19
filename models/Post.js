const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
    maxlength: 100
  },
  body: {
    type: String,
    trim: true,
    maxlength: 300
  },
  author: {
    type: String,
    maxlength: 20,
    trim: true
  },

  posted: {
    type: Date,
    default: Date.now()
  },
  votes: {
    type: Number,
    default: 1,
    max: 100
  }
});

module.exports = mongoose.model('Post', postSchema);

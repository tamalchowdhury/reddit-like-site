const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    lowercase: true,
    trim: true
  }
});

module.exports = mongoose.model('Author', authorSchema);

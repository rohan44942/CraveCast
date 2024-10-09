const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  restaurantId: {
    type: String, // or ObjectId if referencing a restaurant model
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Comment', commentSchema);

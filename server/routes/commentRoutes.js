const express = require('express');
const router = express.Router();
const Comment = require('../models/commentModel');

// Get all comments for a restaurant
// routes/commentRoutes.js
router.get('/:restaurantId', async (req, res) => {
  try {
    const comments = await Comment.find({ restaurantId: req.params.restaurantId });
    res.json(comments);
    console.log(comments)
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// Post a new comment for a restaurant
router.post('/', async (req, res) => {
  const { restaurantId, comment } = req.body;
  
  try {
    const newComment = new Comment({ restaurantId, comment });
    await newComment.save();
    res.status(200).json(newComment);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;

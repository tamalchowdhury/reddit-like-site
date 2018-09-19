const router = require('express').Router();
const Post = require('../models/Post');
const appController = require('../controllers/appController');

// GET all posts in the runtime
router.get('/all', appController.getAll);

// Signup for a username
router.post('/signup', appController.signup);

// Logout
router.post('/logout', appController.logout);

// POST an update
// NEEDS verification
router.post('/post', appController.generalValidation, appController.postUpdate);

// POST vote
// NEEDS verification
router.post('/vote', appController.checkVotes, appController.vote);

module.exports = router;

const express = require('express');
const router = express.Router();

const commentController = require('../controller/CommentController');

router.post('/', commentController.store);

module.exports = router;
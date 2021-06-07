const express = require('express');
const router = express.Router();

const articleController = require('../controller/ArticleController');

router.get('/', articleController.index);
router.post('/', articleController.store);
router.get('/:id', articleController.getOne);
router.patch('/:id', articleController.update);
router.delete('/:id', articleController.delete);

module.exports = router;
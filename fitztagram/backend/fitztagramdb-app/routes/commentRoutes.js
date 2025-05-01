const express = require("express");
const router = express.Router();
const Controllers = require('../controllers');

router.get('/populate', (req,res) => {
    Controllers.commentController.populateComment(res);
});

// Get request
router.get('/', (req,res) => {
    Controllers.commentController.getComment(res);
});

router.get('/post/:postId', (req,res) => {
    Controllers.commentController.getCommentByPostId(req,res);
});

// Post request
router.post('/create', (req,res) => {
    Controllers.commentController.createComment(req.body, res);
});

// put request
router.put('/:id', (req, res) => {
    Controllers.commentController.updateComment(req, res)
});

// Delete request
router.delete('/:id',(req, res) => {
    Controllers.commentController.deleteComment(req, res)
});

module.exports = router;
const express = require("express");
const router = express.Router();
const Controllers = require('../controllers');

router.get('/populate', (req,res) => {
    Controllers.postController.populatePost(res);
});

// Get request
router.get('/', (req,res) => {
    Controllers.postController.getPost(res);
});

// Post request
router.post('/create', (req,res) => {
    Controllers.postController.createPost(req.body, res);
});

// put request
router.put('/:id', (req, res) => {
    Controllers.postController.updatePost(req, res)
});

// Delete request
router.delete('/:id',(req, res) => {
    Controllers.postController.deletePost(req, res)
});

module.exports = router;
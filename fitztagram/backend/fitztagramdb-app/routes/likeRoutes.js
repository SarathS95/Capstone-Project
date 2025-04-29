const express = require("express");
const router = express.Router();
const Controllers = require('../controllers');

router.get('/populate', (req,res) => {
    Controllers.likeController.populateLike(res);
});

// Get request
router.get('/', (req,res) => {
    Controllers.likeController.getLike(res);
});

// Post request
router.post('/create', (req,res) => {
    Controllers.likeController.createLike(req.body, res);
});

// put request
router.put('/:id', (req, res) => {
    Controllers.likeController.updateLike(req, res)
});

// Delete request
router.delete('/:id',(req, res) => {
    Controllers.likeController.deleteLike(req, res)
});

module.exports = router;
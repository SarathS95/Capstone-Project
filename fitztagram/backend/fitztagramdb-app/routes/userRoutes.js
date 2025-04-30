const express = require("express");
const router = express.Router();
const Controllers = require('../controllers');

router.get('/populate', (req,res) => {
    Controllers.userController.populateUser(res);
});

router.get('/email/:email', (req, res) => {
    const email = req.params.email;
    Controllers.userController.getUserByEmail(email, res);
});
// Get request
router.get('/', (req,res) => {
    Controllers.userController.getUser(res);
});

// Post request
router.post('/create', (req,res) => {
    Controllers.userController.createUser(req.body, res);
});

// put request
router.put('/:id', (req, res) => {
    Controllers.userController.updateUser(req, res)
});

// Delete request
router.delete('/:id',(req, res) => {
    Controllers.userController.deleteUser(req, res)
});

module.exports = router;
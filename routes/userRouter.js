const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.route('/')
    .get(usersController.getAllUsers)
    .post(usersController.createNewUser);

router.route('/:id')
    .get(usersController.getUserById)
    .patch(usersController.updateUserById)
    .delete(usersController.deleteUserById);

module.exports = router;
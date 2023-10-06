const express = require('express');
const {
    GetUser,
    UpdateUser,
    DeleteUser,
    Login,
    CreateAccount
} = require('../controller/UserController');
const router = express.Router();

//login
router.post('/login', Login);

//signup
router.post('/signup', CreateAccount);

//get a specific user
router.get('/:id', GetUser);

//delete a user
router.delete('/delete/:id', DeleteUser);

//update a user
router.patch('/update', UpdateUser);

module.exports = router;
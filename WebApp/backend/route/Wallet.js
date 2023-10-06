const express = require('express');
const {
    GetWallet,
    UpdateWallet,
    DeleteWallet,
} = require('../controller/WalletController');
const router = express.Router();

//get a specific user
router.get('/:id', GetWallet);

//update a user
router.patch('/update/:id', UpdateWallet);

module.exports = router;
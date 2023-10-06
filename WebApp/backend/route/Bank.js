const express = require('express');
const {
    GetAllBanks,
    GetAllBank,
    DeleteBank,
    AddNewBank,
    SendMoney
} = require('../controller/BankController');
const router = express.Router();

//get a all banks
router.get('/', GetAllBanks);
//add a new bank to wallet
router.post('/', AddNewBank);
//send money
router.patch('/sendmoney', SendMoney)
module.exports = router;
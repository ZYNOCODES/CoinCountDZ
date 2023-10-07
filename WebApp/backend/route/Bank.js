const express = require('express');
const {
    GetAllBanks,
    GetAllBank,
    DeleteBank,
    AddNewBank,
    SendMoney,
    RequestPayment,
    Windraw
} = require('../controller/BankController');
const router = express.Router();

//get a all banks
router.get('/', GetAllBanks);
//add a new bank to wallet
router.post('/', AddNewBank);
//send money
router.patch('/sendmoney', SendMoney);
//request payment
router.patch('/requestpayment', RequestPayment)
//windraw money
router.patch('/windraw', Windraw)

module.exports = router;
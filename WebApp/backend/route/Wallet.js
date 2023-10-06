const express = require('express');
const {
    GetWallet,
    UpdateWallet,
    DeleteWallet,
    MonthlySpending,
    AverageSpendingInTotal
} = require('../controller/WalletController');
const router = express.Router();

//get a specific user
router.get('/:id', GetWallet);

//update a user
router.patch('/update/:id', UpdateWallet);

//get MonthlySpending
router.get('/Monthly/Spending', MonthlySpending);
//get AverageSpendingInTotal
router.get('/Average/SpendingInTotal', AverageSpendingInTotal);
module.exports = router;
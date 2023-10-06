const express = require('express');
const {
    GetAllTransactions,
    GetTransactionsByCategory,
} = require('../controller/TransactionController');
const router = express.Router();

//get a all Transactions
router.get('/', GetAllTransactions);
//get a all Transactions by Category
router.get('/Category', GetTransactionsByCategory);
 
module.exports = router;
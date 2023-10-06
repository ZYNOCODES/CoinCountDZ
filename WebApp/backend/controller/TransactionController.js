const Transaction = require('../model/TransactionModel');
const validator = require('validator');

//get all Transactions
const GetAllTransactions = async (req, res) => {
    try {
        const transaction = await Transaction.findAll({});
        if (!transaction || transaction.length <= 0) {
          return res.status(404).json({ error: 'Transactions not found' });
        }
        res.status(200).json(transaction);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error getting Transaction');
    }
}
//get Transaction by category
const GetTransactionsByCategory = async (req, res) => {
    const { Type } = req.body;
    try {
        const transaction = await Transaction.findAll({
            where:{
                Type: Type
            }
        });

        if (!transaction || transaction.length <= 0) {
          return res.status(404).json({ error: 'Transactions not found' });
        }
        
        res.status(200).json(transaction);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error getting Transaction');
    }
}

module.exports = {
    GetAllTransactions,
    GetTransactionsByCategory,
}
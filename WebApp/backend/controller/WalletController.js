const Wallet = require('../model/WalletModel');
const Transaction = require('../model/TransactionModel');
const validator = require('validator');
const Sequelize = require('sequelize');

//get Wallet by id
const GetWallet = async (req, res) => {
    const { id } = req.params;
    try {
        const wallet = await Wallet.findOne({
            where:{
                UserID: id
            }
        });

        if (!wallet) {
          return res.status(404).json({ error: 'Wallet not found' });
        }
        
        res.status(200).json(wallet);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error getting Wallet');
    }
}
//update Wallet
const UpdateWallet = async (req, res) => {
    const {id} = req.params;
    const { Balance, Savings} = req.body;
    try {

        if(!Balance && !Savings){
            return res
              .status(400)
              .json({ message: "remplis tout les champs" });
        }
        //get Wallet by id
        const wallet = await Wallet.findByPk(id);
        //check if Wallet exist
        if (!wallet) {
            return res.status(404).json({ error: 'Wallet not found' });
        }
        // assign Wallet new values
        if (Balance) wallet.Balance = Balance;
        if (Savings) wallet.Savings = Savings;
        // save Wallet
        await wallet.save();
        // return updated Wallet
        res.json({Wallet: Wallet, message: 'Wallet updated successfully'});
    } catch (error) {
      console.error(error);
      res.status(500).send('Error updating Wallet');
    }
}
//delete Wallet
const DeleteWallet = async (req, res) => {
    const { id } = req.params;
    try {
        const wallet = await Wallet.findByPk(id);

        if (!wallet) {
          return res.status(404).json({ error: 'Wallet not found' });
        }
  
        await wallet.destroy().then(()=>{
            res.json({ message: 'Wallet deleted successfully' });
        }).catch(err => console.log(err));
    } catch (error) {
      console.error(error);
      res.status(500).send('Error getting Wallet');
    }
}

//
const MonthlySpending = async (req, res)=>{
    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear();

    // Calculate the first day of the current month
    const firstDayOfMonth = new Date(currentYear, currentMonth - 1, 1);

    // Calculate the last day of the current month
    const lastDayOfMonth = new Date(currentYear, currentMonth, 0);

    // Query the database for spending data in the current month
    await Transaction.findAll({
        where: {
            createdAt: {
              [Sequelize.Op.between]: [firstDayOfMonth, lastDayOfMonth],
            },
            Type: {
              [Sequelize.Op.or]: ['shop', 'Send'],
            },
        },
    })
    .then((spendings) => {
        // Calculate the total spending for the month
        const totalSpending = spendings.reduce((sum, spending) => sum - spending.Amount, 0);
        res.status(200).json({totalSpending: totalSpending.toFixed(2)})
    }).catch((err) => {
        console.error('Error fetching spending data:', err);
    });
}
const AverageSpendingInTotal = async (req, res) =>{
    await Transaction.findAll({
        where: {
          Type: {
            [Sequelize.Op.or]: ['shop', 'Send'],
          },
        },
      }).then((transactions) => {
          // Calculate the total spending for all time
          const totalSpending = transactions.reduce((sum, transaction) => sum - transaction.Amount, 0);
      
          // Calculate the average spending for all time
          const averageSpending = totalSpending / transactions.length;
          res.status(200).json({totalSpending: totalSpending.toFixed(2),averageSpending: averageSpending.toFixed(2)})
        })
}
module.exports = {
    GetWallet,
    UpdateWallet,
    DeleteWallet,
    MonthlySpending,
    AverageSpendingInTotal
}
const Bank = require('../model/BankModel');
const BankClient = require('../model/BankClients');
const Wallet = require('../model/WalletModel');
const Transaction = require('../model/TransactionModel');
const bcrypt = require('bcrypt');
const validator = require('validator');
const { where } = require('sequelize');

//get Bank by id
const GetAllBanks = async (req, res) => {
    try {
        const bank = await Bank.findAll();

        if (!bank) {
          return res.status(404).json({ error: 'Bank not found' });
        }
        
        res.status(200).json(bank);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error getting Bank');
    }
}
//get all Banks by BankID
const GetAllBank = async (req, res) => {
    const { id } = req.body;
    try {
        const bankClient = await BankClient.findAll({
            where:{
                BankID: id,
            }
        });

        if (!bankClient) {
          return res.status(404).json({ error: 'No client found' });
        }
        
        res.status(200).json(bankClient);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error getting Bank');
    }
}
//create bank
const AddNewBank = async (req, res) => {
    const { UserID, BankName, BankID, AccountNumber } = req.body;
    try {
        if(!UserID, !BankName, !AccountNumber){
            return res.status(404).json({ message: "Tout les champs doivent etre remplis" });
        }
        const bankClient = await BankClient.findOne({
            where:{
                BankID: BankID,
                AccountNumber: AccountNumber
            }
        });
        if(!bankClient){
            return res.status(404).json({ message: "Account number incorrect" });
        }
        bankClient.UserID = UserID;
        await bankClient.save();
        res.status(200).json({ message: "Bank added successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error creatting Bank');
    }
}
//send money
const SendMoney = async (req, res) => {
    const { UserID, BankID, AccountNumber, Amount } = req.body;
    try {
        if(!UserID, !BankID, !AccountNumber, !Amount){
            return res.status(404).json({ message: "Tout les champs doivent etre remplis" });
        }
        const bankClient = await BankClient.findOne({
            where:{
                BankID: BankID,
                AccountNumber: AccountNumber
            }
        });
        if(!bankClient){
            return res.status(404).json({ message: "Account number incorrect" });
        }
        const wallet = await Wallet.findOne({
            where:{
                UserID: UserID,
            }
        });
        if(!wallet){
            return res.status(404).json({ message: "dont have a wellet yet" });
        }
        wallet.Balance = parseInt(wallet.Balance) - parseInt(Amount); 
        await wallet.save().then((result)=>{
            
        }).catch(err => console.log(err))
        res.status(200).json({ message: "money sended successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error creatting Bank');
    }
}
// delete a bank
const DeleteBank = async (req, res) => {
    const { id, AccountNumber } = req.body;
    try {
        if(!Balance && !Savings){
            return res
              .status(400)
              .json({ message: "remplis tout les champs" });
        }
        //get bankclient by id
        const bankclient = await BankClient.findOne({
            where:{
                UserID: id,
                AccountNumber: AccountNumber
            }
        });
        //check if bankclient exist
        if (!bankclient) {
            return res.status(404).json({ error: 'client not found' });
        }
        // delete bank from wallet
        bankclient.UserID = null
        // save bankclient
        await bankclient.save();
        // return updated bankclient
        res.json({bankclient: bankclient, message: 'bank deleted successfully'});
    } catch (error) {
      console.error(error);
      res.status(500).send('Error getting Bank');
    }
}
module.exports = {
    GetAllBanks,
    GetAllBank,
    DeleteBank,
    AddNewBank,
    SendMoney
}
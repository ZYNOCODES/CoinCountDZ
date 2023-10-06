const Bank = require('../model/BankModel');
const BankClient = require('../model/BankClients');
const bcrypt = require('bcrypt');
const validator = require('validator');
const { where } = require('sequelize');

//get Bank by id
const GetBank = async (req, res) => {
    const { id } = req.params;
    try {
        const bank = await Bank.findByPk(id);

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
        const BankClient = await BankClient.findAll({
            where:{
                BankID: id,
            }
        });

        if (!BankClient) {
          return res.status(404).json({ error: 'No client found' });
        }
        
        res.status(200).json(BankClient);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error getting Bank');
    }
}
//create bank
const CreatNewBank = async (req, res) => {
    const { id } = req.body;
    try {
        
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
    GetBank,
    GetAllBank,
    DeleteBank,
    CreatNewBank
}
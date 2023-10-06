const Wallet = require('../model/WalletModel');
const validator = require('validator');

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

module.exports = {
    GetWallet,
    UpdateWallet,
    DeleteWallet,
}
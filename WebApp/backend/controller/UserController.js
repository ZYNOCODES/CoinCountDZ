const User = require('../model/userModel');
const Wallet = require('../model/WalletModel');
const crypto = require('crypto');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const validator = require('validator');
const {requireAuth} = require('../middleware/AuthUser');

//jwt secret
const createToken = (id) => {
    return jwt.sign({_id: id}, process.env.SECRET_KEY, {expiresIn: '7d'});
}
//get user by id
const GetUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);

        if (!user) {
          return res.status(404).json({ error: 'user not found' });
        }
        
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error getting user');
    }
}

//signup
const CreateAccount = async (req, res) => {
    try {
        const { Email, Password, ResetPassword, FirstName, LastName, Telephone, Region, Adresse} = req.body;
        try{
            // hash password
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(Password, salt);
    
            //validation
            if(!Email || !Password || !FirstName || !LastName || !Telephone || !Region || !ResetPassword ){
                return res
                  .status(400)
                  .json({ message: "Tous les champs doivent être remplis" });
            }
            //check if email is valid
            if(!validator.isEmail(Email)){
                return res.status(400).json({message: "L'Email n'est pas valide"});
            }
            //check if password match
            if(Password != ResetPassword){
                return res.status(400).json({ message: "Les mots de passe ne correspondent pas" });
            }
            //check if password is strong
            if(!validator.isStrongPassword(Password)){
                return res
                  .status(400)
                  .json({ message: "Mot de passe pas assez fort" });
            }
            //check if user exist already
            const userexist = await User.findOne({
                where: {
                    Email: Email
                }
            });
            if(userexist){
                return res.status(400).json({ message: "Email déjà utilisé" });
            }else{
                //create new user
                const user = await User.create({
                    Email: Email,
                    Password: hash,
                    FirstName: FirstName,
                    LastName: LastName,
                    Telephone: Telephone,
                    Region: Region,
                    Adresse: Adresse,
                });
                if(!user){
                    return res.status(400).json({ message: "Utilisateur non enregistré" });
                }else{
                    //create token
                    const token = createToken(user.id);
                    var id = user.id;
                    //init wallet for user
                    const wallet = await Wallet.findOne({
                        where: {
                            UserID: id 
                        }
                    });
                    if(wallet){
                        return res.status(400).json({ message: "already have a wallet" }); 
                    }else{
                        const wallet = await Wallet.create({
                            Balance: 0,
                            Savings: 0,
                            UserID: id 
                        }); 
                        if(!wallet){
                            return res.status(400).json({ message: "wallet non enregistré" }); 
                        }
                        user.Wallet = wallet.id
                        await user.save();
                        //return result
                        res.status(200).json({id, token});
                    }
                    
                }
            }
            
        }catch(err){
            res.status(400).json({message: err.message});
        }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error getting user');
    }
}

//login
const Login = async (req, res) => {
    const {Email, Password} = req.body;
    try{
        if(!Email || !Password){
            return res
                .status(400)
                .json({ message: "Tout les champs doivent etre remplis" });

        }
        const user = await User.findOne({
            where: {
                Email: Email
            }
        });
        //check if user exist
        if(!user){
            return res.status(400).json({ message: "Email non trouvé" });
        }
        //check if password is correct
        const match = await bcrypt.compare(Password, user.Password);
        if(!match){
            return res.status(400).json({ message: "Mot de passe incorrect" });
        }else{
            //create token
            const token = createToken(user.id);
            var id = user.id;
            //return user
            res.status(200).json({id, token});
        }
    }catch(err){
        res.status(400).json({message: err.message});
    }
}   

const UpdateUser = async (req, res) => {
    const { id, FirstName, LastName, Telephone, Region, Adresse} = req.body;
    try {

        if(!FirstName && !LastName && !Telephone && !Region && !Adresse ){
            return res
              .status(400)
              .json({ message: "remplis tout les champs" });
        }
        //get user by id
        const user = await User.findByPk(id);
        //check if user exist
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        // assign user new values
        if (FirstName) user.FirstName = FirstName;
        if (LastName) user.LastName = LastName;
        if (Telephone) user.Telephone = Telephone;
        if (Region) user.Region = Region;
        if (Adresse) user.Adresse = Adresse;
        // save user
        await user.save();
        // return updated user
        res.json({user: user, message: 'User updated successfully'});
    } catch (error) {
      console.error(error);
      res.status(500).send('Error updating user');
    }
}
const DeleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);

        if (!user) {
          return res.status(404).json({ error: 'user not found' });
        }
  
        await user.destroy().then(()=>{
            res.json({ message: 'user deleted successfully' });
        }).catch(err => console.log(err));
    } catch (error) {
      console.error(error);
      res.status(500).send('Error getting user');
    }
}

// Function to generate a random 16-digit number (as a string)
function generateUniqueNumber() {
  let randomNumber = '';
  for (let i = 0; i < 16; i++) {
    randomNumber += Math.floor(Math.random() * 10).toString();
  }
  return randomNumber;
}

// Function to generate a unique number for a user
async function generateUniqueNumberForUser() {
  let CreditNumber;
  do {
    CreditNumber = generateUniqueNumber();
  } while (!(await isNumberUnique(CreditNumber)));
  return CreditNumber;
}

// Function to check if the generated number is unique
async function isNumberUnique(CreditNumber) {
  const existingUser = await User.findOne({ where: { CreditCardNumber: CreditNumber } });
  return !existingUser;
}

module.exports = {
    GetUser,
    UpdateUser,
    DeleteUser,
    CreateAccount,
    Login
}
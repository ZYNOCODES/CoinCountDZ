require('dotenv').config();

const express = require('express');
const cors = require('cors');
const body = require('body-parser');
const sequelize = require('./config/Database');
const UserRoute = require('./route/User');
const WalletRoute = require('./route/Wallet');
const BankRoute = require('./route/Bank');
const TransactionRoute = require('./route/Transaction');
const DashboardRoute = require('./route/Dashboard');
const RecommandationRoute = require("./route/Recommandation");
const axios = require('axios');

const port = process.env.PORT || 8080;

//express app
const app = express();
 
//midleware
app.use(cors());
app.use(body.json());
app.use(body.urlencoded({limit: '50mb', extended: true}));
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//routes
app.use('/user', UserRoute);
app.use('/Wallet', WalletRoute);
app.use('/Bank', BankRoute);
app.use('/Transaction', TransactionRoute);
app.use('/Dashboard', DashboardRoute);
app.use("/RecommandationSystem", RecommandationRoute);

//connect to db
sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });
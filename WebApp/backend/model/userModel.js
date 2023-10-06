const { DataTypes } = require('sequelize');
const sequelize = require('../config/Database');

const user = sequelize.define('users', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  FirstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  LastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Region: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Telephone: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Adresse: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Wallet:{
    type:DataTypes.BIGINT,
    allowNull: true,
  },
  CreditCardNumber:{
    type:DataTypes.STRING,
    allowNull: true
  },
  ExpiryDate: {
    type:DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  CardNumber:{
    type:DataTypes.STRING,
    allowNull: true
  }
},{
  timestamps: true,
});

module.exports = user;

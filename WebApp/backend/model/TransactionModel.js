const { DataTypes } = require('sequelize');
const sequelize = require('../config/Database');

const transaction = sequelize.define('transactions', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  UserID:{
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Amount: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Sender: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Reciver: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt	: {
    type: DataTypes.DATE,
  },
  updatedAt	: {
    type: DataTypes.DATE,
  },
},{
  timestamps: true,
});

module.exports = transaction;

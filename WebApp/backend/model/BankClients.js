const { DataTypes } = require('sequelize');
const sequelize = require('../config/Database');

const clients = sequelize.define('bankclients', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  AccountNumber: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  BankID: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  UserID: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
},{
  timestamps: true,
});

module.exports = clients;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/Database');

const wallet = sequelize.define('wallet', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  Balance: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  Savings: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  UserID:{
    type: DataTypes.BIGINT,
    allowNull: false,
  }
},{
  timestamps: true,
});

module.exports = wallet;

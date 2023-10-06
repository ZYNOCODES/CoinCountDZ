const { DataTypes } = require('sequelize');
const sequelize = require('../config/Database');

const bank = sequelize.define('banks', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
},{
  timestamps: true,
});

module.exports = bank;

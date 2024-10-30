const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const User = require('./userModel');
const Product = require('./productModel');

const Schedule = sequelize.define('Schedule', {
  date: { type: DataTypes.DATE, allowNull: false },
  status: { type: DataTypes.STRING, defaultValue: 'pending' },
});

Schedule.belongsTo(User);
Schedule.belongsTo(Product);

module.exports = Schedule;

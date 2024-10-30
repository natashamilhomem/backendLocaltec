const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Product = sequelize.define('Product', {
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type:DataTypes.STRING},
  price: { type: DataTypes.FLOAT, allowNull: false },
  available: { type: DataTypes.BOOLEAN, defaultValue: true },
});

module.exports = Product;

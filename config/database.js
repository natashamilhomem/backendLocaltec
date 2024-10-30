const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASS, {
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectado ao MySQL com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ao MySQL:', error.message);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };

const mysql = require('mysql2');

// Cria a conexão
const connection = mysql.createConnection({
  host: '127.0.0.1',  // Host do MySQL
  user: 'root',        // Usuário do MySQL
  password: '$2b#D@1a&^F9!eS8lXqT*9+gNf', // Senha do MySQL
  database: 'localtec'  // Nome do banco de dados
});

// Conecta ao MySQL
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL!');
});

module.exports = connection;

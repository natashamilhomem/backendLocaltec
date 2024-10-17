const express = require('express');
const connection = require('./db');  // Importa a conexão
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rota para buscar todas as empresas
app.get('/empresa', (req, res) => {
  const query = 'SELECT * FROM empresa';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao buscar empresa:', err);
      return res.status(500).json({ error: 'Erro no servidor' });
    }
    res.json(results);
  });
});

// Rota para adicionar uma empresa
app.post('/empresa', (req, res) => {
    console.log('Corpo da Requisição:', req.body);  // Verificando o corpo da requisição
    const { id, cnpj, nome, endereco } = req.body;
  
    if (!cnpj || !nome || !endereco) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }
  
    const query = 'INSERT INTO empresa (cnpj_Organizacao, nome_Organizacao, endereco) VALUES (?, ?, ?)';
    connection.query(query, [cnpj, nome, endereco], (err, results) => {
      if (err) {
        console.error('Erro ao adicionar empresa:', err);
        return res.status(500).json({ error: 'Erro no servidor' });
      }
      res.status(201).json({ id: results.insertId, cnpj, nome, endereco });
    });
  });
  

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
